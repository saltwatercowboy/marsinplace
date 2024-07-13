<template>
  <div id="scene-container"></div>
</template>

<script>
import { Areograph } from '../mars/Areograph.js';

export default { 

  mounted() {
    // Scene container
    const container = this.$el;

    // Creating new instance of world class
    const areograph = new Areograph(container);

    // Starting world
    areograph.start();

  }
}

</script>

<style scoped>

#scene-container {
  height: 100%;
  width: 100%;
  background-color: black;
}

</style>
