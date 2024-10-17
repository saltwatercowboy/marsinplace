<template>
  <div id="scene-container">
    <div id="loading-window" v-if="!marsLoaded">
      <span><p id="loading-text">Loading assets...</p>
        <div class="loader">
          <div class="loaderBar"></div>
        </div>
        <p id="loading-text">
          <Carousel :autoplay="10000" :wrap-around="false">
              <Slide v-for="fact in loadingFactsBase" :key="fact">
                <div class="fact-item">{{ fact }}</div>
              </Slide>
              <template #addons>
                <Pagination />
              </template>
          </Carousel>
        </p>
      </span>
    </div>
    <div id="overlay-select-wrapper">
      <button @click="handleOverlay()">Toggle region overlay</button>
    </div>
  </div>
</template>

<script>
import { Carousel, Pagination, Slide } from 'vue3-carousel';
import 'vue3-carousel/dist/carousel.css';

import { Areograph } from '../mars/Areograph.js';

export default { 

  components: {
    Carousel,
    Slide,
    Pagination
  },

  data() {
    return {
      marsLoaded: false,
      loadingFactsBase: [
        "It's thought that Althanasius Kircher's Itinerarium Exstaticum (1656) was the first fictional work explicitly set on Mars.",
        "Alexander Bogdanov’s Red Star (1908), a Bolshevik science fiction novel, depicts Mars as a socialist utopia.",
        "In 1952, Werner von Braun published a novel called Project Mars: A Technical Tale. In it, the elected leader of Mars sports the title 'Elon'.",

        "Compasses do not work on Mars; there is no global magnetic field to guide them.",
        "Mars' horizon is only about 3.4 km away - much closer than Earth's 4.6 km.",
        "One day on Mars is exactly 24 hours and 40 minutes long.",
        "Mars has ice caps. The larger northern cap is water ice, while the southern is made of carbon dioxide - otherwise known as dry ice.",
        "Martian temperatures can get up to 20 °C (68 °F) on the equator - but atmospheric pressure is still more than 100 times less dense than on Earth."
      ],

    }
  },

  mounted() {

    this.shuffleFacts(this.loadingFactsBase);

    const container = this.$el;

    this.areograph = new Areograph(container);

    console.log(this.areograph)

    this.areograph.start();

    this.areograph.on('loadingDone', this.handleLoadingMessage);

  },
  
  methods: {

    shuffleFacts(arr) {
      for (let i = arr.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]]; //swap elements
      }
    },

    handleLoadingMessage() {
      this.marsLoaded = false;
      console.log(this.marsLoaded);
   },

    handleOverlay() {
      this.areograph.handleOverlay();
    },

  }

}

</script>

<style scoped>

#scene-container {
  height: 100%;
  width: 100%;
  background-color: black;
}

#loading-window {
	position: fixed;
  display: flex;
	width: 100vw;
	height: 100vh;
	background-color: #FFFFFF;
  color: #000000;
	z-index: 10;
}

#loading-window > span {
  position: relative;
  height: 10%;
  top: 40%;
  margin: 10px auto;
  font-family: 'Univers', sans-serif;
	font-size: 24px;
	font-weight: 300;
  border-radius: 4px;
}

#loading-text {
  color: #000000;
  margin: 0 auto;
  padding: 10px;
}

.loader { 
  width: 100%; 
  height: 7.5px;
  position: relative;
  background-color: #000000;
}
.loader:before {
  content:'';
  background-color: #000000;
  border-radius: 10px;
  position :absolute;
}
.loader .loaderBar { 
  position: absolute;
  background-color: #ff0000;
  top: 0;
  right: 100%;
  bottom: 0;
  left: 0;
  animation: borealisBar 2s linear infinite;
}

#overlay-select-wrapper {
  position: fixed;
  left: 0%;
  bottom: 0%;  
  color: #000000;
  z-index: 2;
}

.carousel-wrapper {
  min-width: 200px;
  max-width: 70%;
  margin: 0 auto;
}

.fact-item {
  font-size: 16px;
  max-width: 200px;
}

@keyframes borealisBar {
  0% {
    left:0%;
    right:100%;
    width:0%;
  }
  10% {
    left:0%;
    right:75%;
    width:25%;
  }
  90% {
    right:0%;
    left:75%;
    width:25%;
  }
  100% {
    left:100%;
    right:0%;
    width:0%;
  }
}

</style>
