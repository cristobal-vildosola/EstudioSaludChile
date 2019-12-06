<template>
  <div :id='`mapdiv_${ div_id }`' />
</template>

<script>

function clip(number, min, max) {
  return Math.max(min, Math.min(max, number));
}

export default {
  name: 'Heatmap',

  data() {
    return {
      map: null,
      div_id: Math.random().toString(30).substr(2, 8),
    };
  },

  props: {
    mapGeojson: { type: Object, required: true },
    data: { type: Array, required: true },
    heatValue: { type: String, default: 'value' },

    minColor: { type: String, default: '#001a66' },
    midColor: { type: String, default: '#cccccc' },
    maxColor: { type: String, default: '#800002' },

    // when not provided use data low and high
    minValue: { type: Number },
    maxValue: { type: Number },

    hover: { type: Boolean, default: true },
    tooltipText: { type: String, default: '{name}: {value}' },
    legendFormat: { type: String, default: '#.0a' },

    height: { type: String, default: '30rem' },
    rotationBreakpoint: { type: Number, default: 0 },
    rotationDeegres: { type: Number, default: 0 },
    rotatedHeight: { type: String, default: '90vh' },

    backgroundColor: { type: String },
    backgroundOpacity: { type: Number, default: 1 },
  },

  mounted() {
    const am4core = this.$am4core;
    const am4maps = this.$am4maps;
    const self = this;
    const { heatValue } = this;

    // create map, set projection and map geojson
    const map = this.$am4core.create(`mapdiv_${this.div_id}`, am4maps.MapChart);
    map.projection = new am4maps.projections.Mercator();
    map.geodata = this.mapGeojson;
    this.map = map;

    // set data
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.data = this.data;
    polygonSeries.useGeodata = true;

    // template to change data style
    const polygonTemplate = polygonSeries.mapPolygons.template;

    // map stroke
    polygonTemplate.nonScalingStroke = true;
    polygonTemplate.strokeWidth = 0.5;
    polygonTemplate.stroke = '#fff';

    // tooltip
    polygonTemplate.tooltipText = this.tooltipText;
    polygonTemplate.tooltipPosition = 'fixed';
    polygonSeries.tooltip.label.wrap = true;

    // hover color
    if (this.hover) {
      const hoverState = polygonTemplate.states.create('hover');
      hoverState.adapter.add('fill', fill => (fill.lighten(0.5)));
    }

    // background color
    if (this.backgroundColor) {
      map.background.fill = this.backgroundColor;
      map.background.fillOpacity = this.backgroundOpacity;
    }

    // Base colors for custom "heatRules" gradient
    const heatColors = [
      am4core.color(this.minColor),
      am4core.color(this.midColor),
      am4core.color(this.maxColor),
    ];
    const ranges = heatColors.length - 1;

    const maxValue = this.maxValue || Math.max(...this.data.map(e => e[heatValue]));
    const minValue = this.minValue || Math.min(...this.data.map(e => e[heatValue]));

    polygonTemplate.adapter.add('fill',
      (fill, target) => {
        if (target.dataItem.dataContext) {
          const value = target.dataItem.dataContext[heatValue];
          const percent = (value - minValue) / (maxValue - minValue);
          const index = clip(Math.floor(percent * ranges), 0, ranges - 1);

          if (am4core.type.isNumber(percent)) {
            return new am4core.Color(am4core.colors.interpolate(
              heatColors[index].rgb,
              heatColors[index + 1].rgb,
              (percent - index / ranges) * ranges,
            ));
          }
        }

        return fill;
      });

    function createHeatLegend() {
      const heatLegend = map.createChild(am4maps.HeatLegend);
      heatLegend.minValue = minValue;
      heatLegend.maxValue = maxValue;

      heatLegend.valueAxis.renderer.minGridDistance = 50;
      heatLegend.valueAxis.renderer.labels.template.fontSize = '.8rem';
      heatLegend.numberFormatter = new am4core.NumberFormatter();
      heatLegend.numberFormatter.numberFormat = self.legendFormat;

      heatLegend.background.fill = am4core.color('#fff');
      heatLegend.background.fillOpacity = 0.7;
      heatLegend.padding(10, 10, 10, 10);

      return heatLegend;
    }

    const horLegend = createHeatLegend();
    horLegend.valign = 'bottom';
    horLegend.align = 'center';
    horLegend.width = am4core.percent(50);
    horLegend.markerContainer.height = 20;
    horLegend.marginBottom = 10;

    const vertLegend = createHeatLegend();
    vertLegend.orientation = 'vertical';
    vertLegend.align = 'right';
    vertLegend.valign = 'middle';
    vertLegend.height = am4core.percent(50);
    vertLegend.markerContainer.width = 20;
    vertLegend.paddingRight = 40;
    vertLegend.marginRight = 20;

    // Override heatLegend gradient
    const gradient = new am4core.LinearGradient();
    heatColors.forEach((color) => {
      gradient.addColor(color);
    });

    function addFillReset(legend) {
      // refill when drawing is ready
      legend.events.on('ready', () => {
        legend.markers.getIndex(0).fill = gradient;
      });
      // refill everytime size changes
      legend.events.on('sizechanged', () => {
        if (legend.markers.getIndex(0)) {
          legend.markers.getIndex(0).fill = gradient;
        }
      });
    }
    addFillReset(vertLegend);
    addFillReset(horLegend);

    // disable pan and zoom
    map.seriesContainer.draggable = false;
    map.seriesContainer.resizable = false;
    map.maxZoomLevel = 1;

    // disable wheel interaction
    map.chartContainer.wheelable = false;

    // change orientation depending on screen width
    map.events.on('sizechanged', (ev) => {
      const windHeight = window.innerHeight || document.documentElement.clientHeight;
      const windWidth = window.innerWidth || document.documentElement.clientWidth;

      polygonSeries.tooltip.label.maxWidth = windWidth * 0.8;

      if (windWidth < windHeight && ev.target.pixelWidth < self.rotationBreakpoint) {
        // vertical
        map.svgContainer.htmlElement.style.height = self.rotatedHeight;
        map.deltaLatitude = 0;
        map.goHome();

        // swap legends
        vertLegend.disabled = false;
        horLegend.disabled = true;
        gradient.rotation = 270;
      } else {
        // horizontal
        map.svgContainer.htmlElement.style.height = self.height;
        map.deltaLatitude = self.rotationDeegres;
        map.goHome();

        // swap legends
        vertLegend.disabled = true;
        horLegend.disabled = false;
        gradient.rotation = 0;
      }
    });
  },

  beforeDestroy() {
    if (this.map) {
      this.map.dispose();
    }
  },
};
</script>

<style scoped></style>
