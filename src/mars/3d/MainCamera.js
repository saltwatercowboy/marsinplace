import * as THREE from 'three';

function createCamera(container) {
    const WIDTH = container.clientWidth;
    const HEIGHT = container.clientHeight;
    
    const camera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 1, 10000);

    camera.position.set(480,12,700);

    
    return camera;
}

function createFocusCamera(container) {
    const WIDTH = container.clientWidth;
    const HEIGHT = container.clientHeight;

    const focusCamera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 1, 10000);

    const rCamera = 480;
    let cTheta = 2 * Math.PI / 6400;
    let cThetaMod = 232;

    // positioning camera
    focusCamera.position.set(480,12,700);

    focusCamera.tick = (scene) => {
        cThetaMod -= cTheta;

        focusCamera.position.x = rCamera * Math.cos(cThetaMod);
        focusCamera.position.z = rCamera * Math.sin(cThetaMod);
        focusCamera.lookAt(0, 0, 0)
    }

    return focusCamera;
}

export { createCamera, createFocusCamera };