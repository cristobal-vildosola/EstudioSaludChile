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

    fillColor: { type: String },

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

    if (this.fillColor) {
      polygonTemplate.fill = am4core.color(this.fillColor);
    }

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

    const circle = imageSeriesTemplate.createChild(am4core.Circle);
    circle.radius = 6;
    circle.fill = am4core.color('#0a488d');
    circle.stroke = am4core.color('#fff');
    circle.strokeWidth = 1;
    circle.nonScaling = true;

    circle.tooltipText = this.tooltipText;

    imageSeriesTemplate.propertyFields.latitude = 'latitud';
    imageSeriesTemplate.propertyFields.longitude = 'longitud';

    imageSeries.data = this.data;

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
