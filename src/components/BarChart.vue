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
    horizontal: { type: Boolean, default: false },
    min: { type: Number },
    max: { type: Number },

    category: { type: String, default: 'category' },
    categoryTitle: { type: String, default: 'Categoría' },

    value: { type: String, default: 'value' },
    valueTitle: { type: String, default: 'Valor' },
    valueFormat: { type: String, default: '#' },
    tooltipText: { type: String, default: '{categoryY}: {valueX}' },

    axisBreak: {
      validator(value) { // expects { start: x, end: y }
        if (!value) return true; // accept null
        if (Object.prototype.toString.call(value) !== '[object Object]') return false; // must be an object
        if (!('start' in value) || !('end' in value)) return false; // must set limits
        return true;
      },
    },
  },

  mounted() {
    const am4core = this.$am4core;
    const am4charts = this.$am4charts;
    const self = this;

    // create chart
    const chart = this.$am4core.create(this.id, am4charts.XYChart);
    chart.data = this.data;

    let categoryAxis;
    let valueAxis;
    let { tooltipText } = this;

    if (this.horizontal) {
      categoryAxis = chart.yAxes.push(new am4charts.CategoryAxis());
      valueAxis = chart.xAxes.push(new am4charts.ValueAxis());
      tooltipText = tooltipText.replace(/{category/g, '{categoryY');
      tooltipText = tooltipText.replace(/{value/g, '{valueX');

    } else {
      categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
      valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
      tooltipText = tooltipText.replace(/{category/g, '{categoryX');
      tooltipText = tooltipText.replace(/{value/g, '{valueY');
    }

    categoryAxis.dataFields.category = this.category;
    categoryAxis.title.text = this.categoryTitle;
    categoryAxis.title.fontSize = '1rem';
    categoryAxis.fontSize = '.8rem';

    categoryAxis.renderer.line.strokeOpacity = 1;
    categoryAxis.renderer.grid.template.disabled = true;

    if (this.horizontal) { // display top to bottom when bars are horizontal
      categoryAxis.renderer.inversed = true;
    } else { // rotate labels when bars are vertical
      categoryAxis.renderer.labels.template.rotation = 90;
      categoryAxis.renderer.labels.template.horizontalCenter = "left";
      categoryAxis.renderer.labels.template.verticalCenter = "middle";
      categoryAxis.renderer.labels.template.truncate = false;
      categoryAxis.renderer.labels.template.hideOversized = false;
      categoryAxis.renderer.minGridDistance = 1;
    }

    valueAxis.title.text = this.valueTitle;
    valueAxis.title.fontSize = '1rem';
    valueAxis.fontSize = '.8rem';

    valueAxis.renderer.minGridDistance = 100;
    valueAxis.strictMinMax = true;
    valueAxis.min = this.min;
    valueAxis.max = this.max;

    valueAxis.numberFormatter = new am4core.NumberFormatter();
    valueAxis.numberFormatter.numberFormat = this.valueFormat;

    if (this.axisBreak) {
      const axisBreak = valueAxis.axisBreaks.create();
      axisBreak.startValue = this.axisBreak.start;
      axisBreak.endValue = this.axisBreak.end;
      axisBreak.breakSize = 0.005;

      const hoverState = axisBreak.states.create('hover');
      hoverState.properties.breakSize = 1;
      hoverState.properties.opacity = 0;

      axisBreak.defaultState.transitionDuration = 1000;
      hoverState.transitionDuration = 2000;
    }

    // columns
    const series = chart.series.push(new am4charts.ColumnSeries());

    // set data
    if (this.horizontal) {
      series.dataFields.valueX = this.value;
      series.dataFields.categoryY = this.category;

      series.columns.template.tooltipX = 10;
      series.tooltip.pointerOrientation = 'left';
    } else {
      series.dataFields.valueY = this.value;
      series.dataFields.categoryX = this.category;

      series.tooltip.pointerOrientation = 'down';
    }

    // modify tooltip
    series.columns.template.tooltipText = tooltipText;
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

    chart.events.on('sizechanged', (ev) => {
      const windHeight = window.innerHeight || document.documentElement.clientHeight;
      const windWidth = window.innerWidth || document.documentElement.clientWidth;

      if (windWidth < windHeight && ev.target.pixelWidth < self.rotationBreakpoint) {
        // vertical
        chart.svgContainer.htmlElement.style.height = self.rotatedHeight;
      } else {
        // horizontal
        chart.svgContainer.htmlElement.style.height = self.height;
      }
    });
  },

  beforeDestroy() {
    if (this.chart) {
      this.chart.dispose();
    }
  },
};
</script>

<style scoped></style>
