// Mars.js

import * as THREE from 'three';

import { createCamera } from "./3d/Camera.js";
import { createQuadrilateralizedSphericalCube } from "./3d/Mars.js";
import { createScene } from "./3d/Scene.js";
import { createLight } from "./3d/Light.js";
import { createPhobosDeimos } from "./3d/PhobosDeimos.js";

import placeData from './scripts/placesData.js';
import { Places } from './scripts/placeMapper.js';

import { createRenderer } from "./scripts/renderer.js";
import { Resizer } from "./scripts/resizer.js";
import { Loop } from "./scripts/animationLoop.js";
import { createControls } from "./scripts/cameraControls.js";

let loop;
let controls;
let resizer;

class Areograph {
  constructor(container) {
    this.camera = createCamera(container);
    this.scene = createScene();
    this.raycaster = new THREE.Raycaster();
    this.mouse = new THREE.Vector2();
    this.hoveredObject = null;

    this.mars = createQuadrilateralizedSphericalCube();

    this.renderer = createRenderer();
    container.append(this.renderer.domElement);

    //add Mars
    this.scene.add(this.mars);

    //lighting
    const { mainLight, softenerLightLower, ambientLight } = createLight();
    this.mainLight = mainLight;
    this.scene.add(mainLight, softenerLightLower, ambientLight);

    // Camera controls
    controls = createControls(this.camera, container);

    //window resizing
    resizer = new Resizer(container, this.camera, this.renderer);

    //animation
    loop = new Loop(this.camera, this.scene, this.renderer);
    loop.updatables.push(this.mars);

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
      this.scene.add(this.phobos);
      this.scene.add(deimos);
      loop.updatables.push({ tick: () => phobos.tick(this.scene) });
    } catch (error) {
      console.error('Error loading moons:', error);
    }
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }

  createAllMarkers() {
    var pmTest = new Places('film', placeData, true, 'Mars');
    pmTest.createAll();
    let i = pmTest.getPinsData();
    for (let index = 0; index < i.length; index++) {
      this.mars.add(i[index].mesh);
      this.mars.add(i[index].diamondMesh);
      this.mars.add(i[index].jewelMesh);
    }
  }

  createModal(item) {
    if (this.modal) {
        this.scene.remove(this.modal);
        this.modal.geometry.dispose();
        this.modal.material.map.dispose();
        this.modal.material.dispose();
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
    context.lineWidth = 5;
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
    context.font = 'italic 16px Arial';
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

    const texture = new THREE.CanvasTexture(canvas);

    const geometry = new THREE.PlaneGeometry(45, 85);
    const material = new THREE.MeshBasicMaterial({ map: texture, transparent: true, side: THREE.DoubleSide });
    this.modal = new THREE.Mesh(geometry, material);

    this.modal.isModal = true;

    this.scene.add(this.modal);
  }

  onMouseMove(event) {
    event.preventDefault();
    const rect = event.target.getBoundingClientRect();
    this.mouse.x = ((event.clientX - rect.left) / rect.width) * 2 - 1;
    this.mouse.y = -((event.clientY - rect.top) / rect.height) * 2 + 1;

    this.raycaster.setFromCamera(this.mouse, this.camera);
    const intersects = this.raycaster.intersectObjects(this.scene.children, true);


    if (intersects.length > 0) {
      const object = intersects[0].object;
      if (object.isModal) {
        return; //skip hover effects for modal
      }
      if (this.hoveredObject !== object) {
        if (this.hoveredObject) {
          if (this.hoveredObject.material && this.hoveredObject.material.color && !this.hoveredObject.isLine) {
            this.hoveredObject.material.color.set(this.hoveredObject.originalColor);
            this.hoveredObject.material.wireframe = true;
          }
        }
        this.hoveredObject = object;
        if (object.material && object.material.color && !this.hoveredObject.isLine) {
          this.hoveredObject.originalColor = object.material.color.getHex();
          this.hoveredObject.material.color.set('gold');
          this.hoveredObject.material.wireframe = false;
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
    
    if (this.hoveredObject) {
      if (this.hoveredObject.material && this.hoveredObject.material.color) {
        this.hoveredObject.material.color.set(this.hoveredObject.originalColor);
      }
      const pin = this.hoveredObject;

      this.createModal(pin.data);
      
      this.modal.position.copy(pin.position).multiplyScalar(1.1);
      this.modal.position.z = this.modal.position.z + 50;

      this.camera.position.copy(pin.position).multiplyScalar(2);
      this.camera.lookAt(0,0,0);

      this.modal.lookAt(this.camera.position);

      this.hoveredObject = null;
    }
  }
}

export { Areograph };