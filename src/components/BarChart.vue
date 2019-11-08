<template>
  <div
    :id='id'
    v-waypoint="{
      active: animationActive,
      callback: appearOnScroll,
    }"
  />
</template>

<script>

export default {
  name: 'BarChart',

  data() {
    return {
      chart: null,
      id: `chartdiv_${Math.random().toString(30).substr(2, 8)}`,

      rotated: false,
      appeared: false,
    };
  },

  props: {
    data: { type: Array, required: true },
    horizontal: { type: Boolean, default: false },
    min: { type: Number },
    max: { type: Number },

    category: { type: String, default: 'category' },
    categoryTitle: { type: String },

    value: { type: String, default: 'value' },
    valueTitle: { type: String },
    valueFormat: { type: String, default: '#' },
    tooltipText: { type: String, default: '{categoryY}: {valueX}' },

    axisBreak: {
      type: Object,
      validator(value) { // expects { start: x, end: y, breakSize: z }
        if (!value) return true; // accept null

        // must be an object
        if (Object.prototype.toString.call(value) !== '[object Object]') return false;

        // must set limits and size
        if (!('start' in value) || !('end' in value) || !('breakSize' in value)) return false;

        return true;
      },
    },

    height: { type: String, default: '50vh' },
    rotationBreakpoint: { type: Number, default: 1000 },
    rotatedHeight: { type: String, default: '90vh' },

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

      // determine when the column will be too small and show tooltip
      const maxValue = Math.max(...this.data.map(e => e[this.value]), this.max || 0);
      const range = this.axisBreak ? this.axisBreak.end - this.axisBreak.start : 0;
      const data = this.data.map(
        e => ({ ...e, showTooltip: e[this.value] / (maxValue - range) < 0.01 }),
      );
      chart.data = data;

      // determine if the chart will be horizontal or vertical
      const windHeight = window.innerHeight || document.documentElement.clientHeight;
      const windWidth = window.innerWidth || document.documentElement.clientWidth;
      this.rotated = windWidth < windHeight && chart.pixelWidth < this.rotationBreakpoint;
      const horizontal = (this.horizontal && !this.rotated) || (!this.horizontal && this.rotated);

      if (this.rotated && this.rotatedHeight) {
        chart.svgContainer.htmlElement.style.height = this.rotatedHeight;
      } else {
        chart.svgContainer.htmlElement.style.height = this.height;
      }

      let categoryAxis;
      let valueAxis;

      if (horizontal) {
        categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
        valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      } else {
        categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
        valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      }

      categoryAxis.dataFields.category = this.category;
      categoryAxis.title.text = this.categoryTitle;
      categoryAxis.title.fontSize = '1rem';
      categoryAxis.fontSize = '.8rem';

      categoryAxis.renderer.line.strokeOpacity = 1;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 1;
      categoryAxis.renderer.labels.template.truncate = false;
      categoryAxis.renderer.labels.template.hideOversized = false;
      categoryAxis.renderer.labels.template.verticalCenter = 'middle';

      if (horizontal) { // display top to bottom when bars are horizontal
        categoryAxis.renderer.inversed = true;
        valueAxis.renderer.minGridDistance = 100;
      } else { // rotate labels when bars are vertical
        categoryAxis.renderer.labels.template.rotation = 270;
        categoryAxis.renderer.labels.template.horizontalCenter = 'right';
        valueAxis.renderer.minGridDistance = 40;
      }

      valueAxis.title.text = this.valueTitle;
      valueAxis.title.fontSize = '1rem';
      valueAxis.fontSize = '.8rem';

      valueAxis.strictMinMax = true;
      valueAxis.min = this.min;
      valueAxis.max = this.max;

      valueAxis.numberFormatter = new am4core.NumberFormatter();
      valueAxis.numberFormatter.numberFormat = this.valueFormat;

      if (this.axisBreak) {
        const axisBreak = valueAxis.axisBreaks.create();
        axisBreak.startValue = this.axisBreak.start;
        axisBreak.endValue = this.axisBreak.end;
        axisBreak.breakSize = this.axisBreak.breakSize;

        const hoverState = axisBreak.states.create('hover');
        hoverState.properties.breakSize = 1;
        hoverState.properties.opacity = 0;

        axisBreak.defaultState.transitionDuration = 1000;
        hoverState.transitionDuration = 2000;
      }

      // columns
      const series = chart.series.push(new am4charts.ColumnSeries());
      this.series = series;

      series.dataFields.valueX = this.value;
      series.dataFields.valueY = this.value;
      series.dataFields.categoryX = this.category;
      series.dataFields.categoryY = this.category;

      // tooltip changes
      series.tooltip.pointerOrientation = 'left';
      if (!horizontal) {
        series.tooltip.pointerOrientation = 'down';
      }

      // modify tooltip
      series.columns.template.tooltipText = this.tooltipText;
      series.columns.template.propertyFields.alwaysShowTooltip = 'showTooltip';
      series.tooltip.getFillFromObject = false;
      series.tooltip.background.fill = am4core.color('#fff');
      series.tooltip.label.fill = am4core.color('#000');
      series.tooltip.background.filters.clear();

      // fill each column with a different color
      series.columns.template.strokeOpacity = 0;
      series.columns.template.adapter.add('fill',
        (fill, target) => chart.colors.getIndex(target.dataItem.index + 3));

      // animations
      const duration = this.animationDuration / this.data.length;
      series.interpolationDuration = duration * 2;
      series.sequencedInterpolationDelay = duration;
      series.sequencedInterpolation = true;
    },

    appearOnScroll({ going }) {
      const { series, appeared } = this;
      if (!appeared && going === this.$waypointMap.GOING_IN) {
        this.appeared = true;
        series.appear();
      }
    },

    rotateOnResize() {
      const { chart, rotated, rotationBreakpoint } = this;
      const windHeight = window.innerHeight || document.documentElement.clientHeight;
      const windWidth = window.innerWidth || document.documentElement.clientWidth;

      if (windWidth < windHeight && chart.pixelWidth < rotationBreakpoint) {
        // rotate
        if (!rotated) {
          this.rotated = true;
          chart.dispose();
          this.drawChart();
        }
      } else if (rotated) {
        // return to normal orientation
        this.rotated = false;
        chart.dispose();
        this.drawChart();
      }
    },
  },

  mounted() {
    this.drawChart();
    window.addEventListener('resize', this.rotateOnResize, false);
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped></style>
