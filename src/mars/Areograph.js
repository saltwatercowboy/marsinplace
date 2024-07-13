// Mars.js

import * as THREE from 'three';

import { GUI } from 'three/addons/libs/lil-gui.module.min.js'

import { createCamera, createFocusCamera } from "./3d/MainCamera.js";
import { createQuadrilateralizedSphericalCube } from "./3d/Mars.js";
import { createBackground } from "./3d/Background.js";
import { createLight } from "./3d/Lighting.js";
import { createPhobosDeimos } from "./3d/PhobosDeimos.js";

import placeData from './scripts/placesData.js';
import { Places } from './scripts/placeMapper.js';

import { createRenderer } from "./scripts/renderer.js";
import { Resizer } from "./scripts/resizer.js";
import { Loop } from "./scripts/animationLoop.js";
import { createControls } from "./scripts/cameraControls.js";

import { EffectComposer } from 'three/addons/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/addons/postprocessing/RenderPass.js';
import { GlitchPass } from 'three/addons/postprocessing/GlitchPass.js';
import { OutputPass } from 'three/addons/postprocessing/OutputPass.js';
import { SSAARenderPass } from 'three/addons/postprocessing/SSAARenderPass.js';

let loop;
let controls;
let resizer;

class Areograph {
  constructor(container) {
    this.camera = createCamera(container);
    this.focusCamera = createFocusCamera(container);

    this.placeholderImg = new THREE.TextureLoader().load('/marsisaplace/modal/placeholder.png'); //placeholder until deployment to sidestep gh-pages fetch issue

    this.background = createBackground();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredObject = null;

    this.mars = createQuadrilateralizedSphericalCube();

    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    //add Mars
    this.background.add(this.mars);

    //lighting
    const { mainLight, softenerLightLower, ambientLight } = createLight();
    this.mainLight = mainLight;
    this.background.add(mainLight, softenerLightLower, ambientLight);

    // Camera controls
    controls = createControls(this.camera, container);

    //window resizing
    resizer = new Resizer(container, this.camera, this.renderer, this.composer);

    this.composer = new EffectComposer( this.renderer );
    this.composer.setPixelRatio(1);
    this.ssaaPass = new SSAARenderPass( this.background, this.camera );
    this.outputPass = new OutputPass();

    //this.composer.addPass( this.ssaaPass );
    //this.composer.addPass( this.outputPass );

    //animation
    loop = new Loop(this.camera, this.background, this.renderer, this.composer);
    loop.updatables.push(this.mars);

    loop.updatables.push({ tick: () => this.focusCamera.tick(this.background) });

    this.createAllMarkers();

    console.log('mars name', this.mars.children);

    //load + add Phobos and Deimos
    this.loadAddMoons();

    //event listeners
    container.addEventListener('mousemove', this.onMouseMove.bind(this), false);
    container.addEventListener('click', this.onClick.bind(this), false);
  }

  async loadAddMoons() {
    try {
      const [phobos, deimos] = await createPhobosDeimos();
      this.phobos = phobos;
      this.background.add(this.phobos);
      this.background.add(deimos);
      loop.updatables.push({ tick: () => phobos.tick(this.background) });
    } catch (error) {
      console.error('Error loading moons:', error);
    }
  }

  //render removed

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  //!todo restructure getPinsData to accept multiple filtering arguments and return a new array of pin objects
  createAllMarkers() {
    var litPins = new Places('literature', placeData, true, 'Mars');
    litPins.createAll();
    let i = litPins.getPinsData();

    var filmAndTVPins = new Places('filmAndTV', placeData, true, 'Mars')
    filmAndTVPins.createAll();
    let j = filmAndTVPins.getPinsData();

    for (let index = 0; index < i.length; index++) {
      this.mars.add(i[index].mesh);
      this.mars.add(i[index].diamondMesh);
      this.mars.add(i[index].jewelMesh);

      this.createLabel(i[index].diamondMesh);

    }

    for (let index = 0; index < j.length; index++) {
      this.mars.add(j[index].mesh);
      this.mars.add(j[index].diamondMesh);
      this.mars.add(j[index].jewelMesh);

      this.createLabel(j[index].diamondMesh);

    }

    this.mars.geometry.computeBoundingBox();

  }

  createLabel(item) {

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 50;

    //background
    context.fillStyle = 'rgba(255, 255, 255, 0)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //border
    //context.lineWidth = 1;
    //context.strokeRect(0, 0, canvas.width, canvas.height);

    //header
    context.fillStyle = '#FFFFFF'; // White text color
    context.font = 'bold 18px Andale Mono';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    //draw header test
    context.fillText(item.data.placeName, canvas.width / 2, 25);

    const texture = new THREE.CanvasTexture(canvas);

    const geometry = new THREE.PlaneGeometry(50, 10);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
    let label = new THREE.Mesh(geometry, material);
    //label.scale.set(50, 20, 1);
    label.position.y = label.position.y + 5;

    var targ = new THREE.Vector3();

    console.log('tst', item.getWorldPosition(targ));

    //label.position.set(targ);

    label.isLabel = true;

    item.add(label);
    label.rotation.y = Math.PI;

  }

  createModals(item) {
    if (this.modal) {
        this.background.remove(this.modal);
        this.modal.geometry.dispose();
        this.modal.material.map.dispose();
        this.modal.material.dispose();

        this.background.remove(this.imgModal);
        this.imgModal.geometry.dispose();
        this.imgModal.material.map.dispose();
        this.imgModal.material.dispose();
        
    }

    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    canvas.width = 300;
    canvas.height = 500;

    //background
    context.fillStyle = 'rgba(127, 255, 255, 0.1)';
    context.fillRect(0, 0, canvas.width, canvas.height);

    //border
    context.strokeStyle = '#00FFFF'; // Cyan border color
    context.lineWidth = 2;
    context.strokeRect(0, 0, canvas.width, canvas.height);

    //header
    context.fillStyle = '#FFFFFF'; // White text color
    context.font = 'bold 20px Arial';
    context.textAlign = 'center';
    context.textBaseline = 'middle';

    //draw header test
    context.fillText(item.placeName, canvas.width / 2, 25);

    //minor attrib
    context.font = 'bold 16px Arial';
    context.textAlign = 'left';
    context.textBaseline = 'top';
    context.shadowColor = 'rgba(0, 0, 0, 0)'; //no shadow for minor attribs
    const attributes = [
        `Media: ${item.media}`,
        `Creator: ${item.creator}`,
        `Year Set: ${item.fictionalYear}`,
        `Year Published: ${item.realYear}`,
        `Region: ${item.region}`,
    ];
    const description = item.description;

    //draw minor attrib
    attributes.forEach((attr, index) => {
        context.fillText(attr, 20, 60 + index * 25);
    });

    //description
    context.fillStyle = '#CCCCCC';
    context.font = 'italic 16px Univers';
    context.textAlign = 'left';
    context.textBaseline = 'top';

    //description text w. word wrapping
    const maxWidth = canvas.width - 40;
    const lineHeight = 20;
    let x = 20;
    let y = 60 + attributes.length * 25 + 10;

    const words = description.split(' ');
    let line = '';

    for (let n = 0; n < words.length; n++) {
        const testLine = line + words[n] + ' ';
        const metrics = context.measureText(testLine);
        const testWidth = metrics.width;
        if (testWidth > maxWidth && n > 0) {
            context.fillText(line, x, y);
            line = words[n] + ' ';
            y += lineHeight;
        } else {
            line = testLine;
        }
    }
    context.fillText(line, x, y);

    const geometry = new THREE.PlaneGeometry(45, 85);
    const normTexture = new THREE.CanvasTexture(canvas);

    const material = new THREE.SpriteMaterial({ map: normTexture, transparent: true, side: THREE.DoubleSide });    

    var imgMap = new THREE.TextureLoader().load( item.photoFile ); //placeholder until deployment
    //var imgMap = this.placeholderImg; //placeholder

    var imgMaterial = new THREE.SpriteMaterial( { map: imgMap, color: 0xffffff } );
    this.imgModal = new THREE.Sprite( imgMaterial );

    this.imgModal.isModal = true;

    this.modal = new THREE.Sprite( material );
    this.modal.scale.set(50, 100, 1);
    this.modal.isModal = true;

    this.background.add(this.modal);
    this.background.add(this.imgModal);
  }

  onMouseMove(event) {
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.background.children, true);

    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object.isModal || object.isLabel) {
        return; //skip hover effects for modal
      }
      if (this.hoveredObject !== object) {
        if (this.hoveredObject) {
          if (this.hoveredObject.material && this.hoveredObject.material.color && !this.hoveredObject.isLine) {
            this.hoveredObject.material.color.set('gold');
            this.hoveredObject.material.wireframe = true;
          }
        }
        this.hoveredObject = object;
        if (object.material && object.material.color && !this.hoveredObject.isLine) {
          this.hoveredObject.originalColor = object.material.color.getHex();
          this.hoveredObject.material.color.set('gold');
          this.hoveredObject.material.wireframe = false;

          //this.camera.position.copy(pin.position).multiplyScalar(2);
    
        }
      }
    } else {
      if (this.hoveredObject) {
        if (this.hoveredObject.material && this.hoveredObject.material.color && !this.hoveredObject.isLine) {
          this.hoveredObject.material.color.set(this.hoveredObject.originalColor);
          this.hoveredObject.material.wireframe = true;
        }
        this.hoveredObject = null;
      }
    }
  }

  onClick(event) {
    event.preventDefault();
    if (this.hoveredObject) {
      if (this.hoveredObject.material && this.hoveredObject.material.color) {
      }

      var targ = new THREE.Vector3();

      console.log(this.hoveredObject.getWorldPosition(targ));

      //console.log(this.hoveredObject.children[2].position);

      var pin = this.hoveredObject;

      this.createModals(pin.data);

      this.imgModal.scale.set(50, 50, 1);
      this.imgModal.position.copy(targ).multiplyScalar(1.41);
      this.modal.position.copy(targ).multiplyScalar(1.41);
      this.modal.position.y -= 40;

      this.imgModal.position.y += 45;

      this.camera.position.copy(targ).multiplyScalar(2.4);
      this.camera.lookAt(0,0,0);

      this.hoveredObject = null;
    }
  }
}

export { Areograph };