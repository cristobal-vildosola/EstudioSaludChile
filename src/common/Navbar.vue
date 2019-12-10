<template>
  <nav class="navbar navbar-expand-lg">
    <router-link :to="{ name: 'inicio' }">
      <img class="logo" width="117" height="50" src="@/assets/img/logo.png">
    </router-link>

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <div class="navbar-nav mt-2 mt-lg-0">
        <router-link :to="{ name: 'inicio' }"
          class="nav-link" data-toggle="collapse" data-target="#navbar">
          Inicio
        </router-link>

        <router-link :to="{ name: 'tiempos-espera' }"
          class="nav-link" data-toggle="collapse" data-target="#navbar">
          Tiempos de Espera
        </router-link>

        <router-link :to="{ name: 'eficiencia-pabellones' }"
          class="nav-link" data-toggle="collapse" data-target="#navbar">
          Eficiencia en Pabellones
        </router-link>

        <router-link :to="{ name: 'gestion-hospitalaria' }"
          class="nav-link" data-toggle="collapse" data-target="#navbar">
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
  line-height: 0.8;
  color: inherit;
  margin: 0 .5rem;
}
.nav-link:hover {
  color: var(--main-color);
}

.logo {
  height: 35px;
  width: auto;
  margin-right: 3em;
}

.nav-link.router-link-exact-active {
  border-left: 3px solid var(--main-color);
  padding-left: .5rem;
}

/* only on large devices */
@media (min-width: 992px) {
  .nav-link {
    border-bottom: 3px solid #0000;
  }
  .nav-link.router-link-exact-active {
    border-color: var(--main-color);
    border-left: 0;
  }

  .logo {
    height: 50px;
  }
}

</style>
