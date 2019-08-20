<template>
  <div>
    <!-- big header -->
    <div class="w-100 pt-5 bg-main">
      <div class="container text-center text-clear">
          <div class="title">
            Descubre la Realidad de la Salud en Chile
          </div>

          <div class="subtitle">
            Resultados del estudio "Eficiencia en Pabellones y priorización de pacientes para cirugía electiva" de la Comisión Nacional de Productividad
          </div>

          <div class="pb-5 pt-4">
            <img class="logo" width="234" height="100" src="/static/img/logoClaro.png">
          </div>
      </div>
    </div>

    <ChileChart class="py-4"
      :data="licenciasRegion"
      title="Licencias entregadas por Región"
      description=""
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
import ChileChart from '@/charts/ChileChart'
import { licenciasRegion } from '@/assets/data/licencias.js'

export default {
  name: 'Start',

  components: {
    ChileChart
  },

  data () {
    return {
      licenciasRegion
    }
  }
}
</script>

<style scoped></style>
