<template>
  <div class="header">
    <div class="container">
        <div class="big-title">
          Descubre la Realidad de la Salud en Chile
        </div>

        <div class="big-subtitle">
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
  background-color: #0a488d;
  color: #eaeaea;
  text-align: center;
  width: 100%;
}

.big-title, .big-subtitle {
  font-weight: 300;
  line-height: 1.2;
}

.big-title {
  font-size: 6rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
}

.big-subtitle {
  font-size: 2rem;
  padding-bottom: 1rem;
}

.logo {
  max-width: 50%;
  height: auto;
  padding-top: 1.5rem;
  padding-bottom: 2rem;
}

/* reduce size in smaller devices */
@media (max-width: 1000px) {
  .big-title {
    font-size: 3rem;
    padding-bottom: 1rem;
  }

  .big-subtitle {
    font-size: 1.2rem;
    padding-bottom: 0.5rem;
  }
}

</style>
