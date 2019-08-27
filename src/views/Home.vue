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
      title="Licencias entregadas por Región"
      description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque efficitur
      sollicitudin tortor, vehicula interdum erat cursus vel. Integer dictum velit leo. In hac
      habitasse platea dictumst. Aenean tempor odio eget magna pulvinar convallis. Donec eget
      augue orci. Sed quis feugiat est. Vestibulum hendrerit ultricies elit, eu consequat eros
      hendrerit sit amet."

      :data="licenciasRegion"
      tooltipText="{name}: {value} licencias"
      :logaritmic="true"
    />

    <ChileChart class="py-4"
      title="Pacientes atendidos por Región"
      description=""

      :data="pacientesRegion"
      tooltipText="{name}: {value} pacientes"
    />

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
import { licenciasRegion } from '@/assets/data/licencias';
import { pacientesRegion } from '@/assets/data/pacientes';

export default {
  name: 'Start',

  components: {
    ChileChart,
  },

  data() {
    return {
      licenciasRegion,
      pacientesRegion,
    };
  },
};
</script>

<style scoped></style>
