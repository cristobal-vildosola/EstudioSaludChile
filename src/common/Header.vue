<template>
  <div class="main-section header">
    <div class="container">
        <div class="main-title">
          Descubre la Realidad de la Salud en Chile
        </div>

        <div class="main-subtitle">
          Resultados del estudio "Eficiencia en Pabellones y priorización de pacientes para
          cirugía electiva" de la Comisión Nacional de Productividad
        </div>

        <img class="logo" width="234" height="100" src="@/assets/img/logoClaro.png">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style scoped>
.header {
  padding: 2rem;
  background-color: #0a488d;
}

.logo {
  max-width: 50%;
  height: auto;
  padding-top: 1.5rem;
}
</style>
