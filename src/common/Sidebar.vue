<template>
  <nav class="sidebar-container">
    <button type="button" class="btn show-btn" @click="switchState" :class="{ 'hidden': open }">
      <i class="fas fa-bars"></i>
    </button>

    <ul class="sidebar" :class="{ active : open }">
      <div class="header">
        Secciones
        <button type="button" @click="switchState" class="btn collapse-btn">
          <i class="fas fa-arrow-left"></i>
        </button>
      </div>

      <li v-for="(link, name) in links" v-bind:key="`${name}-${link}`">

        <!-- direct link -->
        <a v-if="typeof link === 'string'" @click="() => { scrollTo(link) }">
          {{ name }}
        </a>

        <!-- submenu -->
        <a v-else
          :href="`#${name}-submenu`"
          data-toggle="collapse"
          aria-expanded="false"
          class="dropdown-toggle">
          {{ name }}
        </a>

        <ul class="collapse" :id="`${name}-submenu`">
          <li v-for="(sublink, name) in link" v-bind:key="`${name}-${sublink}`">
            <a @click="() => { scrollTo(sublink) }">
              {{ name }}
            </a>
          </li>
        </ul>

      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'Sidebar',

  data() {
    return {
      open: false,
    };
  },

  props: {
    links: { type: Object },
  },

  methods: {
    switchState() {
      this.open = !this.open;
    },

    scrollTo(id) {
      document.getElementById(id).scrollIntoView({ behavior: 'smooth' });
      window.history.pushState(null, '', `#${id}`);
    },
  },
};
</script>

<style scoped>
* {
  transition: 0.5s;
}
ul {
  list-style: none;
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
  top: 1rem;
  left: 1rem;

  width: 3rem;
  height: 3rem;
  background: #0a488d;
  color: #fff;
}
.show-btn.hidden {
  opacity: 0;
  visibility: none;
}

/* sidebar */
.sidebar {
  position: absolute;
  top: 1rem;
  min-width: 12rem;
  max-width: 20rem;

  padding: 0 0 .8rem;
  background: #0a488d;
  color: #eaeaea;

  transform: translateX(-100%);
}
.sidebar.active {
  transform: translateX(0%);
}

/* header and close button */
.sidebar .header {
  padding: .8rem;
  font-size: 1.4rem;
  background: #063467;
}
.sidebar .collapse-btn {
  position: absolute;
  color: #fff;
  right: 5px;
}

/* links */
.sidebar li a {
  padding: .8rem;
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
