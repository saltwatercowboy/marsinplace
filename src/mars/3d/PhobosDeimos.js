import * as THREE from 'three';
import { OBJLoader } from 'three/examples/jsm/loaders/OBJLoader.js';

function loadPhobos() {
  const phobosLoader = new OBJLoader();

  return new Promise((resolve, reject) => {
    phobosLoader.load(
      'models/g_phobos_287m.obj',
      (object) => {
        // The object is successfully loaded
        resolve(object);
      },
      (xhr) => {
        // Optional progress handling
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        // Error handling
        reject(new Error('An error happened during loading the model.'));
      }
    );
  });
}

function loadDeimos() {
  const deimosLoader = new OBJLoader();

  return new Promise((resolve, reject) => {
    deimosLoader.load(
      'models/g_deimos_162m.obj',
      (object) => {
        // The object is successfully loaded
        resolve(object);
      },
      (xhr) => {
        // Optional progress handling
        console.log((xhr.loaded / xhr.total * 100) + '% loaded');
      },
      (error) => {
        // Error handling
        reject(new Error('An error happened during loading the model.'));
      }
    );
  });
}

async function createPhobosDeimos() {
  try {
    const phobosObj = await loadPhobos();
    const deimosObj = await loadDeimos();

    phobosObj.receiveShadow = true;
    phobosObj.color = 'white';
    phobosObj.traverse( function (child)
      {
        if ( child.isMesh ) {
          child.receiveShadow = true;
        }
      }
    );

    const rPhobos = 400;
    const rDeimos = 1200;
    let pTheta = 2 * Math.PI / 2500;
    let dTheta = 2 * Math.PI / 5000;
    let pThetaMod = 0;
    let dThetaMod = 400;

    // Position history for trails
    const phobosHistory = [];
    const deimosHistory = [];
    const maxHistoryLength = 499;

    // Create trail materials
    const trailMaterial = new THREE.LineBasicMaterial({ color: 0xffffff });

    // Function to update trails
    function updateTrail(history) {
      const positions = new Float32Array(history.length * 3);
      for (let i = 0; i < history.length; i++) {
        positions[i * 3] = history[i].x;
        positions[i * 3 + 1] = history[i].y;
        positions[i * 3 + 2] = history[i].z;
      }

      const geometry = new THREE.BufferGeometry();
      geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

      const line = new THREE.Line(geometry, trailMaterial);
      return line;
    }

    phobosObj.tick = (scene) => {
      pThetaMod -= pTheta;
      dThetaMod -= dTheta;

      phobosObj.position.x = rPhobos * Math.cos(pThetaMod);
      phobosObj.position.z = rPhobos * Math.sin(pThetaMod);

      deimosObj.position.x = rDeimos * Math.cos(dThetaMod);
      deimosObj.position.z = rDeimos * Math.sin(dThetaMod);

      // Update position history
      phobosHistory.push(phobosObj.position.clone());
      deimosHistory.push(deimosObj.position.clone());

      if (phobosHistory.length > maxHistoryLength) phobosHistory.shift();
      if (deimosHistory.length > maxHistoryLength) deimosHistory.shift();

      // Remove old trails from scene and dispose them
      const oldPhobosTrail = scene.getObjectByName('phobosTrail');
      const oldDeimosTrail = scene.getObjectByName('deimosTrail');
      if (oldPhobosTrail) {
        scene.remove(oldPhobosTrail);
        oldPhobosTrail.geometry.dispose();
        oldPhobosTrail.material.dispose();
      }
      if (oldDeimosTrail) {
        scene.remove(oldDeimosTrail);
        oldDeimosTrail.geometry.dispose();
        oldDeimosTrail.material.dispose();
      }

      // Add new trails to scene
      const phobosTrail = updateTrail(phobosHistory);
      phobosTrail.name = 'phobosTrail';
      scene.add(phobosTrail);

      const deimosTrail = updateTrail(deimosHistory);
      deimosTrail.name = 'deimosTrail';
      scene.add(deimosTrail);
    };

    return [phobosObj, deimosObj];
  } catch (error) {
    console.error(error);
  }
}

export { createPhobosDeimos };
