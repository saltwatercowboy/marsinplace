import * as THREE from 'three';


function createScene(){
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
        ] );

    const bgColor = new THREE.Color( 'white' )
    scene.background = background;

    return scene;
}

export { createScene };