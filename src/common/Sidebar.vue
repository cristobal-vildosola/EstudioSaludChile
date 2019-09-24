<template>
  <div class="sidebar-container">
    <button type="button" class="btn show-btn" @click="switchState" :class="{ 'hidden': open }">
      <i class="fas fa-bars"></i>
    </button>

    <ul class="sidebar" :class="{ active : open }">
      <div class="header">
        secciones

        <button type="button" @click="switchState" class="btn collapse-btn">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>

      <li>
        <a href="#homeSubmenu"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle">
          Pacientes
        </a>

        <ul class="collapse" id="homeSubmenu">
          <li><a href="#">Gráfico 1</a></li>
          <li><a href="#">Gráfico 2</a></li>
          <li><a href="#">Gráfico 3</a></li>
        </ul>
      </li>

      <li><a href="#">Finanzamiento</a></li>

      <li><a href="#">Lista de Espera</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',

  data() {
    return {
      open: false,
    };
  },

  methods: {
    switchState() {
      this.open = !this.open;
    },
  },
};
</script>

<style scoped>
* {
  transition: 0.5s;
}

/* sticky container of height 0 */
.sidebar-container {
  position: sticky;
  top: 0;
  z-index: 1000;
  height: 0;
}

/* button to display the sidebar */
.show-btn {
  position: absolute;
  top: 1em;
  left: 1em;

  width: 3em;
  height: 3em;
  background-color: #0a488d;
  color: #fff;
}
.show-btn.hidden {
  opacity: 0;
  visibility: none;
}

/* sidebar */
.sidebar {
  position: absolute;
  top: 1em;
  width: 12em;
  margin-left: -12em;

  padding: 0 .6em .6em;
  background: #0a488d;
  color: #eaeaea;
}
.sidebar.active {
  margin-left: 0;
}

/* header and close button */
.sidebar .header {
  padding: .6em;
  font-size: 1.2em;
}
.sidebar .collapse-btn {
  position: absolute;
  color: #fff;
  right: 5px;
}

/* links */
.sidebar ul {
  list-style: none;
  margin: 0;
}
.sidebar li a {
  padding: .6em;
  display: block;

  color: inherit;
  text-decoration: none;
}
.sidebar li a:hover {
  color: #0a488d;
  background: #fff;
}

/* nested menu */
.sidebar li ul {
  font-size: 0.9rem;
  padding-left: 15px;
}

/* nested menu arrow */
.sidebar .dropdown-toggle {
  position: relative;
}
.sidebar .dropdown-toggle::after {
  display: block;
  position: absolute;
  top: 50%;
  right: 20px;
  transform: translateY(-50%);
}
</style>
