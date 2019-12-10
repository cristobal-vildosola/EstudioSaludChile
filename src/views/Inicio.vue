<template>
  <div>
    <div class="main-section header">
      <div class="section">
        <div class="main-title">
          Uso eficiente de quirófanos electivos y Gestión de Lista de Espera
        </div>

        <div class="main-subtitle">
          La Comisión Nacional de Productividad fue mandatada por la Presidencia para realizar
          este estudio, con el objetivo de elaborar recomendaciones de política pública que
          permitan -por un lado- hacer un mayor y mejor uso de los recursos asociados a los
          quirófanos electivos (de tal manera de aumentar la oferta de resolución quirúrgica), y
          por otro lado, recomendaciones que permitan mejorar la gestión de los tiempos de espera
          quirúrgicos asociado a los casos no GES con el objetivo último de ofrecer una atención
          más oportuna y justa.
          (<a href="https://www.comisiondeproductividad.cl/estudios/estudios-en-proceso-mandatados-por-el-gobierno-de-chile/estudio-eficiencia-en-pabellones-y-priorizacion-de-pacientes-para-cirugia-electiva/" target="_blank">
            Página del estudio
          </a>)
        </div>

        <img class="header-logo" width="234" height="100" src="@/assets/img/logo.png">
      </div>
    </div>

    <div class="section">
      <div class="row">
        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            text="53%"
            title="Uso de Quirófanos"
            description="Fue el uso promedio de los quirófanos electivos en Chile, mientras que
            en los hospitales del Benchmarking la ocupación promedio fue 71%."
          />
        </Animation>

        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            text="3,3"
            title="Cirugías por quirófano"
            description="Fue el promedio de cirugías electivas por quirófano en Chile, mientras
            que en los hospitales del Benchmarking fue de 5,1 por quirófano."
          />
        </Animation>

        <Animation class="col-lg-4 offset-lg-0 col-sm-6 offset-sm-3">
          <Bubble
            text="623"
            title="Días de Brecha"
            description="En promedio puede demorar un caso para salir de la lista de espera,
            respecto al hospital que le toma menos tiempo. Estos tiempos de espera no
            (necesariamente) guardan relación con el volumen de la lista."
          />
        </Animation>
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';

export default {
  name: 'Inicio',

  components: {
    Animation,
    Bubble,
  },
};
</script>

<style scoped></style>
