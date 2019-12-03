<template>
  <div>
    <div class="main-section header">
      <div class="section">
          <div class="main-title">
            Gestion Hospitalaria
          </div>
      </div>
    </div>

    <div class="section">
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

    <div class="section">
      <div class="title">
        Establecimientos con quirófanos
      </div>

      <MarkedChileChart
        :markData="establecimientos"
        :remarkThreshold="10"
        remarkValue="quirofanos"
        remarkValueName="quirófanos"

        :tooltipText="`{nombre}:
                      {quirofanos} quirófanos
                      {camas} camas`"
      />

      <MarkedChileChart
        :markData="establecimientos"
        :remarkThreshold="300"
        remarkValue="camas"
        remarkValueName="camas"

        :tooltipText="`{nombre}:
                      {quirofanos} quirófanos
                      {camas} camas`"
      />
    </div>
  </div>
</template>

<script>
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import MarkedChileChart from '@/components/MarkedChileChart.vue';

import establecimientos from '@/assets/data/establecimientos';

export default {
  name: 'Gestion',

  components: {
    Animation,
    Bubble,
    MarkedChileChart,
  },

  data() {
    return {
      establecimientos,

      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>
