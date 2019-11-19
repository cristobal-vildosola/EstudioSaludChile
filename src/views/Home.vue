<template>
  <div>
    <Header />

    <Sidebar
      :links="{
        'Top 10 casos GES': 'top10GES',
        'Top 10 casos no GES': 'top10noGES',
        'Oferta vs Demanda': 'oferta-demanda',
        'Establecimientos' : 'establecimientos',
        'Licencias': 'licencias',
        'Licencias por tipo': 'licencias-tipo',
        'Licencias por sexo': 'licencias-sexo',
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
              text="158"
              title="Lorem Ipsum"
              :description="lorem"
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
        <div class="col-md-4 offset-md-2 col-sm-6">
          <Animation direction="left">
            <Bubble
              icon="user"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
        <div class="col-md-4 offset-md-0 col-sm-6 offset-sm-3">
          <Animation direction="left">
            <Bubble
              text="5000"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
      </div>
    </div>

    <div class="container px-0 py-4" id="top10GES">
      <div class="title">
        Top 10 casos GES más antendidos
      </div>

      <BarChart class="py-3"
        :data="top20GES.slice(0,10)"

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

    <div class="container px-0 py-4" id="top10GES-Qx">
      <div class="title">
        Top 10 casos GES quirurgicos más antendidos
      </div>

      <BarChart class="py-3"
        :data="top10GESQx"

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

    <div class="container px-0 py-4" id="top10GES-noQx">
      <div class="title">
        Top 10 casos GES no quirurgicos más antendidos
      </div>

      <BarChart class="py-3"
        :data="top10GESnoQx"

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
        Horas pedidas vs Horas disponibles
      </div>

      <MultiBarChart
        :data="horasPedidasDisponibles"
        category="especialidad"
        :values="[
          { value: 'pedidas', stacked: false },
          { value: 'disponibles', stacked: false },
        ]"

        valueTitle="horas"
        valueFormat="#.#a"
        :tooltipText="`{category}:
                      [bold]{value}[/] horas {name}`"

        :disableLegend="true"
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
        :tooltipText="`{name}:
                      [bold]{value.formatNumber('.#')}[/] días de espera en promedio
                      [opacity: 0].[/]
                      mediana según servicio de salud
                      {medianas}`"
        legendFormat="#"
      />
    </div>

    <div class="container px-0 py-4" id="establecimientos">
      <div class="title">
        Establecimientos con quirófanos
      </div>

      <MarkedChileChart class="py-3"
        :data="establecimientos"
        :remarkThreshold="10"
        remarkValue="quirofanos"
        remarkValueName="quirófanos"

        :tooltipText="`{nombre}:
                      {quirofanos} quirófanos
                      {camas} camas`"
      />
    </div>

    <div class="main-section header" id="licencias">
      <div class="container">
          <div class="title">
            ¿Dónde se encuentran las licencias?
          </div>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 offset-md-2 col-sm-6">
          <Bubble
            icon="leaf"
            title="Lorem Ipsum"
            :description="lorem"
          />
        </div>
        <div class="col-md-4 col-sm-6">
          <Bubble
            text="158"
            title="Lorem Ipsum"
            :description="lorem"
          />
        </div>
      </div>
    </div>

    <div class="container px-0 py-4" id="licencias-promedio">
      <div class="title">
        Licencias promedio por paciente
      </div>

      <ChileChart class="py-3"
        :data="licenciasPacienteRegion"
        :tooltipText="`{name}:
                      [bold]{value.formatNumber('.##')}[/] licencias por paciente
                      {total} licencias en total`"
        legendFormat=".#"
        :maxValue="2.5"
      />
    </div>

    <div class="container px-0 py-4" id="licencias-total">
      <div class="title">
        Licencias entregadas <small class="font-weight-light">(% de la población)</small>
      </div>

      <ChileChart class="py-3"
        :data="licenciasRegionNorm"
        :tooltipText="`{name}:
                      [bold]{value.formatNumber('.#%')}[/] de la población
                      {total} licencias en total`"
        legendFormat="#%"
        :maxValue="1"
      />

      <h5 class="container font-weight-normal">
        Este mapa representa el número de licencias entregadas entre los años 2014 y 2017.
      </h5>
    </div>

    <div class="container px-0 py-4" id="licencias-tipo">
      <div class="title">
        Licencias entregadas según tipo
      </div>

      <BarChart class="py-3"
        :data="licenciasTipoDesglose"

        category="subtipo"
        :min="0"
        :max="12210000"
        :axisBreak="{ start: 800000, end: 12000000, breakSize: 0.005, }"

        valueTitle="licencias"
        valueFormat="#.#a"
        :tooltipText="`{subtipo}:
                      [bold]{value}[/] licencias`"

        :horizontal="true"
        height="30rem"
      />
    </div>

    <div class="container px-0 py-4" id="licencias-sexo">
      <div class="title">
        Licencias entregadas según sexo
      </div>

      <MultiBarChart
        :data="licenciasTipoSexo"
        category="subtipo"
        :values="[
          { value: 'hombres' },
          { value: 'mujeres' },
        ]"
        :calcPercent="true"

        valueTitle="licencias"
        valueFormat="#.#a"
        :tooltipText="`{name}:
                      [bold]{value}[/] licencias
                      {value.totalPercent.formatNumber('#.00')}%`"

        :disableLegend="true"
        :horizontal="true"
        height="30rem"
      />
    </div>
  </div>
</template>

<script>
import Header from '@/common/Header.vue';
import Sidebar from '@/common/Sidebar.vue';

import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import BarChart from '@/components/BarChart.vue';
import MultiBarChart from '@/components/MultiBarChart.vue';
import ChileChart from '@/components/ChileChart.vue';
import MarkedChileChart from '@/components/MarkedChileChart.vue';

import {
  top20GES, top10GESQx, top10GESnoQx, top10noGES, top10noGESQx, horasPedidasDisponibles,
} from '@/assets/data/casos';
import { licenciasRegion, licenciasTipoDesglose, licenciasTipoSexo } from '@/assets/data/licencias';
import { pacientesRegion } from '@/assets/data/pacientes';
import { poblacionRegionDict } from '@/assets/data/poblacion';
import establecimientos from '@/assets/data/establecimientos';
import tiempoEsperaRegion from '@/assets/data/tiempoEspera';

const licenciasRegionNorm = licenciasRegion.map(
  x => ({ id: x.id, value: x.value / poblacionRegionDict[x.id], total: x.value }),
);

const pacientesRegionDict = {};
pacientesRegion.forEach((x) => { pacientesRegionDict[x.id] = x.value; });
const licenciasPacienteRegion = licenciasRegion.map(
  x => ({ id: x.id, value: x.value / pacientesRegionDict[x.id], total: x.value }),
);

export default {
  name: 'Start',

  components: {
    Header,
    Sidebar,
    Animation,
    Bubble,
    ChileChart,
    MarkedChileChart,
    BarChart,
    MultiBarChart,
  },

  data() {
    return {
      licenciasTipoDesglose,
      licenciasRegionNorm,
      licenciasPacienteRegion,
      licenciasTipoSexo,
      top20GES,
      top10GESQx,
      top10GESnoQx,
      top10noGES,
      top10noGESQx,
      horasPedidasDisponibles,
      establecimientos,
      tiempoEsperaRegion,

      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>

<style scoped></style>
