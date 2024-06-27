<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MarsScene from './components/MarsScene.vue'

</script>

<template>
	<header>
		<link href="https://fonts.cdnfonts.com/css/overpass" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Nunito" rel="stylesheet">
		<link href="https://fonts.cdnfonts.com/css/univers" rel="stylesheet">
	</header>
	<div id="body">
		<Transition :duration="550" name="nested">
			<div id="show-top-bar-hidden" v-if="!navBar">
				<svg cursor='pointer' @click="handleNavBar('show')" fill="rgba(255, 255, 255, 0.9)" height="100px" width="100px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-168.3 -168.3 666.60 666.60" xml:space="preserve" stroke="#ffffff" transform="rotate(180)matrix(1, 0, 0, 1, 0, 0)" stroke-width="14.52"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(130.35,130.35), scale(0.21)"><path transform="translate(-168.3, -168.3), scale(41.6625)" fill="#ff0004" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
			</div>
		</Transition>
		<Transition :duration="550" name="nested"> 
			<div id="top-bar" v-if="navBar">
				<div id="logo">
					<div id="logo-mars-bg">
						<span id="logo-former">MARS</span>
					</div>
					<span id="logo-latter">is a <u>place</u></span>
				</div>
				<div id="top-bar-items">
					<div @click="handleModals('guide')" id="bar-guide">
						<span>guide</span>
					</div>
					<div @click="handleModals('about')" id="bar-about">
						<span>about</span>
					</div>
					<div @click="handleModals('suggest')" id="bar-suggest">
						<span>suggest pin</span>
					</div>
					<div id="show-top" v-if="navBar" @click="handleNavBar('hide'); handleModals()">
						<svg cursor='pointer' fill="rgba(255, 255, 255, 1)" height="100px" width="100px" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-168.3 -168.3 666.60 666.60" xml:space="preserve" stroke="#ffffff" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke-width="14.52"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(130.35,130.35), scale(0.21)"><path transform="translate(-168.3, -168.3), scale(41.6625)" fill="#ff0004" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
						<span>hide menu</span>
					</div>
				</div>
				<div id="bar-buffer"></div>
			</div>
		</Transition>
		<Transition :duration="550" name="nested">
			<div id="guide-container" v-if="guide">
				<div id="guide-container-items">
					<div @click="handleGuideTabs('what')" class="container-item">
						<span>what is this?</span>
					</div>
					<div @click="handleGuideTabs('how')" class="container-item">
						<span>how it works	</span>
					</div>
					<div @click="handleGuideTabs('questions')" class="container-item">
						<span>FAQ</span>
					</div>
				</div>
				<div class="container-under" v-if="guideWhat">
					<span>
					WHAT WHAT WHAT Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
					</span>
				</div>
				<div class="container-under" v-if="guideHow">
					<span>
					HOW HOW HOW Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
					</span>
				</div>
				<div class="container-under" v-if="guideFAQ">
					<span>
					QUESTIONS QUESTIONS QUESTIONS Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
					</span>
				</div>
			</div>
		</Transition>
		<Transition :duration="550" name="nested">
			<div id="about-container" v-if="about">
				<div class="container-under">
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
					</span>
				</div>
			</div>
		</Transition>
		<Transition :duration="550" name="nested">
			<div id="suggest-container" v-if="suggest">
				<div class="container-under">
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
					</span>
				</div>
			</div>
		</Transition>

		<Transition :duration="550" name="nested">
			<div id="about-container" v-if="tabShown == 'what'">
				<div class="container-under">
					<span>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa nihil dolore similique quis qui ad blanditiis ex eum! Enim maiores ipsam fugiat officiis earum distinctio natus reprehenderit aliquam est iusto!
					</span>
				</div>
			</div>
		</Transition>


		<MarsScene @click="handleModals()" />
	</div>
</template>

<script>

export default {

	data() {
		return {
			navBar: true,
			guide: false,
			about: false,
			suggest: false,
			tabShown: null,	
			guideWhat: true,
			guideHow: false,
			guideFAQ: false,

		}
	},

	methods: {

		handleNavBar(state) {
			switch(state) {
				case 'show':
					this.navBar = true;
					break;
				case 'hide':
					this.navBar = false;
					break;
				default:
					break
			}
		},

		//find a better way to do this when you have a working brainstem (!how)
		handleModals(modalName) {
			switch(modalName) {
				case 'guide':
					this.about = false;
					this.suggest = false;
					this.guide = true;
					
					document.documentElement.style.setProperty('--guide-background-color', 'rgba(255, 0, 0, 0.7');
					document.documentElement.style.setProperty("--guide-font-weight", 100);
					document.documentElement.style.setProperty("--guide-font-size", '17px');

					document.documentElement.style.setProperty('--about-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--about-font-weight", 400);
					document.documentElement.style.setProperty("--about-font-size", '18px');

					document.documentElement.style.setProperty('--suggest-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--suggest-font-weight", 400);
					document.documentElement.style.setProperty("--suggest-font-size", '18px');

					break
				case 'about':
					this.guide = false;
					this.suggest = false;
					this.about = true;

					document.documentElement.style.setProperty('--about-background-color', 'rgba(255, 0, 0, 0.7');
					document.documentElement.style.setProperty("--about-font-weight", 100);
					document.documentElement.style.setProperty("--about-font-size", '17px');

					document.documentElement.style.setProperty('--guide-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--guide-font-weight", 400);
					document.documentElement.style.setProperty("--guide-font-size", '18px');

					document.documentElement.style.setProperty('--suggest-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--suggest-font-weight", 400);
					document.documentElement.style.setProperty("--suggest-font-size", '18px');
					break
				case 'suggest':
					this.guide = false;
					this.about = false;
					this.suggest = true;

					document.documentElement.style.setProperty('--suggest-background-color', 'rgba(255, 0, 0, 0.7');
					document.documentElement.style.setProperty("--suggest-font-weight", 100);
					document.documentElement.style.setProperty("--suggest-font-size", '17px');

					document.documentElement.style.setProperty('--guide-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--guide-font-weight", 400);
					document.documentElement.style.setProperty("--guide-font-size", '18px');

					document.documentElement.style.setProperty('--about-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--about-font-weight", 400);
					document.documentElement.style.setProperty("--about-font-size", '18px');
					break
				default:
					this.guide = false;
					this.about = false;
					this.suggest = false;

					document.documentElement.style.setProperty('--guide-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--guide-font-weight", 400);
					document.documentElement.style.setProperty("--guide-font-size", '18px');

					document.documentElement.style.setProperty('--about-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--about-font-weight", 400);
					document.documentElement.style.setProperty("--about-font-size", '18px');

					document.documentElement.style.setProperty('--suggest-background-color', 'rgba(255, 255, 255, 0.2');
					document.documentElement.style.setProperty("--suggest-font-weight", 400);
					document.documentElement.style.setProperty("--suggest-font-size", '18px');
					break
			}
		},

		handleGuideTabs(tabName) {
			switch(tabName) {
				case 'what':
					this.guideHow = false;
					this.guideFAQ = false;
					this.guideWhat = true;
					
					document.documentElement.style.setProperty('--guideWhat-background-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty("--guideWhat-font-weight", 100);
					document.documentElement.style.setProperty("--guideWhat-font-size", '17px');
					document.documentElement.style.setProperty("--guideWhat-outline", '1px solid rgba(255, 255, 255, 0.8)');

					document.documentElement.style.setProperty('--guideHow-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty("--guideHow-font-weight", 400);
					document.documentElement.style.setProperty("--guideHow-font-size", '18px');
					document.documentElement.style.setProperty("--guideHow-outline", '0px solid rgba(255, 255, 255, 0.8)');

					document.documentElement.style.setProperty('--guideFAQ-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty("--guideFAQ-font-weight", 400);
					document.documentElement.style.setProperty("--guideFAQ-font-size", '18px');
					document.documentElement.style.setProperty("--guideFAQ-outline", '0px solid rgba(255, 255, 255, 0.8)');
					break
				case 'how':
					this.guideWhat = false;
					this.guideFAQ = false;
					this.guideHow = true;
					
					document.documentElement.style.setProperty('--guideHow-background-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty("--guideHow-font-weight", 100);
					document.documentElement.style.setProperty("--guideHow-font-size", '17px');
					document.documentElement.style.setProperty("--guideHow-outline", '1px solid rgba(255, 255, 255, 0.8)');

					document.documentElement.style.setProperty('--guideWhat-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty("--guideWhat-font-weight", 400);
					document.documentElement.style.setProperty("--guideWhat-font-size", '18px');
					document.documentElement.style.setProperty("--guideWhat-outline", '0px solid rgba(255, 255, 255, 0.8)');

					document.documentElement.style.setProperty('--guideFAQ-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty("--guideFAQ-font-weight", 400);
					document.documentElement.style.setProperty("--guideFAQ-font-size", '18px');
					document.documentElement.style.setProperty("--guideFAQ-outline", '0px solid rgba(255, 255, 255, 0.8)');
					break
				case 'questions':
					this.guideWhat = false;
					this.guideHow = false;
					this.guideFAQ = true;

					document.documentElement.style.setProperty('--guideFAQ-background-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty("--guideFAQ-font-weight", 100);
					document.documentElement.style.setProperty("--guideFAQ-font-size", '17px');
					document.documentElement.style.setProperty("--guideFAQ-outline", '1px solid rgba(255, 255, 255, 0.8)');

					document.documentElement.style.setProperty('--guideWhat-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty("--guideWhat-font-weight", 400);
					document.documentElement.style.setProperty("--guideWhat-font-size", '18px');
					document.documentElement.style.setProperty("--guideWhat-outline", '0px solid rgba(255, 255, 255, 0.8)');

					document.documentElement.style.setProperty('--guideHow-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty("--guideHow-font-weight", 400);
					document.documentElement.style.setProperty("--guideHow-font-size", '18px');
					document.documentElement.style.setProperty("--guideHow-outline", '0px solid rgba(255, 255, 255, 0.8)')
					break
			}
		},
	}
}

</script>

<style>

:root {
	--guide-background-color: rgba(255, 255, 255, 0.2);
	--guide-font-weight: 400;
	--guide-font-size: 18px;

	--about-background-color: rgba(255, 255, 255, 0.2);
	--about-font-weight: 400;
	--about-font-size: 18px;

	--suggest-background-color: rgba(255, 255, 255, 0.2);
	--suggest-font-weight: 400;
	--suggest-font-size: 18px;

	--guideWhat-background-color: rgba(255, 255, 255, 1);
	--guideWhat-font-weight: 100;
	--guideWhat-font-size: 17px;
	--guideWhat-outline: 1px solid rgba(255, 255, 255, 0.8);

	--guideHow-background-color: rgba(255, 255, 255, 0.8);
	--guideHow-font-weight: 500;
	--guideHow-font-size: 18px;
	--guideHow-outline: 0px solid rgba(255, 255, 255, 0.8);

	--guideFAQ-background-color: rgba(255, 255, 255, 0.8);
	--guideFAQ-font-weight: 500;
	--guideFAQ-font-size: 18px;
	--guideFAQ-outline: 0px solid rgba(255, 255, 255, 0.8);


}

#app {
	margin: 0;
}

#body{
	position: fixed;
	width: 100vw;
	height: 100%;
	background-color: black;
}

#show-top {
	position: relative;
	margin: 0;
	height: 5%;
	width: 50%;
	min-width: 140px;
	border-bottom: 1px solid rgba(255, 255, 255, 0.8);
	border-right: 1px solid rgba(255, 255, 255, 0.8);
	border-bottom-right-radius: 24px;	
	transition: all .25s ease-out;
	background-color: var(--suggest-background-color);
	color: rgb(255, 255, 255, 0);
	font-family: 'Univers', sans-serif;
	font-size: 12px;
	font-weight: 100;
	padding-top: 5px;
	box-sizing: content-box;
	cursor: pointer;
}

#show-top svg {
	position: relative;
	display: block;
	margin-top: 0;
	align-items: center;
	height: 300%;
	width: 100%;
	transition: all 1.5s ease;
	overflow: visible;
	padding-top: 5px;
}

#show-top:hover {
	position: relative;
	display: inline-flex;
	margin: 0;
	align-items: center;
	transform: translate(0px, -7px);
	color: rgb(255, 255, 255, 0.8);
	background-color: rgba(255, 0, 0, 0.9);
	outline: 1px solid rgb(255, 255, 255);
	min-width: 280px;
}

#show-top:hover svg {
	padding-left: 100px;
}

#show-top span {
	position: relative;
	display: inline-flexbox;
	width: 100%;
	color: rgb(0, 0, 0);
	text-align: center;
}

#show-top:hover span {
	color: rgba(255, 255, 255, 0.8);
}

body:has(#bar-suggest:hover) #show-top {
	background-color: rgba(255, 0, 0, 0.7);
}

#show-top-bar-hidden {
	transform: rotate(180deg);
	position: absolute;
	display: block;
	margin: 0;
	margin-top: 30px;
	min-height: 50px;
	min-width: 140px;
	overflow: visible;
}

#show-top-bar-hidden svg {
	position: absolute;
	display: block;
	margin: 0;
	align-items: center;
	width: 100%;
}

#show-top-bar-hidden svg:hover {
	position: absolute;
	display: block;
	margin: 0;
	align-items: center;
	width: 100%;
	transform: translateY(-10px);
	transition: .25s ease-out;
}

#top-bar { 
	position: fixed;
	display: inline-flexbox;
	z-index: 1;
	height: 100vh;
	width: 20vw;
	min-width: 280px;
	overflow: hidden;
	border-top: 4px solid rgba(255, 255, 255, 1);
}

#logo {
	position: relative;
	display: flex;
	align-items: center;
	background-color: rgba(0, 150, 101, 1);
	padding-bottom: 5px;
	padding-right: 5px;
	height: 50px;
	min-width: 280px;
	min-height: 50px;
	cursor: default;
	user-select: none;
	border-right: 1px solid rgba(58, 58, 58, 0.8);
	border-bottom-right-radius: 10px;
	overflow: visible;
}

#logo-former {
	position: relative;
	margin-left: 10px;
	color: rgba(255, 255, 255, 1);
	font-family: 'Overpass', sans-serif;
	font-size: 3em;
	width: 80%;
	height: 100%;
	min-width: 80%;
}

#logo-latter {
	margin: auto;
	margin-left: 5px;
	margin-top: 0;
	color: rgba(255, 255, 255, 1);
	background-color: rgba(0, 150, 101, 1);
	font-family: 'Overpass', sans-serif;
	font-weight: 300;
	font-size: 1.6em;
	line-height: 100%;
}

#bar-buffer {
	position: relative;
	width: 40%;
}

#top-bar-items {
	position: relative;
	display: inline-block;
	height: 75%;
	width: 100%;
}

#bar-guide {
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: 75px;
	width: 50%;
	color: rgba(255, 255, 255, 1);
	background-color: var(--guide-background-color);
	font-weight: var(--guide-font-weight);
	font-size: var(--guide-font-size);
	font-family: 'Univers', sans-serif;
	border-bottom: 1px solid rgba(255, 255, 255, 0.75);
	border-right: 1px solid rgba(255, 255, 255, 0.75);
	transition: .25s ease-out;
}

#bar-about {
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: 75px;
	width: 50%;
	color: rgba(255, 255, 255, 1);
	background-color: var(--about-background-color);
	font-weight: var(--about-font-weight);
	font-size: var(--about-font-size);	
	font-family: 'Univers', sans-serif;
	border-right: 1px solid rgba(255, 255, 255, 0.75);
	transition: .25s ease-out;
}

#bar-suggest {
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	height: 50%;
	min-height: 50px;
	width: 50%;
	color: rgba(255, 255, 255, 1);
	background-color: var(--suggest-background-color);
	font-weight: var(--suggest-font-weight);
	font-size: var(--suggest-font-size);	
	font-family: 'Univers', sans-serif;
	border-top: 1px solid rgba(255, 255, 255, 0.8);
	border-right: 1px solid rgba(255, 255, 255, 0.8);
	transition: .25s ease-out;

}

#bar-actions {
	position: relative;
	display: flex;
	align-items: right;
	height: 100%;
	width: 33.3%;
	color: rgba(255, 255, 255, 0.8);
	background-color: rgba(255, 255, 255, 0.2);
	font-family: 'Univers', sans-serif;
	font-size: 18px;
}

#bar-guide span {
	margin: auto;
}

#bar-guide:hover {
	background-color: rgba(255, 0, 0, 0.7);
	color: rgba(255, 255, 255, 1);
	font-size: 17px;
	font-weight: 100;
	letter-spacing: .05rem;
}

#bar-about span {
	margin: auto;
}

#bar-about:hover {
	background-color: rgba(255, 0, 0, 0.70);
	color: rgba(255, 255, 255, 1);
	font-size: 17px;
	font-weight: 100;
	letter-spacing: .05rem;
}

#bar-suggest span {
	margin: auto;
}

#bar-suggest:hover {
	background-color: rgba(255, 0, 0, 0.70);
	color: rgba(255, 255, 255, 1);
	font-size: 17px;
	font-weight: 100;
	letter-spacing: .05rem;
}

#guide-container {
	position: absolute;
	display: flex;
	top: 7.5%;
	right: 0%;
	width: 50%;
	min-width: 300px;
	height: 90vh;
	min-height: 90%;
	border-radius: 8px;
	z-index: 3;
}

#guide-container-items {
	position: relative;
	display: inline-block;
	width: 75px;
}

.container-item {
	position: relative;
	display: flex;
	align-items: end;
	margin-top: 4px;
	cursor: pointer;
	min-height: 75px;
	width: 100%;
	min-width: 30px;
	color: rgba(0, 0, 0, 1);
	font-size: 18px;
	font-family: 'Univers', sans-serif;
	border-bottom: 1px solid rgba(255, 255, 255, 0.75);
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	text-shadow: 1px 0 0 #ffffff, 0 -1px 0 #ffffff, 0 1px 0 #ffffff, -1px 0 0 #ffffff;
}

.container-item:hover {
	color: rgba(255, 255, 255);
	border-bottom: 5px solid rgba(255, 0, 0, 0.75);
	text-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;
}

.container-item span {
	position: relative;
	display: flex;
	margin-left: 4px;
	width: 90%;
	height: 100%;
}

.container-item:nth-child(1) {
	background-color: var(--guideWhat-background-color);
	font-weight: var(--guideWhat-font-weight);
	font-size: var(--guideWhat-font-size); 
	outline: var(--guideWhat-outline);
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.container-item:nth-child(2) {
	background-color: var(--guideHow-background-color);
	font-weight: var(--guideHow-font-weight);
	font-size: var(--guideHow-font-size); 
	outline: var(--guideHow-outline);
	border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.container-item:nth-child(3) {
	background-color: var(--guideFAQ-background-color);
	font-weight: var(--guideFAQ-font-weight);
	font-size: var(--guideFAQ-font-size); 
	outline: var(--guideFAQ-outline);
	border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.container-under {
	position: relative;
	display: flex;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 1);
	z-index: 3;
	font-family: 'Nunito', sans-serif;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
}

.container-under span {
	position: relative;
	width: 90%;
	margin: 0 auto;
	margin-top: 10px;
	color: #343837;
	z-index: 3;
}

#about-container {
	position: absolute;
	display: flex;
	top: 7.5%;
	right: 0%;
	width: 50%;
	min-width: 300px;
	height: 90vh;
	min-height: 90%;
	border-radius: 8px;
	z-index: 3;
}

#about-under {
	position: relative;
	width: 100%;
	height: 100%;
	background-color: rgba(255, 255, 255, 1);
	z-index: 3;
	font-family: 'Nunito', sans-serif;
	border: 1px solid rgba(0, 0, 0, 0.5);
	border-radius: 8px;
}

#about-under span {
	position: relative;
	color: rgb(255, 255, 255);
	background-color: rgba(238, 238, 238, 1);
	z-index: 3;
	font-family: 'Nunito', sans-serif;
}

#suggest-container {
	position: absolute;
	top: 7.5%;
	left: 50%;
	width: 50%;
	min-width: 500px;
	height: 90vh;
	min-height: 90%;
	z-index: 3;
	border-radius: 8px;
	box-shadow: 0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.24);
}

canvas {
	font-family: Arial, sans-serif;
	font-size: 20px;
	color: black;
}

.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}
/* delay leave of parent element */
.nested-leave-active {
  transition-delay: 0s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

/* we can also transition nested elements using nested selectors */
.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}
/* delay enter of nested element */
.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  /*
  	Hack around a Chrome 96 bug in handling nested opacity transitions.
    This is not needed in other browsers or Chrome 99+ where the bug
    has been fixed.
  */
  opacity: 0.001;
}

</style>