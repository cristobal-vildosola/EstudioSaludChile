<template>
  <div :id='`mapdiv_${ div_id }`' />
</template>

<script>
export default {
  name: 'MapChart',

  data() {
    return {
      map: null,
      div_id: Math.random().toString(30).substr(2, 8),
    };
  },

  props: {
    mapGeojson: { type: Object, required: true },
    data: { type: Array, required: true },
    logaritmic: { type: Boolean, default: false },

    minColor: { type: String, default: '#f7fbff' },
    maxColor: { type: String, default: '#a52013' },
    // when not provided use data low and high
    minValue: { type: Number },
    maxValue: { type: Number },

    hoverColor: { type: String },
    tooltipText: { type: String, default: '{name}: {value}' },
    legendFormat: { type: String, default: '#.0a' },

    height: { type: String, default: '50vh' },
    rotationBreakpoint: { type: Number, default: 0 },
    rotationDeegres: { type: Number, default: 0 },
    rotatedHeight: { type: String, default: '0' },

    backgroundColor: { type: String },
    backgroundOpacity: { type: Number, default: 1 },
  },

  mounted() {
    const am4core = this.$am4core;
    const am4maps = this.$am4maps;
    const am4charts = this.$am4charts;
    const self = this;

    // create map, set projection and map geojson
    const map = this.$am4core.create(`mapdiv_${this.div_id}`, am4maps.MapChart);
    map.projection = new am4maps.projections.Mercator();
    map.geodata = this.mapGeojson;
    this.map = map;

    // number formats
    map.numberFormatter.numberFormat = '#,###';
    const LegendFormatter = new am4core.NumberFormatter();
    LegendFormatter.numberFormat = this.legendFormat;

    // copy data for default display
    const processed = JSON.parse(JSON.stringify(this.data));

    let { tooltipText } = this;
    let labelAdapter = (labelText) => {
      if (labelText) { return LegendFormatter.format(labelText.replace(/,/g, '')); }
      return '';
    };

    if (this.logaritmic) {
      // convert data to log scale
      for (let i = 0; i < processed.length; i += 1) {
        processed[i].real = processed[i].value;
        processed[i].value = Math.log2(processed[i].value);
      }

      // fix tooltip to show original value
      tooltipText = tooltipText.replace(/value/g, 'real');

      // fix legend to show original value
      labelAdapter = (labelText) => {
        if (labelText) { return LegendFormatter.format(2 ** labelText.replace(/,/g, '')); }
        return '';
      };
    }

    // set data
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.data = processed;
    polygonSeries.useGeodata = true;

    // template to change data style
    const polygonTemplate = polygonSeries.mapPolygons.template;

    // map stroke
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.3;
    polygonTemplate.stroke = '#000';

    // tooltip
    polygonTemplate.tooltipText = tooltipText;
    polygonTemplate.tooltipPosition = 'fixed';
    polygonSeries.tooltip.background.filters.clear();

    // hover color
    if (this.hoverColor) {
      const hover = polygonTemplate.states.create('hover');
      hover.properties.fill = this.hoverColor;
    }

    // background color
    if (this.backgroundColor) {
      map.background.fill = this.backgroundColor;
      map.background.fillOpacity = this.backgroundOpacity;
    }

    // heatmap colors
    polygonSeries.heatRules.push({
      target: polygonTemplate,
      property: 'fill',
      minValue: this.minValue,
      min: am4core.color(this.minColor),
      maxValue: this.maxValue,
      max: am4core.color(this.maxColor),
    });

    // horizontal legend
    const horLegend = map.createChild(am4charts.HeatLegend);
    horLegend.series = polygonSeries;
    horLegend.minValue = this.minValue;
    horLegend.maxValue = this.maxValue;
    // alignment
    horLegend.valign = 'bottom';
    horLegend.align = 'center';
    horLegend.width = am4core.percent(30);
    // style
    horLegend.markerContainer.height = 20;
    horLegend.valueAxis.renderer.minGridDistance = 50;
    horLegend.valueAxis.renderer.labels.template.fontSize = '.8rem';
    horLegend.valueAxis.renderer.labels.template.adapter.add('text', labelAdapter);

    // vertical legend
    const vertLegend = map.createChild(am4charts.HeatLegend);
    vertLegend.orientation = 'vertical';
    vertLegend.series = polygonSeries;
    vertLegend.minValue = this.minValue;
    vertLegend.maxValue = this.maxValue;
    // alignment
    vertLegend.valign = 'middle';
    vertLegend.align = 'right';
    vertLegend.height = am4core.percent(50);
    // style
    vertLegend.marginRight = 55;
    vertLegend.markerContainer.width = 20;
    vertLegend.valueAxis.renderer.minGridDistance = 30;
    vertLegend.valueAxis.renderer.labels.template.fontSize = '.8rem';
    vertLegend.valueAxis.renderer.labels.template.adapter.add('text', labelAdapter);

    // disable pan and zoom
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;
    map.maxZoomLevel = 1;

    // disable wheel interaction
    map.chartContainer.wheelable = false;

    // change orientation depending on screen width
    map.events.on('sizechanged', (ev) => {
      if (ev.target.pixelWidth < self.rotationBreakpoint) {
        // vertical
        map.svgContainer.htmlElement.style.height = self.rotatedHeight;
        map.deltaLatitude = 0;
        map.goHome();

        vertLegend.disabled = false;
        horLegend.disabled = true;
      } else {
        // horizontal
        map.svgContainer.htmlElement.style.height = self.height;
        map.deltaLatitude = self.rotationDeegres;
        map.goHome();

        vertLegend.disabled = true;
        horLegend.disabled = false;
      }
    });

    // add css classes
    am4core.options.autoSetClassName = true;
  },

  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  },
};
</script>

<style scoped></style>
