import * as THREE from 'three';

function createBackground(){
    const scene = new THREE.Scene();

    const background = new THREE.CubeTextureLoader()
    .setPath( 'textures/space/8k_equi_cubemap/' )
    .load( [
          'px.png',
          'nx.png',
          'py.png',
          'ny.png',
          'pz.png',
          'nz.png'
        ]
    );
    background.mapping = THREE.CubeRefractionMapping;
    background.magFilter = THREE.NearestFilter;
    background.minFilter = THREE.NearestFilter;

    const bgColor = new THREE.Color( 'white' )
    scene.background = background;
    background.dispose();

    return scene;
}

export { createBackground };