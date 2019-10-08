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

        valueTitle="Cantidad de Licencias"
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

      <StackedBarChart
        :data="licenciasTipoSexo"
        category="sexo"
        :values="[
          {value: 'Enfermedad o accidente no del trabajo', stacked: true },
          {value: 'Prorroga medicina preventiva', stacked: false },
          {value: 'Patologias del embarazo', stacked: true },
          {value: 'Licencia maternal', stacked: true },
          {value: 'Enfermedad grave hijo menor de 1 año', stacked: true },
          {value: 'Accidente del trabajo', stacked: true },
          {value: 'Enfermedad profesional', stacked: true },
        ]"

        valueTitle="Cantidad de Licencias"
        valueFormat="#.#a"
        :tooltipText="`{name}:
                      [bold]{valueX}[/] licencias`"

        :horizontal="true"
        height="30rem"
      />
    </div>

    <div class="container px-0 py-4" id="top10GES">
      <div class="title">
        Top 10 enfermedades GES más antendidas
      </div>

      <BarChart class="py-3"
        :data="top10GES"

        category="enfermedad"
        value="cuenta"

        :min="0"

        valueTitle="número de atenciones"
        valueFormat="#.#a"
        :tooltipText="`{enfermedad}:
                      [bold]{cuenta}[/] atenciones`"

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
        value="cuenta"

        :min="0"

        valueTitle="número de atenciones"
        valueFormat="#.#a"
        :tooltipText="`{enfermedad}:
                      [bold]{cuenta}[/] atenciones`"

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
import BarChart from '@/components/BarChart.vue';
import StackedBarChart from '@/components/StackedBarChart.vue';
import { top10GES, top10noGES } from '@/assets/data/atenciones';
import { licenciasRegion, licenciasTipoDesglose, licenciasTipoSexo } from '@/assets/data/licencias';
import { pacientesRegion } from '@/assets/data/pacientes';
import { poblacionRegionDict } from '@/assets/data/poblacion';

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
    BarChart,
    StackedBarChart,
  },

  data() {
    return {
      licenciasTipoDesglose,
      pacientesRegionNorm,
      licenciasRegionNorm,
      licenciasPacienteRegion,
      licenciasTipoSexo,
      top10GES,
      top10noGES,
    };
  },
};
</script>

<style scoped></style>
