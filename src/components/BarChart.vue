<template>
  <div :id='id' />
</template>

<script>

function isVisible(id, threshold = 100) {
  const element = document.getElementById(id);
  const bounding = element.getBoundingClientRect();

  const windHeight = window.innerHeight || document.documentElement.clientHeight;
  const windWidth = window.innerWidth || document.documentElement.clientWidth;

  return bounding.bottom >= 0 + threshold
      && bounding.right >= 0 + threshold
      && bounding.top <= windHeight - threshold
      && bounding.left <= windWidth - threshold;
}

export default {
  name: 'BarChart',

  data() {
    return {
      chart: null,
      id: `chartdiv_${Math.random().toString(30).substr(2, 8)}`,
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
    const self = this;

    // create chart
    const chart = this.$am4core.create(this.id, am4charts.XYChart);
    chart.data = this.data;

    const categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
    categoryAxis.dataFields.category = 'subtipo';
    categoryAxis.title.text = 'Tipo de Licencia';
    categoryAxis.title.fontSize = '1rem';
    categoryAxis.fontSize = '.8rem';

    categoryAxis.renderer.grid.template.disabled = true;
    categoryAxis.renderer.line.strokeOpacity = 1;
    categoryAxis.renderer.inversed = true;

    const valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
    valueAxis.title.text = 'Número de Licencias';
    valueAxis.title.fontSize = '1rem';
    valueAxis.fontSize = '.8rem';

    valueAxis.renderer.minGridDistance = 100;
    valueAxis.strictMinMax = true;
    valueAxis.min = 0;
    valueAxis.max = 12200000;

    valueAxis.numberFormatter = new am4core.NumberFormatter();
    valueAxis.numberFormatter.numberFormat = '#.0a';

    const axisBreak = valueAxis.axisBreaks.create();
    axisBreak.startValue = 800000;
    axisBreak.endValue = 12000000;
    axisBreak.breakSize = 0.005;

    const hoverState = axisBreak.states.create('hover');
    hoverState.properties.breakSize = 1;
    hoverState.properties.opacity = 0;

    axisBreak.defaultState.transitionDuration = 1000;
    hoverState.transitionDuration = 2000;

    // columns
    const series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.valueX = 'value';
    series.dataFields.categoryY = 'subtipo';
    series.columns.template.tooltipText = '{categoryY}:\n[bold]{valueX}[/] licencias';

    // modify tooltip
    series.tooltip.pointerOrientation = 'left';
    series.columns.template.tooltipX = 0;
    series.tooltip.getFillFromObject = false;
    series.tooltip.background.fill = am4core.color('#fff');
    series.tooltip.label.fill = am4core.color('#000');
    series.tooltip.background.filters.clear();

    // fill each column with a different color
    series.columns.template.strokeOpacity = 0;
    series.columns.template.adapter.add('fill',
      (fill, target) => chart.colors.getIndex(target.dataItem.index));

    // animations
    series.interpolationDuration = 350;
    series.sequencedInterpolationDelay = 100;
    series.sequencedInterpolation = true;

    // animate when entering window
    window.addEventListener('scroll',
      () => {
        if (isVisible(self.id)) {
          if ((series.isHidden || series.isHiding) && !series.isShowing) {
            series.appear();
          }
        } else if (!series.isHidden && !series.isHiding) {
          series.hide();
        }
      }, false);
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped></style>
