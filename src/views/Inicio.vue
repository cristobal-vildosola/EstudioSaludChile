<template>
  <div>
    <Header />

    <div class="container">
      <div class="row">
        <div class="col-md-4 offset-md-2 col-sm-6">
          <Animation direction="right">
            <Bubble
              icon="leaf"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>

        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              text="158"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/common/Header.vue';
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';

export default {
  name: 'Inicio',

  components: {
    Header,
    Animation,
    Bubble,
  },

  data() {
    return {
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>

<style scoped></style>
