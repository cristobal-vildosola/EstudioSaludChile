<template>
  <div>
    <div class="main-section header">
      <div class="container">
          <div class="title">
            Tiempos de espera
          </div>

          <p>A continuación se muestran ...</p>
      </div>
    </div>

    <Sidebar
      :links="{
        'Top 10 casos GES': 'top10GES',
        'Top 10 casos no GES': 'top10noGES',
        'Horas disponibles v/s pedidas': 'oferta-demanda',
      }"
    />

    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              icon="building"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              text="400"
              title="Días de espera"
              description="en la lista de espera no GES en promedio"
            />
          </Animation>
        </div>
        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              icon="history"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
      </div>
    </div>

    <div class="container px-0 py-4" id="top10noGES">
      <div class="title">
        Top 10 casos no GES más antendidos
      </div>

      <BarChart class="py-3"
        :data="top10noGES"

        category="enfermedad"
        value="casos"

        :min="0"

        valueTitle="atenciones"
        valueFormat="#.#a"
        :tooltipText="`{enfermedad}:
                      [bold]{casos}[/] atenciones`"

        :horizontal="true"
        height="30rem"
      />
    </div>

    <div class="container px-0 py-4" id="top10noGES-Qx">
      <div class="title">
        Top 10 casos no GES quirurjicos más antendidos
      </div>

      <BarChart class="py-3"
        :data="top10noGESQx"

        category="enfermedad"
        value="casos"

        :min="0"

        valueTitle="atenciones"
        valueFormat="#.#a"
        :tooltipText="`{enfermedad}:
                      [bold]{casos}[/] atenciones`"

        :horizontal="true"
        height="30rem"
      />
    </div>

    <div class="container px-0 py-4" id="oferta-demanda">
      <div class="title">
        Diferencias entre Oferta y Demanda de Quirófanos
      </div>

      <BarChart class="py-3"
        :data="ofertaPor100Especialidad"

        category="especialidad"
        value="ofertaPor100"

        :min="0"
        :max="60"

        valueTitle="horas disponibles por cada 100 horas demandadas"
        valueFormat="#"
        :tooltipText="`{especialidad}: [bold]{ofertaPor100}[/] horas`"

        :horizontal="true"
        height="30rem"
      />
    </div>

    <div class="container px-0 py-4" id="tiempo-espera">
      <div class="title">
        Tiempo de espera en lista no GES (dias)
      </div>

      <ChileChart class="py-3"
        :data="tiempoEsperaRegion"
        heatValue="media"

        :tooltipText="`{name}:
                      [bold]{media.formatNumber('.#')}[/] días de espera en promedio
                      [opacity: 0].[/]
                      mediana según servicio de salud
                      {medianas}`"
        legendFormat="#"
      />

      <div class="title">
        Detalle región Metropolitana
      </div>

      <div class="row">
        <Heatmap class="py-3 col-lg-6"
          :mapGeojson="metropolitanaGeo"
          :data="tiempoEsperaComunasRM"
          heatValue="media"
          :minValue="300"

          :tooltipText="`{nombre}:
                        Servicio de salud {serv}
                        {media} días de espera en promedio.
                        El 50% de los pacientes espera {mediana} dias o más.`"
          legendFormat="#"
        />
      </div>
    </div>

  </div>
</template>

<script>
import Sidebar from '@/common/Sidebar.vue';

import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import BarChart from '@/components/BarChart.vue';
import Heatmap from '@/components/Heatmap.vue';
import ChileChart from '@/components/ChileChart.vue';

import {
  tiempoEsperaRegion, ofertaPor100Especialidad, tiempoEsperaComunasRM,
} from '@/assets/data/tiempoEspera';
import { top10noGES, top10noGESQx } from '@/assets/data/casos';
import metropolitanaGeo from '@/assets/maps/metropolitana';

export default {
  name: 'Tiempos',

  components: {
    Sidebar,
    Animation,
    Bubble,
    Heatmap,
    ChileChart,
    BarChart,
  },

  data() {
    return {
      metropolitanaGeo,

      top10noGES,
      top10noGESQx,
      ofertaPor100Especialidad,
      tiempoEsperaRegion,
      tiempoEsperaComunasRM,

      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>
