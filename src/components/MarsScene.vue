<template>
  <div id="scene-container">
    <div id="loading-window" v-if="!marsLoaded">
      <span><p id="loading-text">Loading assets...</p>
        <div class="loader">
          <div class="loaderBar"></div>
        </div>
      </span>
    </div>
  </div>
</template>

<script>
import { Areograph } from '../mars/Areograph.js';

export default { 

  data() {
    return {
      marsLoaded: false,
    }
  },

  mounted() {

    const container = this.$el;

    const areograph = new Areograph(container);

    console.log(areograph)

    areograph.start();

    areograph.on('loadingDone', this.handleLoadingMessage);

  },
  
  methods: {

    handleLoadingMessage( ) {
      this.marsLoaded = true;
      console.log(this.marsLoaded);
    }

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
  margin: 0 auto;
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
  width:100%; 
  height: 7.5px;
  position:relative;
  background-color: #000000;
}
.loader:before {
  content:'';
  background-color: #000000;
  border-radius:10px;
  position:absolute;
}
.loader .loaderBar { 
  position:absolute;
  background-color: #ff0000;
  top:0;
  right:100%;
  bottom:0;
  left:0;
  animation:borealisBar 2s linear infinite;
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
