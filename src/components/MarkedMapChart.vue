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

    tooltipText: { type: String, default: '{name}: {value}' },

    fillColor: { type: String, default: '#aaaaaa' },

    markColor: { type: String, default: '#a52013' },
    markRadius: { type: Number, default: 4 },

    remarkThreshold: { type: Number },
    remarkValue: { type: String },
    remarkValueName: { type: String, default: '' },
    remarkColor: { type: String, default: '#0a488d' },
    remarkRadius: { type: Number, default: 5 },

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

    polygonTemplate.strokeWidth = 0.3;
    polygonTemplate.stroke = '#000';
    polygonTemplate.fill = am4core.color(this.fillColor);

    // disable wheel interaction
    map.chartContainer.wheelable = false;

    map.zoomControl = new am4maps.ZoomControl();
    map.zoomControl.slider.height = 200;
    map.zoomControl.valign = 'center';
    map.zoomControl.orientation = 'vertical';
    map.maxZoomLevel = 200;

    // add images
    const imageSeries = map.series.push(new am4maps.MapImageSeries());
    const imageSeriesTemplate = imageSeries.mapImages.template;

    imageSeries.data = this.data;
    imageSeriesTemplate.propertyFields.latitude = 'latitud';
    imageSeriesTemplate.propertyFields.longitude = 'longitud';

    const circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.stroke = am4core.color('#fff');
    circle.strokeWidth = 0.7;
    circle.nonScaling = true;
    circle.tooltipText = this.tooltipText;


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

      const cornerRadius = (radius, target) => {
        if (target.dataItem && target.dataItem.dataContext) {
          return 2 * target.dataItem.dataContext.radius;
        }
        return radius;
      };
      const sizeAdapter = (size, target) => {
        if (target.dataItem && target.dataItem.dataContext) {
          return 4 * target.dataItem.dataContext.radius;
        }
        return size;
      };

      const marker = legend.markers.template.children.getIndex(0);
      marker.adapter.add('cornerRadiusTopLeft', cornerRadius);
      marker.adapter.add('cornerRadiusTopRight', cornerRadius);
      marker.adapter.add('cornerRadiusBottomLeft', cornerRadius);
      marker.adapter.add('cornerRadiusBottomRight', cornerRadius);
      marker.adapter.add('pixelHeight', sizeAdapter);
      marker.adapter.add('pixelWidth', sizeAdapter);

      legend.itemContainers.template.clickable = false;
      legend.itemContainers.template.focusable = false;
      legend.itemContainers.template.cursorOverStyle = am4core.MouseCursorStyle.default;
    } else {
      circle.fill = this.markColor;
      circle.radius = this.markRadius;
    }

    // change orientation depending on screen width
    map.events.on('sizechanged', (ev) => {
      const windHeight = window.innerHeight || document.documentElement.clientHeight;
      const windWidth = window.innerWidth || document.documentElement.clientWidth;

      if (windWidth < windHeight && ev.target.pixelWidth < self.rotationBreakpoint) {
        // vertical
        map.svgContainer.htmlElement.style.height = self.rotatedHeight;
        map.deltaLatitude = 0;
        map.goHome();
      } else {
        // horizontal
        map.svgContainer.htmlElement.style.height = self.height;
        map.deltaLatitude = self.rotationDeegres;
        map.goHome();
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
