<template>
  <div id='mapdiv' />
</template>

<script>
import * as chileLow from '@/assets/map_chile_low.json'

const data = [
  {
    id: 'CL-AI',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AN',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AP',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AR',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-AT',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-BI',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-CO',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-LI',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-LL',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-LR',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-MA',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-ML',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-RM',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-TA',
    value: Math.round(Math.random() * 10000)
  }, {
    id: 'CL-VS',
    value: Math.round(Math.random() * 10000)
  }
]

export default {
  name: 'mapchart',

  data () {
    return {
      data
    }
  },

  mounted () {
    // create map, set projection and map
    var map = this.$am4core.create('mapdiv', this.$am4maps.MapChart)
    map.projection = new this.$am4maps.projections.Mercator()
    map.geodata = chileLow

    // rotate to horizontal position
    map.deltaLatitude = 110

    // set data
    var polygonSeries = map.series.push(new this.$am4maps.MapPolygonSeries())
    polygonSeries.data = this.data
    polygonSeries.useGeodata = true

    // template to change data style
    var polygonTemplate = polygonSeries.mapPolygons.template

    // heatmap colors
    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonTemplate,
      min: this.$am4core.color('#dab592'),
      max: this.$am4core.color('#ff2500')
    })

    // hover color
    var hover = polygonTemplate.states.create('hover')
    hover.properties.fill = '#6fb148'

    // background color
    map.background.fill = this.$am4core.color('#aadaff')
    map.background.fillOpacity = 1

    // legend
    let heatLegend = map.createChild(this.$am4charts.HeatLegend)
    heatLegend.series = polygonSeries

    // align in the middle of the bottom
    heatLegend.valign = 'bottom'
    heatLegend.width = this.$am4core.percent(50)
    heatLegend.align = 'right'
    heatLegend.marginRight = this.$am4core.percent(25)

    // legend style
    heatLegend.minHeight = 45
    heatLegend.markerContainer.height = 20
    heatLegend.valueAxis.renderer.minGridDistance = 50
    heatLegend.valueAxis.renderer.labels.template.fontSize = 20

    // tooltip text and stroke type
    polygonTemplate.tooltipText = '{name}: {value}'
    polygonTemplate.nonScalingStroke = true
    polygonTemplate.strokeWidth = 0.5
    polygonSeries.tooltip.background.filters.clear()

    // disable pan and zoom
    map.seriesContainer.draggable = false
    map.seriesContainer.resizable = false
    map.maxZoomLevel = 1

    // allow page scroll when mouse over map
    map.chartContainer.wheelable = false

    // enable responsive
    map.responsive.enabled = true

    this.map = map
  },

  beforeDestroy () {
    if (this.map) {
      this.map.dispose()
    }
  }
}
</script>

<style scoped>

#mapdiv {
  height: 30vw;
}
</style>
