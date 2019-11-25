<template>
  <div>
    <div class="main-section header">
      <div class="container">
          <div class="title">
            Eficiencia en Pabellones
          </div>

          <p>A continuación se muestran ...</p>
      </div>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              icon="building"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              text="400"
              title="Días de espera"
              description="en la lista de espera no GES en promedio"
            />
          </Animation>
        </div>
        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              icon="history"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
        <div class="col-md-4 offset-md-2 col-sm-6">
          <Animation direction="left">
            <Bubble
              icon="user"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
        <div class="col-md-4 offset-md-0 col-sm-6 offset-sm-3">
          <Animation direction="left">
            <Bubble
              text="5000"
              title="Lorem Ipsum"
              :description="lorem"
            />
          </Animation>
        </div>
      </div>
    </div>

    <div class="container px-0 py-4">
      <div class="title">
        Proporción de quirófanos en trabajo
      </div>

      <LineChart class="py-3"
        :data="quirofanosEnTrabajo"

        date="hora"
        value="proporcion"

        :min="0"
        :max="100"

        yTitle="% de quirófanos en trabajo"
        :tooltipText="`[bold]{proporcion}%[/] en trabajo a las {hora.formatDate('HH:mm')}.`"

        height="30rem"
      />
    </div>

  </div>
</template>

<script>
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import LineChart from '@/components/LineChart.vue';

import quirofanosEnTrabajo from '@/assets/data/pabellones';

export default {
  name: 'Pabellones',

  components: {
    Animation,
    Bubble,
    LineChart,
  },

  data() {
    return {
      quirofanosEnTrabajo,

      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>
