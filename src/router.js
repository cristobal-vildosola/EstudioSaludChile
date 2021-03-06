import Vue from 'vue';
import Router from 'vue-router';

import Inicio from '@/views/Inicio.vue';
import Gestion from '@/views/Gestion.vue';
import Tiempos from '@/views/Tiempos.vue';
import Pabellones from '@/views/Pabellones.vue';

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  mode: 'history',

  routes: [
    {
      path: '/',
      name: 'inicio',
      component: Inicio,
    },

    {
      path: '/tiempos-espera',
      name: 'tiempos-espera',
      component: Tiempos,
    },

    {
      path: '/eficiencia-pabellones',
      name: 'eficiencia-pabellones',
      component: Pabellones,
    },

    {
      path: '/gestion-hospitalaria',
      name: 'gestion-hospitalaria',
      component: Gestion,
    },

    {
      path: '/*',
      name: 'catch-all',
      component: Inicio,
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
