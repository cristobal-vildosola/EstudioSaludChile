<template>
  <div
    :id='id'
    v-waypoint="{
      active: animationActive,
      callback: appearOnScroll,
      options: intersectionOptions,
    }"
  />
</template>

<script>

export default {
  name: 'LineChart',

  data() {
    return {
      chart: null,
      id: `chartdiv_${Math.random().toString(30).substr(2, 8)}`,

      appeared: false,
      intersectionOptions: {
        threshold: [0.5],
      },
    };
  },

  props: {
    data: { type: Array, required: true },
    min: { type: Number },
    max: { type: Number },

    date: { type: String, default: 'date' },
    value: { type: String, default: 'value' },
    xTitle: { type: String },
    yTitle: { type: String },

    valueFormat: { type: String, default: '#' },
    tooltipText: { type: String, default: '{date}: {value}' },

    height: { type: String, default: '50vh' },
    animationDuration: { type: Number, default: 500 },
    animationActive: { type: Boolean, default: true },
  },

  methods: {
    drawChart() {
      const am4core = this.$am4core;
      const am4charts = this.$am4charts;

      // create chart
      const chart = this.$am4core.create(this.id, am4charts.XYChart);
      this.chart = chart;
      chart.data = this.data;
      chart.svgContainer.htmlElement.style.height = this.height;
      chart.maskBullets = false;

      const dateAxis = chart.xAxes.push(new am4charts.DateAxis());
      dateAxis.title.text = this.xTitle;
      dateAxis.title.fontSize = '1rem';
      dateAxis.fontSize = '.8rem';
      dateAxis.renderer.grid.template.location = 0.5;

      dateAxis.renderer.line.strokeOpacity = 1;
      dateAxis.renderer.minGridDistance = 40;
      dateAxis.renderer.grid.template.disabled = true;

      const valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      valueAxis.title.text = this.yTitle;
      valueAxis.title.fontSize = '1rem';
      valueAxis.fontSize = '.8rem';

      valueAxis.strictMinMax = true;
      valueAxis.min = this.min;
      valueAxis.max = this.max;

      valueAxis.numberFormatter = new am4core.NumberFormatter();
      valueAxis.numberFormatter.numberFormat = this.valueFormat;

      // line
      const series = chart.series.push(new am4charts.LineSeries());
      this.series = series;

      series.dataFields.dateX = this.date;
      series.dataFields.valueY = this.value;

      // bullets
      const bullet = series.bullets.push(new am4core.Circle());
      bullet.strokeWidth = 2;
      bullet.radius = 5;
      bullet.fill = am4core.color('#fff');
      bullet.tooltipText = this.tooltipText;
      series.tooltip.pointerOrientation = 'vertical';

      // animations
      const duration = this.animationDuration / (this.data.length + 1);
      series.interpolationDuration = duration * 2;
      series.sequencedInterpolationDelay = duration;
      series.sequencedInterpolation = true;

      // start hidden
      series.hidden = true;
      this.appeared = false;
    },

    appearOnScroll({ going }) {
      const { series, appeared } = this;
      if (!appeared && going === this.$waypointMap.GOING_IN) {
        series.hidden = false;
        series.appear();
        this.appeared = true;
      }
    },
  },

  mounted() {
    this.drawChart();
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped></style>
