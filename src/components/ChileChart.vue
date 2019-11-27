<template>
  <div>
    <Heatmap
      :mapGeojson="mapGeojson"
      :data="data"

      :minColor="minColor"
      :midColor="midColor"
      :maxColor="maxColor"

      :minValue="minValue"
      :maxValue="maxValue"

      :hoverColor="hoverColor"
      :tooltipText="tooltipText"
      :legendFormat="legendFormat"

      :height="height"
      :rotationBreakpoint="rotationBreakpoint"
      :rotationDeegres="rotationDeegres"
      :rotatedHeight="rotatedHeight"
    />
  </div>
</template>

<script>
import Heatmap from './Heatmap.vue';
import chileGeo from '@/assets/maps/chileGeo';

function randomData() {
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
    { id: 'CL-VS', value: Math.round(Math.random() * 10000) },
  ];
}

export default {
  name: 'ChileHeatmap',

  components: { Heatmap },

  data() {
    return {
      mapGeojson: chileGeo,
    };
  },

  props: {
    data: { type: Array, default: randomData },

    minColor: { type: String },
    midColor: { type: String },
    maxColor: { type: String },
    minValue: { type: Number },
    maxValue: { type: Number },

    hoverColor: { type: String },
    tooltipText: { type: String, default: '{name}: {value}' },
    legendFormat: { type: String, default: '#.0a' },

    height: { type: String, default: '28vw' },
    rotationBreakpoint: { type: Number, default: 800 },
    rotationDeegres: { type: Number, default: 110 },
    rotatedHeight: { type: String, default: '90vh' },
  },
};
</script>

<style scoped></style>
