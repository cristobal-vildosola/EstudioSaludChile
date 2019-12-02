import Vue from 'vue';
import VueWaypoint from 'vue-waypoint';

// styles
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@/assets/fontawesome/css/all.min.css';
import '@/assets/styles.css';

// chart library
import * as am4core from '@amcharts/amcharts4/core';
import * as am4charts from '@amcharts/amcharts4/charts';
import * as am4maps from '@amcharts/amcharts4/maps';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import dataviz from '@amcharts/amcharts4/themes/dataviz';

// project objects
import App from '@/App.vue';
import router from '@/router';

// Waypoint plugin
Vue.use(VueWaypoint);

am4core.useTheme(am4themesAnimated);
am4core.useTheme(dataviz);

Object.defineProperty(Vue.prototype, '$am4charts', { value: am4charts });
Object.defineProperty(Vue.prototype, '$am4core', { value: am4core });
Object.defineProperty(Vue.prototype, '$am4maps', { value: am4maps });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
});
