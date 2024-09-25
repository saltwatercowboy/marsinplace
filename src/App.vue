<script setup>
import { RouterLink, RouterView } from 'vue-router'
import MarsScene from './components/MarsScene.vue'
</script>

<template>
	<header>
		<link href="https://fonts.cdnfonts.com/css/overpass" rel="stylesheet">
		<link href="https://fonts.googleapis.com/css2?family=Nunito" rel="stylesheet" type="text/css">
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
				<div id="bar-buffer"></div>
				<div id="top-bar-items">
					<div @click="handleModals('guide')" id="bar-guide">
						<span>about</span>
					</div>
					<div @click="handleModals('about')" id="bar-about">
						<span>filters</span>
					</div>
					<div @click="handleModals('suggest')" id="bar-suggest">
						<span>suggest pin</span>
					</div>
					<div id="show-top" v-if="navBar" @click="handleNavBar('hide'); handleModals()">
						<svg cursor='pointer' fill="rgba(255, 255, 255, 1)" height="100px" width="100px" version="1.1" id="Layer_2" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="-168.3 -168.3 666.60 666.60" xml:space="preserve" stroke="#ffffff" transform="rotate(0)matrix(1, 0, 0, 1, 0, 0)" stroke-width="14.52"><g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(130.35,130.35), scale(0.21)"><path transform="translate(-168.3, -168.3), scale(41.6625)" fill="#ff0004" d="M9.166.33a2.25 2.25 0 00-2.332 0l-5.25 3.182A2.25 2.25 0 00.5 5.436v5.128a2.25 2.25 0 001.084 1.924l5.25 3.182a2.25 2.25 0 002.332 0l5.25-3.182a2.25 2.25 0 001.084-1.924V5.436a2.25 2.25 0 00-1.084-1.924L9.166.33z" strokewidth="0"></path></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.66"></g><g id="SVGRepo_iconCarrier"> <path id="XMLID_224_" d="M325.606,229.393l-150.004-150C172.79,76.58,168.974,75,164.996,75c-3.979,0-7.794,1.581-10.607,4.394 l-149.996,150c-5.858,5.858-5.858,15.355,0,21.213c5.857,5.857,15.355,5.858,21.213,0l139.39-139.393l139.397,139.393 C307.322,253.536,311.161,255,315,255c3.839,0,7.678-1.464,10.607-4.394C331.464,244.748,331.464,235.251,325.606,229.393z"></path> </g></svg>
						<span>hide menu</span>
					</div>
				</div>
			</div>
		</Transition>
		<Transition :duration="550" name="nested">
			<div id="guide-container" v-if="guide">
				<div id="guide-container-items">
					<div @click="handleModals()" class="container-close">
						<span>close</span>
					</div>
					<div @click="handleGuideTabs('how')" class="container-item">
						<span>how it works</span>
					</div>
					<div @click="handleGuideTabs('what')" class="container-item">
						<span>what is this?</span>
					</div>
					<div @click="handleGuideTabs('questions')" class="container-item">
						<span>FAQ</span>
					</div>
				</div>
				<div class="container-under" v-if="guideWhat">
					<div class="guide-choice" v-if="!chosenRead">
						<span class="guide-choice-text">
							<p>Concept</p>
						</span>
						<div class="toggle-content">
							<span class="what-text">
								<br>
								<p>Over the past 70 years, researchers have clarified our image of Mars into a sparse, cold, and unforgiving place. We're extremely lucky to see it. Our sense of Mars is more concrete now than at any time before.
								<br><br>
								The more we know, the more we might learn about our own planet, the origins of our solar system, and maybe even the prerequisites and potentiates for life. It's a neighbourhood mystery - and our understanding has only recently begun to reflect Mars as it really is.
								<br><br>
								But each discovery also moves us away from the fantastical stories we made up when we knew less - and there is no history for it but in our stories. Mars has no nations, tombs, monuments, wars, legends, or triumphs. It's a blank slate without us.
								<br><br>
								<i>Mars is a Place</i> explores projections of Mars by cataloguing, explaining, and mapping them. Some are old and some are new. Some are contemporaneous to the telling, while others explore our relationship far into the future. Each reveals a part of a long-standing tradition.</p>
							</span>
						</div>
						<span class="guide-choice-text">
							<p>Art</p>
						</span>
						<div class="toggle-content">
							<span class="what-text">
								<br>
								TBD
							</span>
						</div>
					</div>
				</div>
				<div class="container-under-how" v-if="guideHow">
					<div class="how-choice">
						<span class="how-choice-text">
							Map
						</span>
						<div class="toggle-content-how">
							<span class="how-text">
								<p>Slide the camera plane vertically or horizontally by holding down right click and dragging with left</p>
								<p>Use your mousewheel or trackpad to scroll in and out (as you would on Google Earth)</p>

							</span>
						</div>
					</div>
					<div class="how-video">
						<video class="toggle-content-how-video" loop autoplay>
							<source src="/video/scrollWeb.webm" type="video/webm">
						</video>
					</div>
					<div class="how-choice">
						<span class="how-choice-text">
							Pins
						</span>
						<div class="toggle-content-how">
							<span class="how-text">
								<p>Click on a pin to see information for an entry - these correspond to individual locations in fiction, film, TV, etc.</p>
								<p>To remove the entry popup, click outside of it or move your camera</p>
							</span>
						</div>
					</div>
					<div class="how-video">
						<video class="toggle-content-how-video" loop autoplay>
							<source src="/video/clickWeb.webm" type="video/webm">
						</video>
					</div>
					<div class="how-choice">
						<span class="how-choice-text">
							Overlay
						</span>
						<div class="toggle-content-how">
							<span class="how-text">
								<p>Toggle the overlay on and off by clicking the button in the bottom left</p>
								<p>Areas of the overlay correspond to the real regions on Mars' surface</p>
							</span>
						</div>
					</div>
					<div class="how-choice">
						<span class="how-choice-text">
							Filtering
						</span>
						<div class="toggle-content-how">
							<span class="how-text">
								<p>The left-hand 'filters' tab contains options for sorting the entries by date, medium, and scope</p>
								<p>(TBC)</p>
							</span>
						</div>
					</div>
					<div class="how-choice">
						<div class="toggle-content-how-video">
							
						</div>
					</div>
				</div>
				<div class="container-under-FAQ" v-if="guideFAQ">
					<div class="FAQ-choice">
						<span class="FAQ-choice-text">
							<p>Mars</p>
						</span>
						<div class="toggle-content-FAQ">
							<span class="FAQ-subheading">
								<p>Is the scene to scale?</p>
							</span>
							<span class="FAQ-text">
								Deimos and Phobos aren't to scale, but Mars' surface is - some unmapped gaps in the terrain were filled with generated textures.<br>
							</span>
							<span class="FAQ-subheading">
								<p>How accurate is Mars' surface?</p>
							</span>
							<span class="FAQ-text">
								Mars is depicted in the middle of its northern summer. The planet has a polar tilt of 25&deg;, similar to Earth's 23.5&deg;, which is part of the reason it experiences seasons as well as polar nights/summers.
							</span>
						</div>
					</div>
					<div class="FAQ-choice">
						<span class="FAQ-choice-text">
							<p>Attribution</p>
						</span>
						<div class="toggle-content-FAQ">
							<span class="FAQ-subheading">
								<p>Where is the background from?</p>
							</span>
							<span class="FAQ-text">
								The starfield is a cubemap built from one of NASA's <a class="link-highlight" href="https://svs.gsfc.nasa.gov/4851/">Deep Star Maps</a>, itself assembled from a few different star catalogs.
							</span>
							<span class="FAQ-subheading">
								<p>Mars?</p>
							</span>
							<span class="FAQ-text">
								Mars' texture was created from NASA surface imagery (and released for free!) by the team at <a class="link-highlight" href="https://www.solarsystemscope.com/textures/">Solar System Scope</a>. I turned this into another cubemap and projected it onto a quadrilateralized spherical cube (quad sphere). I also generated my displacement, ambient occlusion, and normal maps from it.
							</span>
							<span class="FAQ-subheading">
								<p>Phobos & Deimos?</p>
							</span>
							<span class="FAQ-text">
								The Deimos and Phobos models were proposed and created by Ernst, Daly, and Gaskell et al. in their extremely helpful <a class="link-highlight" href="https://earth-planets-space.springeropen.com/articles/10.1186/s40623-023-01814-7">2023 paper</a> - you can download the models directly from their Small Body Mapping Tool/SBMT site <a class="link-highlight" href="https://sbmt.jhuapl.edu/Object-Index.php">here</a> (.OBJ with 4 spatial resolution options).
							</span>
							<span class="FAQ-subheading">
								<p>Region overlay?</p>
							</span>
							<span class="FAQ-text">
								The region overlay is adapted (with permission) from a <a class="link-highlight" href="https://www.deviantart.com/etohautakuva/art/Mars-Geographic-Regions-Map-v0-1-917110370">map by the artist Etohautakuva.</a> They compiled data from the USGS/NASA to create an approximation of Martian regional boundaries as recognised by the International Astronomical Union (IAU).
							</span>
						</div>
					</div>
					<div class="FAQ-choice">
						<span class="FAQ-choice-text">
							<p>Developer</p>
						</span>
						<div class="toggle-content-FAQ">
							<span class="FAQ-subheading">
								<p>Tech stack?</p>
							</span>
							<span class="FAQ-text">
								Three.js for rendering and animating the scene and Vue 3 for the overlay inc. SPA functionality and general reactivity. Pin data are stored in rudimentary arrays of objects for now; this will change to SQLite in future.<br>
							</span>
							<span class="FAQ-subheading">
								<p>I found a bug - what can I do?</p>
							</span>
							<span class="FAQ-text">
								This is a WIP, so feel free to create a new issue or pull request on the repo. You can also contact me at xxx with what happened.
							</span>
						</div>
					</div>
				</div>
			</div>
		</Transition>
		<Transition :duration="550" name="nested">
			<div id="guide-container" v-if="about">
				<div class="container-under">
					<span>TBD
					</span>
				</div>
			</div>
		</Transition>
		<Transition :duration="550" name="nested">
			<div id="suggest-container" v-if="suggest">
				<div id="suggest-container-items">
					<div @click="handleModals()" class="container-close">
						<span>close</span>
					</div>
				</div>
				<div id="container-under-suggest">
					<form id="suggest-form"
						action=""
						method="POST"
						>
						<Transition duration="550" name="email-disclaimer-transition">
							<div id="email-disclaimer" v-if="showEmailDisclaimer">
								<span>I'll only email you if I have question about your idea for a pin. I do not retain addresses and will never spam you.</span>
							</div>
						</Transition>
						<div class="container-input-smaller">
							<label class="suggest-label">Submissions disabled for now.</label><br><br>
							<label class="suggest-label">
								Email <span 
								class="suggest-hint"> optional
									<p class="disclaimer-label"
									@touchstart="showEmailDisclaimer = true"
									@touchend="showEmailDisclaimer = false"
									@mouseover="showEmailDisclaimer = true" 
									@mouseleave="showEmailDisclaimer = false"
									>(why do I ask for this?)</p>
								</span>
								<input disabled
								class="suggest-input-smaller"
								type="email" 
								name="email">
							</label>
						</div>
						<div class="container-input-smaller">
							<label class="suggest-label">
								Submission Name
								<textarea disabled
								class="suggest-input-smaller"
								name="message"></textarea>
							</label>
						</div>
						<div class="container-input-smaller">
							<label class="suggest-label">
								Author
								<textarea disabled
								class="suggest-input-smaller"
								name="message"></textarea>
							</label>
						</div>
						<div class="container-input-smaller">
							<label class="suggest-label">
								Year
								<textarea disabled
								class="suggest-input-smaller"
								name="message"></textarea>
							</label>
						</div>
						<div class="container-input-smaller">
							<label class="suggest-label">
								Fictional Year 
								<p class="suggest-hint">optional, provide if this applies</p>
								<textarea disabled
								class="suggest-input-smaller"
								name="message"></textarea>
							</label>
						</div>
						<div class="container-input-smaller">
							<label class="suggest-label">
								Lat/Lon 
								<p class="suggest-hint">optional, helpful if you have them</p>
								<textarea disabled
								class="suggest-input-smaller"
								name="message"></textarea>
							</label>
						</div>
						<div class="container-input-larger">
							<label class="suggest-label">
								Description
								<textarea disabled
								class="suggest-input-larger"
								name="message"></textarea>
							</label>
						</div>
						<button disabled
						id="suggest-input-button"
						type="submit"
						>Send</button>
					</form>
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

		<MarsScene @click="handleModals()"/>
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
			guideHow: true,
			guideWhat: false,
			guideFAQ: false,

			isLoading: true,
			loadingHistory: [],

			showEmailDisclaimer: false,
		}
	},

	methods: {

		handleLoadingBar(loadingHistory) {
			
		},

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
					document.documentElement.style.setProperty('--guideWhat-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty("--guideWhat-font-weight", 100);
					document.documentElement.style.setProperty("--guideWhat-font-size", '32px');
					document.documentElement.style.setProperty("--guideWhat-shadow", '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000');

					document.documentElement.style.setProperty('--guideHow-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty('--guideHow-color', 'rgba(0, 0, 0, 1)');
					document.documentElement.style.setProperty("--guideHow-font-weight", 200);
					document.documentElement.style.setProperty("--guideHow-font-size", '34px');
					document.documentElement.style.setProperty("--guideHow-shadow", 'none');

					document.documentElement.style.setProperty('--guideFAQ-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty('--guideFAQ-color', 'rgba(0, 0, 0, 1)');
					document.documentElement.style.setProperty("--guideFAQ-font-weight", 200);
					document.documentElement.style.setProperty("--guideFAQ-font-size", '34px');
					document.documentElement.style.setProperty("--guideFAQ-shadow", 'none');
					break
				case 'how':
					this.guideWhat = false;
					this.guideFAQ = false;
					this.guideHow = true;
					
					document.documentElement.style.setProperty('--guideHow-background-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty('--guideHow-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty("--guideHow-font-weight", 100);
					document.documentElement.style.setProperty("--guideHow-font-size", '32px');
					document.documentElement.style.setProperty("--guideHow-shadow", '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000');

					document.documentElement.style.setProperty('--guideWhat-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty('--guideWhat-color', 'rgba(0, 0, 0, 1)');
					document.documentElement.style.setProperty("--guideWhat-font-weight", 200);
					document.documentElement.style.setProperty("--guideWhat-font-size", '34px');
					document.documentElement.style.setProperty("--guideWhat-shadow", 'none');

					document.documentElement.style.setProperty('--guideFAQ-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty('--guideFAQ-color', 'rgba(0, 0, 0, 1)');
					document.documentElement.style.setProperty("--guideFAQ-font-weight", 200);
					document.documentElement.style.setProperty("--guideFAQ-font-size", '34px');
					document.documentElement.style.setProperty("--guideFAQ-shadow", 'none');
					break
				case 'questions':
					this.guideWhat = false;
					this.guideHow = false;
					this.guideFAQ = true;

					document.documentElement.style.setProperty('--guideFAQ-background-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty('--guideFAQ-color', 'rgba(255, 255, 255, 1)');
					document.documentElement.style.setProperty("--guideFAQ-font-weight", 100);
					document.documentElement.style.setProperty("--guideFAQ-font-size", '32px');
					document.documentElement.style.setProperty("--guideFAQ-shadow", '1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000');

					document.documentElement.style.setProperty('--guideWhat-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty('--guideWhat-color', 'rgba(0, 0, 0, 1)');
					document.documentElement.style.setProperty("--guideWhat-font-weight", 200);
					document.documentElement.style.setProperty("--guideWhat-font-size", '34px');
					document.documentElement.style.setProperty("--guideWhat-shadow", 'none');

					document.documentElement.style.setProperty('--guideHow-background-color', 'rgba(255, 255, 255, 0.5)');
					document.documentElement.style.setProperty('--guideHow-color', 'rgba(0, 0, 0, 1)');
					document.documentElement.style.setProperty("--guideHow-font-weight", 200);
					document.documentElement.style.setProperty("--guideHow-font-size", '34px');
					document.documentElement.style.setProperty("--guideHow-shadow", 'none');
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

	--guideHow-background-color: rgba(255, 255, 255, 1);
	--guideHow-color: rgba(255, 255, 255, 1);
	--guideHow-font-weight: 100;
	--guideHow-font-size: 32px;
	--guideHow-shadow: 1px 0 0 #000, 0 -1px 0 #000, 0 1px 0 #000, -1px 0 0 #000;

	--guideWhat-background-color: rgba(255, 255, 255, 0.8);
	--guideWhat-color: rgba(0, 0, 0);
	--guideWhat-font-weight: 200;
	--guideWhat-font-size: 34px;
	--guideWhat-shadow: none;

	--guideFAQ-background-color: rgba(255, 255, 255, 0.8);
	--guideFAQ-color: rgba(0, 0, 0);
	--guideFAQ-font-weight: 200;
	--guideFAQ-font-size: 34px;
	--guideFAQ-shadow: none;
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
	width: 99%;
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
	min-width: 277px;
	padding-bottom: 10px;
}

#show-top:hover svg {
	padding-left: 100px;
}

#show-top span {
	position: relative;
	display: inline-flexbox;
	width: 100%;
	color: rgba(0, 0, 0, 0);
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
	height: 75%;
	overflow: visible;
}

#logo {
	position: absolute;
	display: flex;
	align-items: center;
	background-color: rgba(0, 150, 101, 1);
	padding-bottom: 5px;
	padding-right: 5px;
	height: 50px;
	min-width: 260px;
	min-height: 50px;
	cursor: default;
	user-select: none;
	border-top: 4px solid rgba(255, 255, 255, 1);
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
	width: 100%;
	height: 60px;
}

#top-bar-items {
	position: relative;
	display: inline-block;
	height: 75%;
	max-width: 75px;
	min-width: 50px;
}

#bar-guide {
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: 75px;
	width: 99%;
	color: rgba(255, 255, 255, 1);
	background-color: var(--guide-background-color);
	font-weight: var(--guide-font-weight);
	font-size: var(--guide-font-size);
	font-family: 'Univers', sans-serif;
	border-right: 1px solid rgba(255, 255, 255, 0.75);
	border-bottom: 1px solid rgba(255, 255, 255, 0.75);
	transition: .25s ease-out;
}

#bar-about {
	position: relative;
	display: flex;
	align-items: center;
	cursor: pointer;
	min-height: 75px;
	width: 99%;
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
	text-align: center;
	cursor: pointer;
	height: 50%;
	min-height: 50px;
	width: 99%;
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
	display: block;
	top: 70px;
	bottom: 1%;
	right: 1%;
	width: 70%;
	border-radius: 8px;
	border-top-left-radius: 0px;
	border: 1px solid rgba(255, 255, 255, 0.5);
	border-right: none;
	background-color: rgba(255, 255, 255, 0.90);
	z-index: 3;
	overflow: hidden;
}

#guide-container-items {
	position: relative;
	display: inline-block;
	width: 100%;
	height: 25%;
	border-bottom: 5px solid rgba(0, 0, 0, 1);
	border-radius: 4px;
	border-bottom-right-radius: 0px;
	background-color: rgba(255, 255, 255, 1);
	padding-bottom: 30px;
}

.container-close {
	position: relative;
	display: flex;
	cursor: pointer;
	min-height: 25px;
	width: 100%;
	min-width: 30px;
	color: rgba(0, 0, 0, 1);
	font-size: 18px;
	font-family: 'Univers', sans-serif;
	border-bottom: 1px solid rgb(0, 0, 0);
	border-bottom-left-radius: 4px;
	transition: .15s ease;
}

.container-close:hover {
	color: rgba(0, 0, 0);
	border-bottom: 5px solid rgba(0, 0, 0, 1);
	background-color: rgba(255, 0, 0, 0.76);
	padding-left: 10px;
}

.container-close span {
	position: relative;
	display: block;
	text-align: right;
	float: right;
	margin-left: 4px;
	width: 90%;
	height: 100%;
}

.container-item {
	position: relative;
	display: flex;
	margin-top: 4px;
	cursor: pointer;
	min-height: 50px;
	width: 100%;
	min-width: 30px;
	color: rgba(0, 0, 0, 1);
	font-size: 18px;
	font-family: 'Univers', sans-serif;
	border-bottom: 1px solid rgb(0, 0, 0);
	border-top-left-radius: 4px;
	border-bottom-left-radius: 4px;
	text-shadow: 1px 0 0 #ffffff, 0 -1px 0 #ffffff, 0 1px 0 #ffffff, -1px 0 0 #ffffff;
	transition: .15s ease;
}

.container-item:hover {
	color: rgba(0, 0, 0);
	border-bottom: 5px solid rgba(255, 0, 0, 0.75);
	margin-left: 10px;
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
	position: fixed;
	background-color: rgba(0, 0, 0, 1);
	color: rgb(255, 255, 255);
	font-weight: 100;
	font-size: 10px; 
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.8);
}
.container-item:nth-child(2) {
	background-color: var(--guideHow-background-color);
	color: var(--guideHow-color);
	font-weight: var(--guideHow-font-weight);
	font-size: var(--guideHow-font-size); 
	text-shadow: var(--guideHow-shadow);
	border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.container-item:nth-child(3) {
	background-color: var(--guideWhat-background-color);
	color: var(--guideWhat-color);
	font-weight: var(--guideWhat-font-weight);
	font-size: var(--guideWhat-font-size); 
	text-shadow: var(--guideWhat-shadow);
	border-top: 1px solid rgba(255, 255, 255, 0.5);
	border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.container-item:nth-child(4) {
	background-color: var(--guideFAQ-background-color);
	color: var(--guideFAQ-color);
	font-weight: var(--guideFAQ-font-weight);
	font-size: var(--guideFAQ-font-size); 
	text-shadow: var(--guideFAQ-shadow);
	border-left: 1px solid rgba(255, 255, 255, 0.8);
}

.container-under {
	position: relative;
	display: flex;
	width: 100%;
	height: 70%;
	max-height: 70%;
	z-index: 3;
	font-family: 'Nunito', sans-serif;
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	scroll-behavior: smooth;
}

.container-under span {
	position: relative;
	width: 90%;
	margin: 0 auto;
	margin-top: 10px;
	z-index: 3;
}


.guide-choice {
	position: relative;
	width: 95%;
	align-items: start;
	margin: 0 auto;
	margin-top: 0px;
	margin-bottom: 30px;
	overflow: scroll;

}

.guide-choice-text {
	position: relative;
	height: 5%;
	font-size: 26px;
	color: rgb(255, 255, 255);
	display: inline-block;
	margin-top: 0px;
}

.guide-choice-text p {
	position: relative;
	text-align: left;
	font-size: 26px;
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	display: inline-block;
	padding-left: 1%;
	padding-right: 1%;
	margin-top: 0px;
	border-bottom: 5px solid rgba(255, 0, 0, 1);
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 0px;
	font-size: 26px;
}


.toggle-content {
	position: relative;
	color: rgb(0,0,0);
	border-radius: 4px;
	background-color: rgba(255, 255, 255, 0.90);
	padding: 20px;
	padding-top: 0px;
}

.container-under-how {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	align-content: flex-start;
	width: 100%;
	height: 80%;
	max-height: 75%;
	z-index: 3;
	font-family: 'Nunito', sans-serif;
	background-color: rgba(200, 200, 200, 0);
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	overflow: scroll;
	scroll-behavior: smooth;
	padding-top: 20px;
}

.container-under-how span {
	position: relative;
	width: 90%;
	margin: 0 auto;
	z-index: 3;
}

.how-choice {
	position: relative;
	width: 60%;
	height: fit-content;
	min-width: 240px;
	margin: 10px;
	margin-right: 0px;
	border-top-left-radius: 4px;
}

.how-video {
	position: relative;
	width: 35%;
	min-height: 35%;
	min-width: 240px;
	margin: 10px;
	margin-left: 0px
}

.how-choice-text {
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	position: relative;
	display: inline-block;
	width: 97.5%;
	min-width: 97.5%;
	padding-left: 2.5%;
	margin-top: 0px;
	border-bottom: 2.5px solid rgba(255, 0, 0, 0.8);
	border-bottom: 5px linear-gradient(#0000, #ffffff);
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 8px;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 0px;
	font-size: 26px;
}

.how-choice-text:after{
	position: absolute;
	content: '';
	display: block;
	box-sizing: border-box;
	width: 97.8%;
	top: 95%;
	right: 0%;
	border: 1.25px solid transparent;
	border-image: linear-gradient(to left, rgba(255, 0, 0, 0.8) 90%, rgba(0, 0, 0, 1) 100%);
	border-image-slice: 1;
}

.toggle-content-how {
	position: relative;
	left: 2.5%;
	width: 95%;
	height: 100%;
	color: rgb(0,0,0);
	padding-top: 20px;
}

.toggle-content-how:after {
    content:"";
    position: absolute;
    top: 0;
    bottom: 0;
	width: 95%;
    left: 50%;
    border-left: 4px dotted rgb(255, 255, 255);
    transform: translate(-50%);
}

.toggle-content-how-video {
    display: flex;
	color: rgb(0,0,0);
	background-color: rgba(238, 238, 238, 1);
	border: 2px solid rgba(0, 0, 0, 0.8);
	border-radius: 4px;
	width: 98.1%;
	margin-left: 5%;
}

.how-text {
	position: relative;
	width: 100%;
	min-height: 40px;
	font-size: 18px;
	text-align: justify;
	color: rgb(0,0,0);
	background-color: rgba(255, 255, 255, 1);
}

.how-text p {
	padding: 5px;
	border: 1px solid rgb(0, 0, 0, 0.25);
	border-top-left-radius: 0px;
	border-top-right-radius: 0px;
	border-bottom-right-radius: 0px;
	box-shadow: 4px 4px rgba(0,0,0,1);
	margin-top: 0px;
	background-color: rgba(255, 255, 255, 1);
}

.what-text {
	position: relative;
	width: 100%;
	font-size: 18px;
	padding-left: 5px;
}

.what-text p {
	color: rgb(0, 0, 0);
	padding: 5px;
	margin-top: 0%;
	font-weight: 100;
	
}

.container-under-FAQ {
	position: relative;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	width: 100%;
	min-width: 100%;
	height: 70%;
	max-height: 70%;
	z-index: 3;
	font-family: 'Nunito', sans-serif;
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	overflow: scroll;
	scroll-behavior: smooth;
	padding-top: 20px;
}

.toggle-content-FAQ {
	position: relative;
	width: 95%;
	min-width: 240px;
	margin: 0 auto;
    display: inline-block;
	align-items: top;
	color: rgb(0,0,0);
	border: 1px solid rgba(0,0,0,0.25);
	border-radius: 4px;
	background-color: rgba(255, 255, 255, 1);
	box-shadow: 5px 5px rgba(0,0,0,0.25);
	margin-bottom: 20px;
	overflow: visible;
}

.FAQ-choice {
	position: relative;
	width: 47%;
	margin: 0 auto;
	min-width: 240px;
	margin-bottom: 30px;
	overflow: scroll;
}

.FAQ-choice-text {
	background-color: rgb(255, 255, 255);
	position: relative;
	width: 20%;
}

.FAQ-choice-text p {
	color: rgb(255, 255, 255);
	background-color: rgb(0,0,0);
	position: relative;
	width: fit-content;
	padding-left: 1.5%;
	padding-right: 1.5%;
	padding-bottom: 0%;
	margin-top: 0px;
	border-bottom: 5px solid rgba(255, 0, 0, 1);
	border-radius: 4px;
	border-top-left-radius: 0px;
	border-bottom-left-radius: 8px;
	border-top-right-radius: 4px;
	border-bottom-right-radius: 0px;
	font-size: 26px;
}

.FAQ-subheading {
	position: relative;
	margin-left: 10px;
	display: flex;
	font-size: 18px;
}

.FAQ-subheading p {
	position: relative;
	max-width: 70%;
	padding: 5px;
	background-color: rgb(238, 238, 238);
	border-radius: 4px;
}

.FAQ-text {
	position: relative;
	color: rgb(0, 0, 0);
	display: block;
	margin: 0 auto;
	padding: 10px;
	text-align: justify;
	padding-bottom: 10px;
}

.link-highlight {
	padding-left: 2px;
	padding-right: 2px;
	text-decoration: none;
	border-bottom: 1px solid rgb(0, 150, 255);
	border-top-left-radius: 6px;
	border-top-right-radius: 6px;
	transition: ease .1s;
	line-height: 0%;
}

.link-highlight:hover {
	border-bottom: 3px solid rgb(0, 150, 255);
	text-decoration: none;
	font-size: 18px;
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
	display: block;
	top: 70px;
	bottom: 1%;
	right: 1%;
	width: 40%;
	border-radius: 8px;
	border-top-left-radius: 0px;
	border: 1px solid rgba(0, 0, 0, 0.5);
	z-index: 3;
	background-color: rgb(238, 238, 238);
	overflow-y: scroll;
	overflow-x: hidden;
}

#suggest-container-items {
	position: relative;
	display: block;
	width: 100%;
	min-height: fit-content;
	overflow: visible;
	background-color: rgb(255, 255, 255);
}

#container-under-suggest {
	position: relative;
	display: inline-block;
	flex-wrap: wrap;
	align-content: flex-start;
	width: 100%;
	height: 95%;
	max-height: 95%;
	z-index: 3;
	font-family: 'Nunito', sans-serif;
	border-top-right-radius: 8px;
	border-bottom-left-radius: 8px;
	border-bottom-right-radius: 8px;
	overflow: scroll;
	scroll-behavior: smooth;
}

#suggest-form {
	position: relative;
	top: 5%;
	display: flex;
	flex: wrap;
	flex-direction: column;
	justify-content: space-evenly;
	align-content: space-evenly;
	margin: 0 auto;
	width: 95%;
	height: 90%;
	min-height: 90%;
	min-width: 240px;
	background-color: rgb(255, 255, 255);
	border: 1px solid rgba(0, 0, 0, 0.15);
	border-radius: 8px;
	border-top-left-radius: 0px;
	box-shadow: 0 1px 3px inset rgba(0,0,0,0.12), 0 1px 2px inset rgba(0,0,0,0.24);
	font-family: 'Nunito', sans-serif;
	font-size: 14px;
}

.container-input-smaller {
	position: relative;
	margin: 0 auto;
	width: 85%;
	min-width: 220px;
	overflow: hidden;
}

.container-input-larger {
	position: relative;
	margin: 0 auto;
	width: 85%;
	min-width: 220px;
}

.suggest-label {
	position: relative;
	margin: 0 auto;
	width: 80%;
}

.suggest-hint {
	position: relative;
	width: 85%;
	margin: 0px;
	font-size: 11px;
	color: rgba(0, 0, 0, 0.5);
}

.disclaimer-label {
	position: relative;
	width: 50%;
	margin: 0px;
	font-size: 11px;
	color: rgba(0, 0, 255, 0.5);
	cursor: pointer;
}

#email-disclaimer {
	position: absolute;
	background-color: rgb(0, 0, 0);
	width: 165px;
	z-index: 10;
	top: 15%;
	right: 10%;
	border-left: 5px solid rgba(255,0,0, 0.8);
	border-radius: 4px;
	padding: 10px;
}

#email-disclaimer span {
	background-color: rgb(0, 0, 0);
	color: rgb(255, 255, 255);
	text-align: justify;
}

.suggest-input-smaller {
	position: relative;
	display: block;
	height: 1.5em;
	width: 35%;
	min-width: 200px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	overflow: hidden;
	background-color: rgb(226, 226, 226);
}

.suggest-input-larger {
	position: relative;
	display: block;
	height: 80px;
	width: 100%;
	min-width: 200px;
	border: 1px solid rgba(0, 0, 0, 0.25);
	border-radius: 4px;
	overflow: hidden;
	background-color: rgb(226, 226, 226);
}

#suggest-input-button {
	position: relative;
	margin: 0 auto;
	margin-right: 20px;
	width: 25%;
	min-width: 120px;
	height: 60px;
	min-height: 15px;
	font-family: 'Univers', 'sans-serif';
	border-radius: 8px;
	background-color: rgb(255, 255, 255);
	border: 1px solid rgb(0, 0, 0, 0.5);
}

#suggest-input-button:hover {
	background-color: rgba(255, 0, 0, 0.8);
	color: rgb(255, 255, 255);
	cursor: pointer;
}

canvas {
	font-family: Arial, sans-serif;
	font-size: 20px;
	color: black;
}

.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateY(-30px);
  opacity: 0;
}

.nested-enter-active .inner,
.nested-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}

.nested-enter-active .inner {
	transition-delay: 0.25s;
}

.nested-enter-from .inner,
.nested-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}

.email-disclaimer-transition-enter-active, .email-disclaimer-transition-leave-active {
	transition: all 0.3s ease-in-out;
}

.email-disclaimer-transition-leave-active {
  transition-delay: 0s;
}

.email-disclaimer-transition-enter-from,
.email-disclaimer-transition-leave-to {
  transform: translateY(30px);
  opacity: 0;
}

.email-disclaimer-transition-enter-active .inner,
.email-disclaimer-transition-leave-active .inner { 
  transition: all 0.3s ease-in-out;
}

.email-disclaimer-transition-enter-active .inner {
	transition-delay: 0.25s;
}

.email-disclaimer-transition-enter-from .inner,
.email-disclaimer-transition-leave-to .inner {
  transform: translateX(30px);
  opacity: 0.001;
}

@media only screen and (max-width: 810px) {

	.toggle-content-FAQ {
		width: 95%;
		min-width: 95%;
		margin-bottom: 20px;
	}

	#suggest-container {
		width: 75%;
		max-width: 75%;
	}
}

</style>