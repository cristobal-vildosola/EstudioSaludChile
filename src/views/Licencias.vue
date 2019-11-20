<template>
  <div>
    <div class="main-section header" id="licencias">
      <div class="container">
          <div class="title">
            Licencias
          </div>

          <p>A continuación se muestran ...</p>
      </div>
    </div>

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

    <div class="container px-0 py-4" id="licencias-tipo">
      <div class="title">
        Licencias entregadas según tipo
      </div>

      <BarChart class="py-3"
        :data="licenciasTipoDesglose"

        category="subtipo"
        :min="0"
        :max="12210000"
        :axisBreak="{ start: 800000, end: 12000000, breakSize: 0.005, }"

        valueTitle="licencias"
        valueFormat="#.#a"
        :tooltipText="`{subtipo}:
                      [bold]{value}[/] licencias`"

        :horizontal="true"
        height="30rem"
      />
    </div>

    <div class="container px-0 py-4" id="licencias-sexo">
      <div class="title">
        Licencias entregadas según sexo
      </div>

      <MultiBarChart
        :data="licenciasTipoSexo"
        category="subtipo"
        :values="[
          { value: 'hombres' },
          { value: 'mujeres' },
        ]"
        :calcPercent="true"

        valueTitle="licencias"
        valueFormat="#.#a"
        :tooltipText="`{name}:
                      [bold]{value}[/] licencias
                      {value.totalPercent.formatNumber('#.00')}%`"

        :disableLegend="true"
        :horizontal="true"
        height="30rem"
      />
    </div>
  </div>
</template>

<script>
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import BarChart from '@/components/BarChart.vue';
import MultiBarChart from '@/components/MultiBarChart.vue';

import { licenciasTipoDesglose, licenciasTipoSexo } from '@/assets/data/licencias';

export default {
  name: 'Licencias',

  components: {
    Animation,
    Bubble,
    BarChart,
    MultiBarChart,
  },

  data() {
    return {
      licenciasTipoDesglose,
      licenciasTipoSexo,

      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    };
  },
};
</script>
