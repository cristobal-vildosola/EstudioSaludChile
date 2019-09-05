<template>
  <div>
    <Header />

    <div class="py-4">
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
        Este mapa representa el número de personas atendidas en el sistema de salud público entre los años 2014 y 2017. Si es que una persona se atendió 10 veces en este periodo, solo se cuenta 1 vez.
      </h5>
    </div>

    <div class="py-4">
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

    <div class="py-4">
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

    <div class="container">
      <BarChart style="height: 500px" class="container py-4"
        :data="licenciasTipoDesglose"
      />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '@/common/Footer.vue';
import Header from '@/common/Header.vue';
import ChileChart from '@/components/ChileChart.vue';
import BarChart from '@/components/BarChart.vue';
import { licenciasRegion, licenciasTipoDesglose } from '@/assets/data/licencias';
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
    ChileChart,
    BarChart,
  },

  data() {
    return {
      licenciasTipoDesglose,
      pacientesRegionNorm,
      licenciasRegionNorm,
      licenciasPacienteRegion,
    };
  },
};
</script>

<style scoped></style>
