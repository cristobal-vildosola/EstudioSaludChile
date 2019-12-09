<template>
  <div>
    <div class="main-section header">
      <div class="section">
        <div class="main-title">
          Eficiencia en Pabellones
        </div>
      </div>
    </div>

    <div class="section">
      <div class="row">
        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            icon="hourglass"
            title="9 Horas de quirófano"
            description="Es el tiempo disponible de un quirófano en Chile, pero mientras en Chile
            el tiempo promedio de utilización es 4:48 horas, en el benchmarking (que dispone
            también de 9 hrs) el tiempo promedio de utilización es 6:23 horas."
          />
        </Animation>

        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            icon="user-md"
            title="1,9 Cirugías por quirófano"
            description="Fue el promedio de cirugías electivas por quirófano en el hospital con
            peor desempeño en Chile, mientras que en los hospitales del Benchmarking fue de 4,1
            cirugías por quirófano."
          />
        </Animation>

        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            text="4,2"
            title="Cirugías por quirófano"
            description="Fue el promedio de cirugías electivas por quirófano en el hospital con
            mejor desempeño en Chile, mientras que en los hospitales del Benchmarking el mejor fue
            de 7 cirugías por quirófano."
          />
        </Animation>

        <Animation class="col-lg-4 offset-lg-2 col-sm-6">
          <Bubble
            text="09:36"
            title=""
            description="Fue el horario promedio de inicio de la primera cirugía en el hospital con
            peor desempeño en Chile, mientras que en los hospitales del Benchmarking fue a las
            09:00"
          />
        </Animation>

        <Animation class="col-lg-4 offset-lg-0 col-sm-6 offset-sm-3">
          <Bubble
            text="41%"
            title="Uso de Quirófanos"
            description="Fue el uso promedio de los quirófanos electivos  en el hospital con mejor
            desempeño en Chile, mientras que en los hospitales del Benchmarking la mejor ocupación
            promedio fue 67%."
          />
        </Animation>
      </div>
    </div>

    <div class="section">
      <div class="title">
        Tasa de ocupación de pabellones electivos según tablas quirúrgicas.
      </div>

      <LineChart
        :data="quirofanosEnTrabajo"

        date="hora"
        value="proporcion"

        :min="0"
        :max="100"

        yTitle="% de quirófanos en trabajo"
        :tooltipText="`[bold]{proporcion}%[/] en trabajo a las {hora.formatDate('HH:mm')}.`"

        height="30rem"
      />

      <div class="description">
        Muestra la tasa de uso real por hora (según tablas quirúrgicas) en 4 hospitales de alta
        complejidad del país durante el 2017.
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import LineChart from '@/components/LineChart.vue';

import { quirofanosEnTrabajo } from '@/assets/data/pabellones';

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
    };
  },
};
</script>
