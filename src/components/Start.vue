<template>
  <div>
    <div class="w-100 py-5 bg-title">
      <div class="container text-center text-clear">
          <h1>Descubre la Realidad de la Salud en Chile</h1>

          <h5>
            Resultados del estudio "Eficiencia en Pabellones y priorización de pacientes para cirugía electiva" de la Comisión Nacional de Productividad
          </h5>
      </div>
    </div>

    <div class="py-3">
      <mapchart/>
    </div>
  </div>
</template>

<script>
import mapchart from '../charts/MapChart'

export default {
  name: 'Start',
  components: {
    mapchart
  }
}
</script>

<style scoped></style>
