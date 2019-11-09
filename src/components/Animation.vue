<template>
  <div v-waypoint="{
    active,
    callback: appearOnScroll,
    options: { threshold },
  }" >
    <div class="animation" :class="[direction, {'in': appeared || !active}]" >
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
    direction: { type: String, default: 'up' },
    active: { type: Boolean, default: true },
    threshold: { type: Number, default: 0.5 },
  },

  methods: {
    appearOnScroll({ going, _entry }) {
      if (!this.appeared && going === this.$waypointMap.GOING_IN) {
        this.appeared = _entry.intersectionRatio > this.threshold;
      }
    },
  },
};
</script>

<style scoped>
.animation {
  opacity: 0;
  transition: transform ease-out, opacity ease-in-out;
  transition-duration: .6s
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
