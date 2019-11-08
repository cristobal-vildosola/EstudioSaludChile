<template>
  <div v-waypoint="{ active: animationActive, callback: appearOnScroll }" >
    <div class="animation" :class="[direction, {'in': appeared}]" >
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Animation',

  data() {
    return {
      appeared: false,
    };
  },

  props: {
    active: { type: String },
    direction: { type: String, default: 'up' },
    animationActive: { type: Boolean, default: true },
  },

  methods: {
    appearOnScroll({ going }) {
      if (!this.appeared && going === this.$waypointMap.GOING_IN) {
        this.appeared = true;
      }
    },
  },
};
</script>

<style scoped>
.animation {
  opacity: 0;
  transition-delay: .1s;
  transition: all .4s ease-in-out;
}

.left {
  transform: translateX(100px);
}
.right {
  transform: translateX(-100px);
}
.up {
  transform: translateY(100px);
}
.down {
  transform: translateY(-100px);
}

.in {
  transform: translate(0, 0);
  opacity: 1;
}
</style>
