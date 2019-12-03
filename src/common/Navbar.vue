<template>
  <nav class="navbar navbar-expand-lg">
    <img class="logo" width="117" height="50" src="@/assets/img/logo.png">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <div class="navbar-nav mt-2 mt-lg-0">
        <router-link class="nav-link" :to="{ name: 'inicio' }">
          Inicio
        </router-link>

        <router-link class="nav-link" :to="{ name: 'tiempos-espera' }">
          Tiempos de Espera
        </router-link>

        <router-link class="nav-link" :to="{ name: 'eficiencia-pabellones' }">
          Eficiencia en Pabellones
        </router-link>

        <router-link class="nav-link" :to="{ name: 'gestion-hospitalaria' }">
          Gestión Hospitalaria
        </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: 'Navbar',
};
</script>

<style scoped>
.navbar {
  position: sticky;
  top: 0;
  z-index: 1010;

  background: white;
  border-bottom: 1px solid #ccc;
}

.nav-link {
  font-size: 1.2rem;
  line-height: 1;
  color: inherit;

  padding: .5rem 0 !important;
  margin: 0 .5rem;

  border-bottom: 3px solid white;
}
.nav-link:hover {
  color: var(--main-color);
}
@media (min-width: 992px) {
  .router-link-exact-active {
    border-color: var(--main-color);
  }
}

.logo {
  height: 50px;
  width: auto;
  margin-right: 3em;
}
</style>
