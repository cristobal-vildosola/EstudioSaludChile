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
import material from '@amcharts/amcharts4/themes/material';
import am4langEspañol from '@amcharts/amcharts4/lang/es_ES';

export default {
  name: 'LineChart',

  data() {
    return {
      chart: null,
      id: `chartdiv_${Math.random().toString(30).substr(2, 8)}`,
      series: [],

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
    values: { type: Array, default: () => (['value']) },
    xTitle: { type: String },
    yTitle: { type: String },

    valueFormat: { type: String, default: '#' },
    tooltipText: { type: String, default: '{dateX}: {valueY}' },

    disableLegend: { type: Boolean, default: false },

    height: { type: String, default: '30rem' },
    animationDuration: { type: Number, default: 500 },
    animationActive: { type: Boolean, default: true },

    dateRange: { type: Object },
  },

  methods: {
    drawChart() {
      const am4core = this.$am4core;
      const am4charts = this.$am4charts;
      const self = this;
      am4core.useTheme(material);

      // create chart
      const chart = this.$am4core.create(this.id, am4charts.XYChart);
      this.chart = chart;
      chart.data = this.data;
      chart.svgContainer.htmlElement.style.height = this.height;
      chart.maskBullets = false;
      chart.language.locale = am4langEspañol;
      chart.dateFormatter.inputDateFormat = 'd/M/yyyy';

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

      // add range
      if (this.dateRange) {
        const range = dateAxis.axisRanges.create();
        range.date = this.dateRange.start;
        range.endDate = this.dateRange.end;
        range.axisFill.fill = chart.colors.getIndex(7);
        range.axisFill.fillOpacity = 0.2;

        range.label.text = this.dateRange.title;
        range.label.inside = true;
        range.label.valign = 'bottom';
        range.label.paddingLeft = am4core.percent(50);
      }

      // line
      const duration = self.animationDuration / (self.data.length + 1);
      function createLine(value, name, tooltip = self.tooltipText) {
        const series = chart.series.push(new am4charts.LineSeries());
        self.series.push(series);

        series.dataFields.dateX = self.date;
        series.dataFields.valueY = value;
        series.name = name || value;
        series.strokeWidth = 2;

        // bullets
        const bullet = series.bullets.push(new am4core.Circle());
        bullet.strokeWidth = 2;
        bullet.radius = 5;
        bullet.fill = am4core.color('#fff');
        bullet.tooltipText = tooltip;
        series.tooltip.pointerOrientation = 'vertical';

        // animations
        series.interpolationDuration = duration * 2;
        series.sequencedInterpolationDelay = duration;
        series.sequencedInterpolation = true;

        // start hidden
        series.hidden = true;
      }

      this.series = [];
      for (let i = 0; i < this.values.length; i += 1) {
        createLine(this.values[i].value, this.values[i].name, this.values[i].tooltip);
      }
      this.appeared = false;

      // disable zoom out
      chart.zoomOutButton.disabled = true;

      chart.legend = new am4charts.Legend();
      chart.legend.fontSize = '.8rem';

      // disable legend
      if (this.disableLegend) {
        chart.legend.itemContainers.template.clickable = false;
        chart.legend.itemContainers.template.focusable = false;
        chart.legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
      }

      am4core.unuseTheme(material);
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
