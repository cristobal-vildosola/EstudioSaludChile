<template>
  <div>
    <div id='chartdiv'></div>
  </div>
</template>

<script>
import chileLow from '@amcharts/amcharts4-geodata/chileLow'

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
    var chart = this.$am4core.create('chartdiv', this.$am4maps.MapChart)
    chart.projection = new this.$am4maps.projections.Mercator()
    chart.geodata = chileLow

    var polygonSeries = chart.series.push(new this.$am4maps.MapPolygonSeries())
    polygonSeries.data = this.data
    polygonSeries.useGeodata = true

    polygonSeries.heatRules.push({
      property: 'fill',
      target: polygonSeries.mapPolygons.template,
      min: this.$am4core.color('#dab592'),
      max: this.$am4core.color('#ff2500')
    })

    let heatLegend = chart.createChild(this.$am4maps.HeatLegend)
    heatLegend.series = polygonSeries
    heatLegend.width = this.$am4core.percent(100)

    polygonSeries.mapPolygons.template.events.on('over', function (event) {
      if (!isNaN(event.target.dataItem.value)) {
        heatLegend.valueAxis.showTooltipAt(event.target.dataItem.value)
      } else {
        heatLegend.valueAxis.hideTooltip()
      }
    })

    polygonSeries.mapPolygons.template.events.on('out', function (event) {
      heatLegend.valueAxis.hideTooltip()
    })

    var polygonTemplate = polygonSeries.mapPolygons.template
    polygonTemplate.tooltipText = '{name}: {value}'
    polygonTemplate.nonScalingStroke = true
    polygonTemplate.strokeWidth = 0.5

    var hover = polygonTemplate.states.create('hover')
    hover.properties.fill = '#6fb148'

    chart.background.fill = this.$am4core.color('#aadaff')
    chart.background.fillOpacity = 1

    this.chart = chart
  },

  beforeDestroy () {
    if (this.chart) {
      this.chart.dispose()
    }
  }
}
</script>

<style scoped>

#chartdiv {
  height: 800px;
  width: 500px;
  margin: auto;
}
</style>
