<template>
  <div :id='`mapdiv_${ div_id }`' />
</template>

<script>

function clip(number, min, max) {
  return Math.max(min, Math.min(max, number));
}

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

    markData: { type: Array, required: true },
    markColor: { type: String, default: '#a52013' },
    markRadius: { type: Number, default: 4 },

    remarkThreshold: { type: Number },
    remarkValue: { type: String },
    remarkValueName: { type: String, default: '' },
    remarkColor: { type: String, default: '#0a488d' },
    remarkRadius: { type: Number, default: 5 },

    tooltipText: { type: String, default: '{name}: {value}' },

    fillColor: { type: String, default: '#aaaaaa' },

    heatData: { type: Array },
    heatValue: { type: String, default: 'value' },
    heatTooltipText: { type: String, default: 'value' },
    minColor: { type: String, default: '#001a66' },
    midColor: { type: String, default: '#cccccc' },
    maxColor: { type: String, default: '#800002' },

    minValue: { type: Number },
    maxValue: { type: Number },

    legendFormat: { type: String, default: '#' },

    height: { type: String, default: '50vh' },
    rotationBreakpoint: { type: Number, default: 0 },
    rotationDeegres: { type: Number, default: 0 },
    rotatedHeight: { type: String, default: '0' },

    backgroundColor: { type: String },
    backgroundOpacity: { type: Number, default: 1 },
  },

  mounted() {
    const am4charts = this.$am4charts;
    const am4core = this.$am4core;
    const am4maps = this.$am4maps;
    const self = this;

    // create map, set projection and map geojson
    const map = this.$am4core.create(`mapdiv_${this.div_id}`, am4maps.MapChart);
    map.projection = new am4maps.projections.Mercator();
    map.geodata = this.mapGeojson;
    this.map = map;

    // set data
    const polygonSeries = map.series.push(new am4maps.MapPolygonSeries());
    polygonSeries.useGeodata = true;

    // template to change data style
    const polygonTemplate = polygonSeries.mapPolygons.template;
    polygonTemplate.nonScalingStroke = true;

    polygonTemplate.strokeWidth = 0.5;
    polygonTemplate.stroke = '#fff';

    // disable wheel interaction
    map.chartContainer.wheelable = false;

    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.orientation = 'vertical';
    map.zoomControl.slider.height = 160;
    map.zoomControl.valign = 'top';
    map.zoomControl.align = 'right';
    map.maxZoomLevel = 200;

    // add marks
    const imageSeries = map.series.push(new am4maps.MapImageSeries());
    const imageSeriesTemplate = imageSeries.mapImages.template;

    imageSeries.data = this.markData;
    imageSeriesTemplate.propertyFields.latitude = 'latitud';
    imageSeriesTemplate.propertyFields.longitude = 'longitud';

    const circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.stroke = am4core.color('#fff');
    circle.strokeWidth = 1;
    circle.nonScaling = true;
    circle.tooltipText = this.tooltipText;
    imageSeries.tooltip.label.wrap = true;

    if (this.remarkValue && this.remarkThreshold) {
      // change color after threshold
      circle.adapter.add('fill', (fill, target) => {
        if (target.dataItem && target.dataItem.dataContext
          && target.dataItem.dataContext[this.remarkValue] >= this.remarkThreshold) {
          return am4core.color(this.remarkColor);
        }
        return am4core.color(this.markColor);
      });

      // change size after threshold
      circle.adapter.add('radius', (radius, target) => {
        if (target.dataItem && target.dataItem.dataContext
          && target.dataItem.dataContext[this.remarkValue] >= this.remarkThreshold) {
          return this.remarkRadius;
        }
        return this.markRadius;
      });

      // add legend
      const legend = new am4charts.Legend();
      legend.parent = map.chartContainer;

      legend.position = 'left';
      legend.valign = 'top';
      legend.width = 250;
      legend.padding(10, 15, 10, 15);
      legend.background.fill = am4core.color('#fff');
      legend.background.fillOpacity = 0.5;

      legend.data = [
        {
          name: `${this.remarkThreshold} o más ${this.remarkValueName}`,
          fill: this.remarkColor,
          radius: this.remarkRadius,
        }, {
          name: `menos de ${this.remarkThreshold} ${this.remarkValueName}`,
          fill: this.markColor,
          radius: this.markRadius,
        },
      ];

      const sizeAdapter = (size, target) => {
        if (target.dataItem && target.dataItem.dataContext) {
          return 4 * target.dataItem.dataContext.radius;
        }
        return size;
      };

      const marker = legend.markers.template.children.getIndex(0);
      const radius = 4 * this.remarkRadius;
      marker.cornerRadius(radius, radius, radius, radius);
      marker.adapter.add('pixelHeight', sizeAdapter);
      marker.adapter.add('pixelWidth', sizeAdapter);

      // disable interactions
      legend.itemContainers.template.clickable = false;
      legend.itemContainers.template.focusable = false;
      legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
    } else {
      circle.fill = this.markColor;
      circle.radius = this.markRadius;
    }

    // map fill
    let horLegend;
    let vertLegend;
    let gradient;

    if (this.heatData && this.heatValue) {
      polygonSeries.data = this.heatData;
      polygonTemplate.tooltipText = this.heatTooltipText;

      // Base colors for custom "heatRules" gradient
      const heatColors = [
        am4core.color(this.minColor),
        am4core.color(this.midColor),
        am4core.color(this.maxColor),
      ];
      const ranges = heatColors.length - 1;

      const maxValue = this.maxValue || Math.max(...this.heatData.map(e => e[this.heatValue]));
      const minValue = this.minValue || Math.min(...this.heatData.map(e => e[this.heatValue]));

      polygonTemplate.adapter.add('fill',
        (fill, target) => {
          if (target.dataItem.dataContext) {
            const value = target.dataItem.dataContext[this.heatValue];
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
        heatLegend.padding(5, 5, 5, 5);

        return heatLegend;
      }

      horLegend = createHeatLegend();
      horLegend.valign = 'bottom';
      horLegend.align = 'center';
      horLegend.width = am4core.percent(50);
      horLegend.markerContainer.height = 20;

      vertLegend = createHeatLegend();
      vertLegend.orientation = 'vertical';
      vertLegend.align = 'left';
      vertLegend.valign = 'middle';
      vertLegend.height = am4core.percent(50);
      vertLegend.markerContainer.width = 20;
      vertLegend.marginRight = 55;

      // Override heatLegend gradient
      gradient = new am4core.LinearGradient();
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
    } else {
      polygonTemplate.fill = am4core.color(this.fillColor);
    }

    // change orientation depending on screen width
    map.events.on('sizechanged', (ev) => {
      const windHeight = window.innerHeight || document.documentElement.clientHeight;
      const windWidth = window.innerWidth || document.documentElement.clientWidth;

      imageSeries.tooltip.label.maxWidth = windWidth * 0.8;

      if (windWidth < windHeight && ev.target.pixelWidth < self.rotationBreakpoint) {
        // vertical
        map.svgContainer.htmlElement.style.height = self.rotatedHeight;
        map.deltaLatitude = 0;
        map.goHome();

        if (self.heatData && self.heatValue) {
          // swap legends
          vertLegend.disabled = false;
          horLegend.disabled = true;
          gradient.rotation = 270;
        }
      } else {
        // horizontal
        map.svgContainer.htmlElement.style.height = self.height;
        map.deltaLatitude = self.rotationDeegres;
        map.goHome();
        if (self.heatData && self.heatValue) {
          // swap legends
          vertLegend.disabled = true;
          horLegend.disabled = false;
          gradient.rotation = 0;
        }
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
