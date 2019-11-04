<template>
  <div>
    <MarkedMapChart
      :mapGeojson="mapGeojson"
      :data="data"

      :tooltipText="tooltipText"

      :fillColor="fillColor"

      :markColor="markColor"
      :markRadius="markRadius"

      :remarkThreshold="remarkThreshold"
      :remarkValue="remarkValue"
      :remarkValueName="remarkValueName"
      :remarkColor="remarkColor"
      :remarkRadius="remarkRadius"

      :height="height"
      :rotationBreakpoint="rotationBreakpoint"
      :rotationDeegres="rotationDeegres"
      :rotatedHeight="rotatedHeight"
    />
  </div>
</template>

<script>
import MarkedMapChart from './MarkedMapChart.vue';
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
  name: 'ChileChart',

  components: { MarkedMapChart },

  data() {
    return {
      mapGeojson: chileGeo,
    };
  },

  props: {
    data: { type: Array, default: randomData },
    tooltipText: { type: String, default: '{name}: {value}' },

    fillColor: { type: String },
    markColor: { type: String },
    markRadius: { type: Number },

    remarkThreshold: { type: Number },
    remarkValue: { type: String },
    remarkValueName: { type: String },
    remarkColor: { type: String },
    remarkRadius: { type: Number },

    height: { type: String, default: '28vw' },
    rotationBreakpoint: { type: Number, default: 800 },
    rotationDeegres: { type: Number, default: 110 },
    rotatedHeight: { type: String, default: '90vh' },
  },
};
</script>

<style scoped></style>
