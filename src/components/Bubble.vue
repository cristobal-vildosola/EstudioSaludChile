<template>
  <div class="bubble-item">
    <div class="bubble">
      <i v-if="icon" :class="`fas fa-${icon}`"></i>
      {{ text }}
    </div>
    <div v-if="title" class="bubble-title">{{ title }}</div>
    <div v-if="description" class="bubble-description">{{ description }}</div>
  </div>
</template>

<script>
export default {
  name: 'Bubble',

  props: {
    icon: { type: String },
    text: { type: String },
    title: { type: String },
    description: { type: String },
  },
};
</script>

<style scoped>
.bubble-item {
  text-align: center;
  font-weight: 300;
}

.bubble {
  background: var(--main-color);
  color: #fff;

  margin: 1.5rem auto;
  width: 150px;
  height: 150px;
  border-radius: 50%;

  line-height: 150px;
  font-size: 48px;
}

.bubble-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
}

.bubble-description {
  padding: 0 2rem;
  margin-bottom: 1rem;
}
</style>
