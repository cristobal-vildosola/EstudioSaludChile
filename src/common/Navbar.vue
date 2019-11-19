<template>
  <nav class="navbar navbar-expand-lg">
    <img class="logo" width="117" height="50" src="@/assets/img/logo.png">

    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar">
      <i class="fas fa-bars"></i>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <div class="navbar-nav mr-auto mt-2 mt-lg-0">
        <a class="nav-item nav-link" href="/">Home</a>
        <a class="nav-item nav-link" href="/licencias">Licencias</a>
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

.logo {
  height: 50px;
  width: auto;
  margin-right: 4em;
}
</style>
