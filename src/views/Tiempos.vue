<template>
  <div>
    <div class="main-section header">
      <div class="section">
        <div class="main-title">
          Tiempos de Espera
        </div>
      </div>
    </div>

    <div class="section">
      <div class="row">
        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            text="765 días"
            description="Es la brecha promedio para el grupo de 5 cirugías más demandadas, entre
            el hospital que se demora menos y el que más demora en resolver estos casos."
          />
        </Animation>

        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            text="550 días"
            description="Es la brecha promedio para el grupo de 2 cirugías pediátricas más
            demandadas, entre el hospital que se demora menos y el que más demora en resolver
            estos casos."
          />
        </Animation>

        <Animation class="col-lg-4 col-sm-6">
          <Bubble
            text="63.284 casos"
            description="No informan diagnóstico en la lista de espera. Por ejemplo 22.685
            casos informan = “0”, 3.869 casos informan = “1”, mientras otros 1.866 casos dejan
            vacío el espacio que solicita el diagnóstico del paciente."
          />
        </Animation>

        <Animation class="col-lg-4 offset-lg-2 col-sm-6">
          <Bubble
            text="2 años"
            description="Es la brecha promedio para la resolución de un caso de hernioplastia,
            entre el hospital que se demora menos y el que más demora en resolver estos casos."
          />
        </Animation>

        <Animation class="col-lg-4 offset-lg-0 col-sm-6 offset-sm-3">
          <Bubble
            text="90%"
            description="hasta el 90% de los casos en la lista de espera (Circuncisiones,
            hernioplastias, colecistectomías, safenectomias, resección de pterigion etc.) pudo
            haber sido atendido en forma ambulatoria, por lo tanto sin la necesidad de
            hospitalización."
          />
        </Animation>
      </div>
    </div>

    <div class="section" id="top10noGES">
      <div class="title">
        Top 10 demanda por atención de especialidad no GES
      </div>

      <BarChart
        :data="top10noGES"

        category="enfermedad"
        value="casos"

        :min="0"

        valueTitle="atenciones"
        valueFormat="#.#a"
        :tooltipText="`{enfermedad}:
                      [bold]{casos}[/] atenciones`"

        :horizontal="true"
      />

      <div class="description">
        Corresponde a la estimación de la demanda y no quirúrgicas de la lista de espera no ges por
        especialidad, para el periodo 2014-2017.
      </div>
    </div>

    <div class="section" id="top10noGES-Qx">
      <div class="title">
        Top 10 casos no GES quirúrgicos más antendidos
      </div>

      <BarChart
        :data="top10noGESQx"

        category="enfermedad"
        value="casos"

        :min="0"

        valueTitle="atenciones"
        valueFormat="#.#a"
        :tooltipText="`{enfermedad}:
                      [bold]{casos}[/] atenciones`"

        :horizontal="true"
      />
    </div>

    <div class="section" id="oferta-demanda">
      <div class="title">
        Diferencias entre Oferta y Demanda de Quirófanos
      </div>

      <BarChart
        :data="ofertaPor100Especialidad"

        category="especialidad"
        value="ofertaPor100"

        :min="0"
        :max="60"

        valueTitle="horas disponibles por cada 100 horas demandadas"
        valueFormat="#"
        :tooltipText="`{especialidad}: [bold]{ofertaPor100}[/] horas`"

        :horizontal="true"
      />
    </div>

    <div class="section" id="tiempo-espera">
      <div class="title">
        Tiempo de espera en lista no GES (dias)
      </div>

      <ChileChart
        :data="tiempoEsperaRegion"
        heatValue="media"

        :tooltipText="`{name}:
                      [bold]{media.formatNumber('.#')}[/] días de espera en promedio
                      [opacity: 0].[/]
                      mediana según servicio de salud
                      {medianas}`"
        legendFormat="#"
      />

      <div class="description">
        El gráfico muestra los tiempos de espera (promedio de tiempo de espera y mediana) para
        todas las regiones y servicios de salud del país.
      </div>

      <div class="title">
        Detalle región Metropolitana
      </div>

      <div class="row">
        <Heatmap class="col-lg-6"
          :mapGeojson="metropolitanaGeo"
          :data="tiempoEsperaComunasRM"
          heatValue="media"
          :minValue="300"

          :tooltipText="`{nombre}:
                        Servicio de salud {serv}
                        {media} días de espera en promedio.
                        El 50% de los pacientes espera {mediana} dias o más.`"
          legendFormat="#"
          :rotationBreakpoint="1000"
          rotatedHeight="100vw"
        />

        <div class="col-lg-6">
          <div class="description">
            lorem ipsum detalle region metropolitana
          </div>
        </div>
      </div>
    </div>

    <div class="section" id="comorbilidad">
      <div class="title">
        Comorbilidad de la población
      </div>

      <div class="row">
        <div class="col-lg-6">
          <img class="chart-img" src="@/assets/img/comorbilidad.png">
        </div>

        <div class="col-lg-6">
          <div class="description">
            Este gráfico muestra la cantidad de personas en cada lista de espera durante el periodo
            del estudio (2014-2017), los números están expresados en miles de personas. Más de 4
            millones de pacientes se encontraban presentes en ambas listas simultaneamente, lo que
            representa un 36% de los pacientes que estuvieron en lista de espera.
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <div class="title">
        Evolución de los tiempos de espera
      </div>

      <LineChart
        :data="evolucionEspera"

        date="fecha"
        :values="[
          {
            value: 'media',
            tooltip: `[bold]{valueY}[/] días de espera promedio en {fecha.formatDate('MMM-yyyy')}.`
          }, {
            value: 'min',
            name: 'mínimo',
            tooltip: `[bold]{valueY}[/] días de espera mínimo en {fecha.formatDate('MMM-yyyy')}.`
          }, {
            value: 'max',
            name: 'máximo',
            tooltip: `[bold]{valueY}[/] días de espera máximo en {fecha.formatDate('MMM-yyyy')}.`
          },
        ]"

        :min="0"
        :max="700"
        yTitle="días de espera"
      />

      <div class="description">
        lorem ipsum evolucion tiempos de espera
      </div>
    </div>
  </div>
</template>

<script>
import Animation from '@/components/Animation.vue';
import Bubble from '@/components/Bubble.vue';
import BarChart from '@/components/BarChart.vue';
import Heatmap from '@/components/Heatmap.vue';
import ChileChart from '@/components/ChileChart.vue';
import LineChart from '@/components/LineChart.vue';

import metropolitanaGeo from '@/assets/maps/metropolitana';
import {
  tiempoEsperaRegion, ofertaPor100Especialidad, tiempoEsperaComunasRM, top10noGES, top10noGESQx,
  evolucionEspera,
} from '@/assets/data/tiempoEspera';

export default {
  name: 'Tiempos',

  components: {
    Animation,
    Bubble,
    Heatmap,
    ChileChart,
    BarChart,
    LineChart,
  },

  data() {
    return {
      metropolitanaGeo,

      top10noGES,
      top10noGESQx,
      ofertaPor100Especialidad,
      tiempoEsperaRegion,
      tiempoEsperaComunasRM,
      evolucionEspera,
    };
  },
};
</script>
