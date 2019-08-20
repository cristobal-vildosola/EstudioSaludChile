<template>
  <div>
    <div class="w-100 py-5 bg-main">
      <div class="container text-center text-clear">
          <h1>Descubre la Realidad de la Salud en Chile</h1>

          <h5>
            Resultados del estudio "Eficiencia en Pabellones y priorización de pacientes para cirugía electiva" de la Comisión Nacional de Productividad
          </h5>
      </div>
    </div>

    <ChileChart class="py-4" />

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
import ChileChart from '../charts/ChileChart'

export default {
  name: 'Start',
  components: {
    ChileChart
  }
}
</script>

<style scoped></style>
