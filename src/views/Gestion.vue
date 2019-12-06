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
              text="8 veces"
              description="Hasta 8 veces más puede ser el consumo de días cama para un paciente
              sometido a la misma cirugía (colecistectomía videolaparoscopica, severidad 1), según
              datos del MINSAL 2014-2017."
            />
          </Animation>
        </div>
        <div class="col-md-4 col-sm-6">
          <Animation direction="right">
            <Bubble
              icon="procedures"
              title="1,5 millones de días cama de sobre estancia"
              description="Fue la sobre estancia por año, equivalente al 17% de la oferta de días
              cama del SNSS."
            />
          </Animation>
        </div>
      </div>
    </div>

    <div class="section" id="top10noGES">
      <div class="title">
        Días de estada por Colecistectomía Laparoscópica (S1) según tipo de ingreso
      </div>

      <MultiBarChart
        :data="estanciaPrVsUr"

        category="hospital"
        :values="[
          { value: 'estanciaUr', legend: 'ingresos por urgencia' },
          { value: 'estanciaPr', legend: 'ingresos programados' },
        ]"

        :min="0"

        valueTitle="días de estada"
        categoryTitle="hospital"
        :hideCategory="true"

        valueFormat="#"
        :tooltipText="`{estanciaUr} días para ingresos por [bold]urgencia[/]
                      {estanciaPr} días para ingresos [bold]programados[/]`"

        :disableLegend="true"
      />

      <div class="description">
        La estancia media de los pacientes hospitalizados y programados para ser sometidos a una
        colecistectomía videolaparoscópica (severidad 1) fue de 1,41 días para el hospital con
        mejor performance, en otro establecimiento fue de 7,41. Mientras que casos sometidos a la
        misma cirugía y de la misma severidad, pero ingresados por urgencias presentaron una
        brechas de hasta 11 días en la resolución de su problema de salud, según el hospital al que
        ingresaron. Esto es especialmente importante para el SNSS por la excesiva variabilidad en
        la atención sobre casos similares en severidad (GRD) y la restringida oferta de camas en
        los hospitales de la red pública, por lo que una mejora en la gestión de estos casos (alto
        volumen y baja complejidades).
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

        :heatData="poblacionFonasa"
        heatValue="qx_por_100000"
        :heatTooltipText="`{name}:
                          [bold]{qx_por_100000}[/] quirófanos por cada
                          100.000 beneficiarios FONASA`"
        minColor="#800002"
        maxColor="#001a66"
      />

      <div class="description">
        El mapa muestra todos los establecimientos públicos en Chile que poseen por lo menos un
        quirófano disponible. Además, para cada región se calcula el número de quirófanos por cada
        100.000 beneficiarios de FONASA, lo que se muestra utilizando la escala de color en la
        parte inferior del gráfico.
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import MultiBarChart from '@/components/MultiBarChart.vue';
import MarkedChileChart from '@/components/MarkedChileChart.vue';

import {
  establecimientos, poblacionFonasa, estanciaPrVsUr,
} from '@/assets/data/gestion';

export default {
  name: 'Gestion',

  components: {
    Animation,
    Bubble,
    MultiBarChart,
    MarkedChileChart,
  },

  data() {
    return {
      establecimientos,
      poblacionFonasa,
      estanciaPrVsUr,
    };
  },
};
</script>
