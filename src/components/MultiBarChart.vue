<template>
  <div
    :id='id'
    v-waypoint="{
      active: animationActive && !calcPercent,
      callback: appearOnScroll,
      options: intersectionOptions,
    }"
  />
</template>

<script>

export default {
  name: 'MultiBarChart',

  data() {
    return {
      chart: null,
      id: `chardiv_${Math.random().toString(30).substr(2, 8)}`,
      series: [],

      rotated: false,
      appeared: false,

      intersectionOptions: {
        threshold: [0.5],
      },
    };
  },

  props: {
    data: { type: Array, required: true },
    values: { type: Array },

    horizontal: { type: Boolean, default: false },
    min: { type: Number },
    max: { type: Number },

    category: { type: String, default: 'category' },
    categoryTitle: { type: String },
    hideCategory: { type: Boolean, default: false },

    valueTitle: { type: String },
    valueFormat: { type: String, default: '#' },
    tooltipText: { type: String, default: '{categoryY}: {valueX}' },

    calcPercent: { type: Boolean, default: false },
    disableLegend: { type: Boolean, default: false },

    axisBreak: {
      type: Object,
      validator(axisBreak) { // expects { start: x, end: y, breakSize: z }
        if (!axisBreak) return true; // accept null

        // must be an object
        if (Object.prototype.toString.call(axisBreak) !== '[object Object]') return false;

        // must set limits and size
        if (!('start' in axisBreak) || !('end' in axisBreak) || !('breakSize' in axisBreak)) return false;

        return true;
      },
    },

    height: { type: String, default: '30rem' },
    rotationBreakpoint: { type: Number, default: 1000 },
    rotatedHeight: { type: String, default: '90vh' },

    colorOffset: { type: Number, default: 0 },
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
      categoryAxis.renderer.labels.template.disabled = this.hideCategory;

      categoryAxis.renderer.line.strokeOpacity = 1;
      categoryAxis.renderer.grid.template.disabled = true;
      categoryAxis.renderer.minGridDistance = 1;
      categoryAxis.renderer.labels.template.truncate = false;
      categoryAxis.renderer.labels.template.hideOversized = false;
      categoryAxis.renderer.labels.template.verticalCenter = 'middle';
      categoryAxis.renderer.cellStartLocation = 0.1;
      categoryAxis.renderer.cellEndLocation = 0.9;

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

      if (this.calcPercent) {
        valueAxis.min = 0;
        valueAxis.max = 100;
        valueAxis.strictMinMax = true;
        valueAxis.calculateTotals = true;
      } else {
        valueAxis.min = this.min;
        valueAxis.max = this.max;
      }

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

      // series
      const self = this;
      this.series = [];

      function createSeries(value, name, stacked = false) {
        const series = chart.series.push(new am4charts.ColumnSeries());
        series.stacked = stacked || self.calcPercent;
        self.series.push(series);

        series.name = name || value;
        series.dataFields.value = value;
        series.dataFields.valueX = value;
        series.dataFields.valueY = value;
        series.dataFields.category = self.category;
        series.dataFields.categoryX = self.category;
        series.dataFields.categoryY = self.category;

        if (self.calcPercent) {
          series.dataFields.valueYShow = 'totalPercent';
          series.dataFields.valueXShow = 'totalPercent';
        }

        series.columns.template.height = am4core.percent(100);
        series.columns.template.width = am4core.percent(100);
        series.columns.template.fill = chart.colors.getIndex(
          chart.series.length - 1 + self.colorOffset,
        );
        series.columns.template.strokeOpacity = 0;

        // tooltip changes
        if (!horizontal) {
          series.tooltip.pointerOrientation = 'veritcal';
        }

        // modify tooltip
        series.columns.template.tooltipText = self.tooltipText;
        series.tooltip.getFillFromObject = false;
        series.tooltip.background.fill = am4core.color('#fff');
        series.tooltip.label.fill = am4core.color('#000');

        series.tooltip.label.wrap = true;
        series.tooltip.label.maxWidth = windWidth * 0.8;

        // animations
        if (!self.calcPercent) {
          const duration = self.animationDuration / (self.data.length + 1);
          series.interpolationDuration = duration * 2;
          series.sequencedInterpolationDelay = duration;
          series.sequencedInterpolation = true;

          // start hidden
          series.hidden = self.animationActive;
        }
      }

      for (let i = 0; i < this.values.length; i += 1) {
        createSeries(this.values[i].value, this.values[i].name, this.values[i].stacked);
      }
      this.appeared = false;

      // Legend
      chart.legend = new am4charts.Legend();
      chart.legend.fontSize = '.8rem';

      // disable zoom out
      chart.zoomOutButton.disabled = true;

      // disable legend
      if (this.disableLegend) {
        chart.legend.itemContainers.template.clickable = false;
        chart.legend.itemContainers.template.focusable = false;
        chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
      }
    },

    appearOnScroll({ going }) {
      const { series, appeared } = this;
      if (!appeared && going === this.$waypointMap.GOING_IN) {
        for (let i = 0; i < series.length; i += 1) {
          series[i].hidden = false;
          series[i].appear();
        }
        this.appeared = true;
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
      window.removeEventListener('resize', this.rotateOnResize, false);
    }
  },
};
</script>

<style scoped></style>
