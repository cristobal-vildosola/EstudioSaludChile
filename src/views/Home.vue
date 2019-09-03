<template>
  <div>

    <!-- big header -->
    <div class="w-100 pt-5 bg-main">
      <div class="container text-center text-clear">
          <div class="title">
            Descubre la Realidad de la Salud en Chile
          </div>

          <div class="subtitle">
            Resultados del estudio "Eficiencia en Pabellones y priorización de pacientes para
            cirugía electiva" de la Comisión Nacional de Productividad
          </div>

          <div class="pb-5 pt-4">
            <img class="logo" width="234" height="100" src="@/assets/img/logoClaro.png">
          </div>
      </div>
    </div>

    <ChileChart class="py-4"
      title="Pacientes atendidos"

      :data="pacientesRegion"
      tooltipText="{name}: {value} pacientes"
    />

    <ChileChart class="py-4"
      title="Pacientes atendidos (Normalizados según población)"

      :data="pacientesRegionNorm"
      tooltipText="{name}: {value.formatNumber('.0%')} de la población"
      legendFormat=".0%"
      :maxValue="1"
    />

    <ChileChart class="py-4"
      title="licencias entregadas"

      :data="licenciasRegion"
      tooltipText="{name}: {value} de la población"
    />

    <ChileChart class="py-4"
      title="Licencias entregadas (Normalizadas según población)"

      :data="licenciasRegionNorm"
      tooltipText="{name}: {value.formatNumber('.0%')} licencias"
      legendFormat=".0%"
      :maxValue="1"
    />

    <div class="container">
      <BarChart style="height: 500px" class="container py-4"
        :data="licenciasTipoDesglose"
      />
    </div>

    <!-- footer -->
    <div class="w-100 py-3 bg-main">
      <div class="container text-center text-clear">
        <div>Comisión Nacional de productividad</div>
        <div class="d-inline-block">Amunategui 232 of. 401, Santiago, Chile /</div>
        <div class="d-inline-block">(+562) 24733444 /</div>
        <div class="d-inline-block">consultascnp@cnp.gob.cl</div>
      </div>
    </div>
  </div>
</template>

<script>
import ChileChart from '@/components/ChileChart.vue';
import BarChart from '@/components/BarChart.vue';
import { licenciasRegion, licenciasTipoDesglose } from '@/assets/data/licencias';
import { pacientesRegion } from '@/assets/data/pacientes';
import { poblacionRegion } from '@/assets/data/poblacion';

const pacientesRegionNorm = pacientesRegion.map(
  x => ({ id: x.id, value: x.value / poblacionRegion[x.id] }),
);
const licenciasRegionNorm = licenciasRegion.map(
  x => ({ id: x.id, value: x.value / poblacionRegion[x.id] }),
);

export default {
  name: 'Start',

  components: {
    ChileChart,
    BarChart,
  },

  data() {
    return {
      licenciasRegion,
      pacientesRegion,
      licenciasTipoDesglose,
      pacientesRegionNorm,
      licenciasRegionNorm,
    };
  },
};
</script>

<style scoped></style>
