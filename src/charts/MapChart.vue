<template>
  <div id='mapdiv' />
</template>

<script>
import * as chileLow from '@/assets/map_chile_low.json'

const data = [
  {
    id: 'CL-AI', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AN', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AP', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AR', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AT', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-BI', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-CO', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-LI', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-LL', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-LR', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-MA', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-ML', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-RM', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-TA', value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-VS', value: Math.round(Math.random() * 10000)
  }
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
    // add css classes
    this.$am4core.options.autoSetClassName = true

    // create map, set projection and map
    var map = this.$am4core.create('mapdiv', this.$am4maps.MapChart)
    map.projection = new this.$am4maps.projections.Mercator()
    map.geodata = chileLow
    map.id = 'mapchart'
    this.map = map

    // set data
    var polygonSeries = map.series.push(new this.$am4maps.MapPolygonSeries())
    polygonSeries.data = this.data
    polygonSeries.useGeodata = true

    // template to change data style
    var polygonTemplate = polygonSeries.mapPolygons.template

    // map stroke
    polygonTemplate.nonScalingStroke = true
    polygonTemplate.strokeWidth = 0.5

    // heatmap colors
    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonTemplate,
      min: this.$am4core.color('#deb06f'),
      max: this.$am4core.color('#de1a00')
    })

    // hover color
    var hover = polygonTemplate.states.create('hover')
    hover.properties.fill = '#6fb148'

    // background color
    // map.background.fill = this.$am4core.color('#aadaff')
    map.background.fillOpacity = 1

    // legend
    let heatLegend = map.createChild(this.$am4charts.HeatLegend)
    heatLegend.series = polygonSeries

    // align in the middle of the bottom
    heatLegend.valign = 'bottom'
    heatLegend.align = 'right'
    heatLegend.width = this.$am4core.percent(30)
    heatLegend.marginRight = this.$am4core.percent(35)

    // legend style
    heatLegend.minHeight = 45
    heatLegend.markerContainer.height = 20
    heatLegend.valueAxis.renderer.minGridDistance = 50
    heatLegend.valueAxis.renderer.labels.template.fontSize = 15

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
        map.svgContainer.htmlElement.style.height = '90vh'
        map.deltaLatitude = 0
        map.goHome()
      } else {
        map.svgContainer.htmlElement.style.height = '28vw'
        map.deltaLatitude = 110
        map.goHome()
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
