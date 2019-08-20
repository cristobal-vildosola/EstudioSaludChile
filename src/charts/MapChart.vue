<template>
  <div id='mapdiv' />
</template>

<script>
import * as chileLow from '@/assets/map_chile_low.json'

const data = [
  { id: 'CL-AI', value: Math.round(Math.random() * 10000) },
  { id: 'CL-AN', value: Math.round(Math.random() * 10000) },
  { id: 'CL-AP', value: Math.round(Math.random() * 10000) },
  { id: 'CL-AR', value: Math.round(Math.random() * 10000) },
  { id: 'CL-AT', value: Math.round(Math.random() * 10000) },
  { id: 'CL-BI', value: Math.round(Math.random() * 10000) },
  { id: 'CL-CO', value: Math.round(Math.random() * 10000) },
  { id: 'CL-LI', value: Math.round(Math.random() * 10000) },
  { id: 'CL-LL', value: Math.round(Math.random() * 10000) },
  { id: 'CL-LR', value: Math.round(Math.random() * 10000) },
  { id: 'CL-MA', value: Math.round(Math.random() * 10000) },
  { id: 'CL-ML', value: Math.round(Math.random() * 10000) },
  { id: 'CL-RM', value: Math.round(Math.random() * 10000) },
  { id: 'CL-TA', value: Math.round(Math.random() * 10000) },
  { id: 'CL-VS', value: Math.round(Math.random() * 10000) }
]

export default {
  name: 'mapchart',

  data () {
    return {
      data,
      map: null
    }
  },

  mounted () {
    let am4core = this.$am4core
    let am4maps = this.$am4maps
    let am4charts = this.$am4charts

    // add css classes
    am4core.options.autoSetClassName = true

    // create map, set projection and map
    var map = this.$am4core.create('mapdiv', am4maps.MapChart)
    map.projection = new am4maps.projections.Mercator()
    map.geodata = chileLow
    this.map = map

    // set data
    var polygonSeries = map.series.push(new am4maps.MapPolygonSeries())
    polygonSeries.data = this.data
    polygonSeries.useGeodata = true

    // template to change data style
    var polygonTemplate = polygonSeries.mapPolygons.template

    // map stroke
    polygonTemplate.nonScalingStroke = true
    polygonTemplate.strokeWidth = 0.5

    // hover color
    var hover = polygonTemplate.states.create('hover')
    hover.properties.fill = '#6fb148'

    // background color
    // map.background.fill = this.$am4core.color('#aadaff')
    // map.background.fillOpacity = 1

    // heatmap colors
    polygonSeries.heatRules.push({
      target: polygonTemplate,
      property: 'fill',
      minValue: 0,
      min: am4core.color('#f7fbff'),
      maxValue: 10000,
      max: am4core.color('#A52013')
    })

    // horizontal legend
    let heatLegend = map.createChild(am4charts.HeatLegend)
    heatLegend.series = polygonSeries
    heatLegend.minValue = 0
    heatLegend.maxValue = 10000
    // alignment
    heatLegend.valign = 'bottom'
    heatLegend.align = 'center'
    heatLegend.width = am4core.percent(30)
    // style
    heatLegend.minHeight = 50
    heatLegend.markerContainer.height = 20
    heatLegend.valueAxis.renderer.minGridDistance = 50
    heatLegend.valueAxis.renderer.labels.template.fontSize = 15

    // vertical legend
    let verticalHeatLegend = map.createChild(am4charts.HeatLegend)
    verticalHeatLegend.orientation = 'vertical'
    verticalHeatLegend.series = polygonSeries
    verticalHeatLegend.minValue = 0
    verticalHeatLegend.maxValue = 10000
    // alignment
    verticalHeatLegend.valign = 'middle'
    verticalHeatLegend.align = 'right'
    verticalHeatLegend.height = am4core.percent(40)
    // style
    verticalHeatLegend.marginRight = 50
    verticalHeatLegend.markerContainer.width = 20
    verticalHeatLegend.valueAxis.renderer.minGridDistance = 50
    verticalHeatLegend.valueAxis.renderer.labels.template.fontSize = 15

    // tooltip
    polygonTemplate.tooltipText = '{name}: {value}'
    polygonTemplate.tooltipPosition = 'fixed'
    polygonSeries.tooltip.background.filters.clear()

    // disable pan and zoom
    map.seriesContainer.draggable = false
    map.seriesContainer.resizable = false
    map.maxZoomLevel = 1

    // disable wheel interaction
    map.chartContainer.wheelable = false

    // change orientation depending on screen width
    map.events.on('sizechanged', function (ev) {
      if (ev.target.pixelWidth < 600) {
        // vertical
        map.svgContainer.htmlElement.style.height = '90vh'
        map.deltaLatitude = 0
        map.goHome()

        verticalHeatLegend.disabled = false
        heatLegend.disabled = true
      } else {
        // horizontal
        map.svgContainer.htmlElement.style.height = '28vw'
        map.deltaLatitude = 110
        map.goHome()

        verticalHeatLegend.disabled = true
        heatLegend.disabled = false
      }
    })

    /*
    map.events.on('ready', function (ev) {
      polygonSeries.getPolygonById('CL-RM').isHover = true
      polygonSeries.getPolygonById('CL-AT').showTooltip = true
    })
    */
  },

  beforeDestroy () {
    if (this.map) {
      this.map.dispose()
    }
  }
}
</script>

<style scoped></style>
