<template>
  <div id='mapdiv' />
</template>

<script>
export default {
  name: 'MapChart',

  data () {
    return {
      map: null
    }
  },

  props: {
    mapGeojson: { type: Object, required: true },
    data: { type: Array, required: true },

    minColor: { type: String, default: '#f7fbff' },
    maxColor: { type: String, default: '#a52013' },
    // when not provided use data low and high
    minValue: Number,
    maxValue: Number,

    hoverColor: String,
    tooltipText: { type: String, default: '{name}: {value}' },

    height: { type: String, default: '50vw' },
    rotationBreakpoint: { type: Number, default: 0 },
    rotationDeegres: { type: Number, default: 0 },
    rotatedHeight: { type: String, default: '0' },

    backgroundColor: String,
    backgroundOpacity: { type: Number, default: 1 }
  },

  mounted () {
    let am4core = this.$am4core
    let am4maps = this.$am4maps
    let am4charts = this.$am4charts
    let self = this

    // create map, set projection and map geojson
    var map = this.$am4core.create('mapdiv', am4maps.MapChart)
    map.projection = new am4maps.projections.Mercator()
    map.geodata = this.mapGeojson
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
    if (this.hoverColor) {
      var hover = polygonTemplate.states.create('hover')
      hover.properties.fill = this.hoverColor
    }

    // background color
    if (this.backgroundColor) {
      map.background.fill = this.backgroundColor
      map.background.fillOpacity = this.backgroundOpacity
    }

    // heatmap colors
    polygonSeries.heatRules.push({
      target: polygonTemplate,
      property: 'fill',
      minValue: this.minValue,
      min: am4core.color(this.minColor),
      maxValue: this.maxValue,
      max: am4core.color(this.maxColor)
    })

    // horizontal legend
    let horLegend = map.createChild(am4charts.HeatLegend)
    horLegend.series = polygonSeries
    horLegend.minValue = this.minValue
    horLegend.maxValue = this.maxValue
    // alignment
    horLegend.valign = 'bottom'
    horLegend.align = 'center'
    horLegend.width = am4core.percent(30)
    // style
    horLegend.minHeight = 50
    horLegend.markerContainer.height = 20
    horLegend.valueAxis.renderer.minGridDistance = 100
    horLegend.valueAxis.renderer.labels.template.fontSize = 15

    // vertical legend
    let vertLegend = map.createChild(am4charts.HeatLegend)
    vertLegend.orientation = 'vertical'
    vertLegend.series = polygonSeries
    vertLegend.minValue = this.minValue
    vertLegend.maxValue = this.maxValue
    // alignment
    vertLegend.valign = 'middle'
    vertLegend.align = 'right'
    vertLegend.height = am4core.percent(40)
    // style
    vertLegend.marginRight = 80
    vertLegend.markerContainer.width = 20
    vertLegend.valueAxis.renderer.minGridDistance = 50
    vertLegend.valueAxis.renderer.labels.template.fontSize = 15

    // tooltip
    polygonTemplate.tooltipText = this.tooltipText
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
      if (ev.target.pixelWidth < self.rotationBreakpoint) {
        // vertical
        map.svgContainer.htmlElement.style.height = self.rotatedHeight
        map.deltaLatitude = 0
        map.goHome()

        vertLegend.disabled = false
        horLegend.disabled = true
      } else {
        // horizontal
        map.svgContainer.htmlElement.style.height = self.height
        map.deltaLatitude = self.rotationDeegres
        map.goHome()

        vertLegend.disabled = true
        horLegend.disabled = false
      }
    })

    // add css classes
    am4core.options.autoSetClassName = true
  },

  beforeDestroy () {
    if (this.map) {
      this.map.dispose()
    }
  }
}
</script>

<style scoped></style>
