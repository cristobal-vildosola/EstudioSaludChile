<template>
  <div>
    <h1 class="text-center font-weight-light">
      {{ title }}
    </h1>

    <MapChart class="py-3"
      :mapGeojson="mapGeojson"
      :data="data"

      :minColor="minColor"
      :maxColor="maxColor"
      :minValue="minValue"
      :maxValue="maxValue"

      :hoverColor="hoverColor"
      :tooltipText="tooltipText"

      :height="height"
      :rotationBreakpoint="rotationBreakpoint"
      :rotationDeegres="rotationDeegres"
      :rotatedHeight="rotatedHeight"
    />

    <h5 class="container font-weight-normal">
      {{ description }}
      dolor sit amet, consectetur adipiscing elit. Quisque efficitur sollicitudin tortor, vehicula interdum erat cursus vel. Integer dictum velit leo. In hac habitasse platea dictumst. Aenean tempor odio eget magna pulvinar convallis. Donec eget augue orci. Sed quis feugiat est. Vestibulum hendrerit ultricies elit, eu consequat eros hendrerit sit amet.
    </h5>
  </div>
</template>

<script>
import MapChart from './MapChart'
import * as chileGeojson from '@/assets/maps/chileGeo.json'

function randomData () {
  return [
    { id: 'CL-AI', value: Math.round(Math.random() * 10000) },
    { id: 'CL-AN', value: Math.round(Math.random() * 10000) },
    { id: 'CL-AP', value: Math.round(Math.random() * 10000) },
    { id: 'CL-AR', value: Math.round(Math.random() * 10000) },
    { id: 'CL-AT', value: Math.round(Math.random() * 10000) },
    { id: 'CL-BI', value: Math.round(Math.random() * 10000) },
    { id: 'CL-CO', value: Math.round(Math.random() * 10000) },
    { id: 'CL-LI', value: Math.round(Math.random() * 10000) },
    { id: 'CL-LL', value: Math.round(Math.random() * 10000) },
    { id: 'CL-LR', value: Math.round(Math.random() * 10000) },
    { id: 'CL-MA', value: Math.round(Math.random() * 10000) },
    { id: 'CL-ML', value: Math.round(Math.random() * 10000) },
    { id: 'CL-RM', value: Math.round(Math.random() * 10000) },
    { id: 'CL-TA', value: Math.round(Math.random() * 10000) },
    { id: 'CL-VS', value: Math.round(Math.random() * 10000) }
  ]
}

export default {
  name: 'ChileChart',

  components: { MapChart },

  data () {
    return {
      mapGeojson: chileGeojson
    }
  },

  props: {
    title: { type: String, default: 'Titulo' },
    description: { type: String, default: 'Lorem Ipsum' },
    data: { type: Array, default: randomData },

    minColor: { type: String, default: '#f7fbff' },
    maxColor: { type: String, default: '#a52013' },
    minValue: Number,
    maxValue: Number,

    hoverColor: { type: String, default: '#c91200' },
    tooltipText: { type: String, default: '{name}: {value}' },

    height: { type: String, default: '28vw' },
    rotationBreakpoint: { type: Number, default: 800 },
    rotationDeegres: { type: Number, default: 110 },
    rotatedHeight: { type: String, default: '90vh' }
  }
}
</script>

<style scoped></style>
