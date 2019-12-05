<template>
  <div class="bubble-item">
    <div class="bubble">
      <i v-if="icon" :class="`bubble-icon fas fa-${icon}`"></i>
      <div class="bubble-text">
        {{ text }}
      </div>
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
  padding: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;
}

.bubble-icon {
  font-size: 3rem;
}

.bubble-text {
  font-size: 2.5rem;
  line-height: 1.2;
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
