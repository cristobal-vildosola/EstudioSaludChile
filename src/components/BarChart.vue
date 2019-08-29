<template>
  <div :id='`chartdiv_${ div_id }`' />
</template>

<script>
export default {
  name: 'BarChart',

  data() {
    return {
      chart: null,
      div_id: Math.random().toString(30).substr(2, 8),
    };
  },

  props: {
    data: { type: Array, required: true },

    hoverColor: { type: String },
    tooltipText: { type: String, default: '{name}: {value}' },

    backgroundColor: { type: String },
    backgroundOpacity: { type: Number, default: 1 },
  },

  mounted() {
    const am4core = this.$am4core;
    const am4charts = this.$am4charts;

    // create chart
    const chart = this.$am4core.create(`chartdiv_${this.div_id}`, am4charts.XYChart);
    chart.data = this.data;

    const categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'subtipo';
    categoryAxis.title.text = 'Tipo de Licencia';
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;

    const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.max = 12200000;
    valueAxis.strictMinMax = true;
    valueAxis.title.text = 'Número de Licencias';

    const axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 800000;
    axisBreak.endValue = 12000000;
    axisBreak.breakSize = 0.005;
    axisBreak.defaultState.transitionDuration = 1000;

    const hoverState = axisBreak.states.create('hover');
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0.1;
    hoverState.transitionDuration = 2000;

    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = 'subtipo';
    series.name = 'licencias';
    series.dataFields.valueY = 'value';
    series.columns.template.tooltipText = '{categoryX}: [bold]{valueY}[/] licencias';
    series.columns.template.width = am4core.percent(60);
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped></style>
