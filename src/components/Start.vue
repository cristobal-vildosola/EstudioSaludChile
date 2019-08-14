<template>
  <div>
    <h1 class="text-center">La Salud en Chile</h1>

    <div class="row">
      <div class="col-12">
        <mapchart/>
      </div>
    </div>
  </div>
</template>

<script>
import mapchart from '../charts/MapChart'

export default {
  name: 'Start',
  components: {
    mapchart
  }
}
</script>

<style scoped></style>
