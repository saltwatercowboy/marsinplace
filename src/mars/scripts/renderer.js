import * as THREE from 'three';

function createRenderer(){
    const renderer = new THREE.WebGLRenderer({
        antialias : true,
        logarithmicDepthBuffer: true,
        toneMapping: THREE.ACESFilmicToneMapping
    });
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    
    return renderer;
}

export { createRenderer };
