import Vue from 'vue';
import Router from 'vue-router';
import Home from '@/views/Home.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',

  routes: [
    {
      path: 'licencias',
      name: 'licencias',
    },
    {
      path: '*',
      name: 'home',
      component: Home,
    },
  ],

  // scroll to selected element on start
  scrollBehavior(to) {
    if (to.hash) {
      return { selector: to.hash };
    }
    return { x: 0, y: 0 };
  },
});
