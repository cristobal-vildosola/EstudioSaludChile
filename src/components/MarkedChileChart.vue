<template>
  <div>
    <MarkedMap
      :mapGeojson="chileGeo"
      :markData="markData"

      :markColor="markColor"
      :markRadius="markRadius"

      :remarkThreshold="remarkThreshold"
      :remarkValue="remarkValue"
      :remarkValueName="remarkValueName"
      :remarkColor="remarkColor"
      :remarkRadius="remarkRadius"

      :tooltipText="tooltipText"

      :fillColor="fillColor"

      :heatData="heatData"
      :heatValue="heatValue"
      :heatTooltipText="heatTooltipText"
      :minColor="minColor"
      :midColor="midColor"
      :maxColor="maxColor"

      :minValue="minValue"
      :maxValue="maxValue"

      :height="height"
      :rotationBreakpoint="rotationBreakpoint"
      :rotationDeegres="rotationDeegres"
      :rotatedHeight="rotatedHeight"
    />
  </div>
</template>

<script>
import MarkedMap from './MarkedMap.vue';
import chileGeo from '@/assets/maps/chile';

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

  components: { MarkedMap },

  data() {
    return {
      chileGeo,
    };
  },

  props: {
    markData: { type: Array, default: randomData },

    markColor: { type: String },
    markRadius: { type: Number },

    remarkThreshold: { type: Number },
    remarkValue: { type: String },
    remarkValueName: { type: String },
    remarkColor: { type: String },
    remarkRadius: { type: Number },

    tooltipText: { type: String },

    fillColor: { type: String },

    heatData: { type: Array },
    heatValue: { type: String },
    heatTooltipText: { type: String },
    minColor: { type: String },
    midColor: { type: String },
    maxColor: { type: String },

    minValue: { type: Number },
    maxValue: { type: Number },

    legendFormat: { type: String },

    height: { type: String, default: '28vw' },
    rotationBreakpoint: { type: Number, default: 800 },
    rotationDeegres: { type: Number, default: 110 },
    rotatedHeight: { type: String, default: '90vh' },
  },
};
</script>

<style scoped></style>
