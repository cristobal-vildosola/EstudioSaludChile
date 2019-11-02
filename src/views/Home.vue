<template>
  <div>
    <Header />

    <Sidebar
      :links="{
        'pacientes atendidos': 'pacientes',
        'licencias promedio': 'licencias-promedio',
        'licencias entregadas': 'licencias-total',
        'licencias por tipo': 'licencias-tipo',
        'licencias por sexo': 'licencias-sexo',
        'top 10 casos GES': 'top10GES',
        'top 10 casos no GES': 'top10noGES',
      }"
    />

    <div class="container px-0 py-4" id="pacientes">
      <div class="title">
        Tiempo de espera en lista no GES (dias)
      </div>

      <ChileChart class="py-3"
        :data="tiempoEsperaRegion"
        :tooltipText="`{name}:
                      [bold]{value.formatNumber('.#')}[/] días de espera en promedio

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
        :tooltipText="`{nombre}:
                      {quirofanos} quirófanos
                      {camas} camas`"
      />
    </div>

    <div class="container px-0 py-4" id="pacientes">
      <div class="title">
        Pacientes atendidos <small class="font-weight-light">(% de la población)</small>
      </div>

      <ChileChart class="py-3"
        :data="pacientesRegionNorm"
        :tooltipText="`{name}:
                      [bold]{value.formatNumber('.#%')}[/] de la población
                      {total} pacientes en total`"
        legendFormat="#%"
        :maxValue="1"
      />

      <h5 class="container font-weight-normal">
        Este mapa representa el número de personas atendidas en el sistema de salud público
        entre los años 2014 y 2017. Si es que una persona se atendió 10 veces en este periodo,
        solo se cuenta 1 vez.
      </h5>
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

      <h5 class="container font-weight-normal">
      </h5>
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
        category="sexo"
        :values="[
          { value: 'Enfermedad o accidente no del trabajo', stacked: true },
          { value: 'Prorroga medicina preventiva', stacked: true },
          { value: 'Patologias del embarazo', stacked: true },
          { value: 'Licencia maternal', stacked: true },
          { value: 'Enfermedad grave hijo menor de 1 año', stacked: true },
          { value: 'Accidente del trabajo', stacked: true },
          { value: 'Enfermedad profesional', stacked: true },
        ]"

        valueTitle="licencias"
        valueFormat="#.#a"
        :tooltipText="`{name}:
                      [bold]{value}[/] licencias`"

        :horizontal="true"
        height="30rem"
      />
    </div>

    <div class="container px-0 py-4" id="top10GES">
      <div class="title">
        Top 10 enfermedades GES más antendidas
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

    <div class="container px-0 py-4" id="top10GESQx">
      <div class="title">
        Top 10 enfermedades GES quirurgicas más antendidas
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

    <div class="container px-0 py-4" id="top10GESnoQx">
      <div class="title">
        Top 10 enfermedades GES no quirurgicas más antendidas
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
        Top 10 enfermedades no GES más antendidas
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

    <div class="container px-0 py-4" id="top10noGES">
      <div class="title">
        Top 10 enfermedades no GES quirurjicos más antendidas
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

    <div class="container px-0 py-4" id="licencias-sexo">
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

        :horizontal="true"
        height="30rem"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/common/Footer.vue';
import Header from '@/common/Header.vue';
import Sidebar from '@/common/Sidebar.vue';
import ChileChart from '@/components/ChileChart.vue';
import MarkedChileChart from '@/components/MarkedChileChart.vue';
import BarChart from '@/components/BarChart.vue';
import MultiBarChart from '@/components/MultiBarChart.vue';
import {
  top20GES, top10GESQx, top10GESnoQx, top10noGES, top10noGESQx, horasPedidasDisponibles,
} from '@/assets/data/casos';
import { licenciasRegion, licenciasTipoDesglose, licenciasTipoSexo } from '@/assets/data/licencias';
import { pacientesRegion } from '@/assets/data/pacientes';
import { poblacionRegionDict } from '@/assets/data/poblacion';
import { establecimientos } from '@/assets/data/establecimientos';
import tiempoEsperaRegion from '@/assets/data/tiempoEspera';

const pacientesRegionNorm = pacientesRegion.map(
  x => ({ id: x.id, value: x.value / poblacionRegionDict[x.id], total: x.value }),
);
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
    Footer,
    Header,
    Sidebar,
    ChileChart,
    MarkedChileChart,
    BarChart,
    MultiBarChart,
  },

  data() {
    return {
      licenciasTipoDesglose,
      pacientesRegionNorm,
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
    };
  },
};
</script>

<style scoped></style>
