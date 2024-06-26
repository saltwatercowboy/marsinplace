import * as THREE from 'three';

function createCamera(container){
    const WIDTH = container.clientWidth;
    const HEIGHT = container.clientHeight;
    
    const camera = new THREE.PerspectiveCamera(45, WIDTH/HEIGHT, 1, 10000);

    // positioning camera
    camera.position.set(480,12,700);
    
    return camera;
}

export { createCamera };