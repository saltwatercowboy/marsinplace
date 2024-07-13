import * as THREE from 'three';

function createCubeMaterial() {

  const texLoader = new THREE.TextureLoader();

  const px = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/px.png'), displacementMap: texLoader.load('textures/mars/mars_cubemap_4k_displacementmaps/px.png'), displacementScale: 2, displacementBias: -1 })
  const nx = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/nx.png'), displacementMap: texLoader.load('textures/mars/mars_cubemap_4k_displacementmaps/nx.png'), displacementScale: 2, displacementBias: -1 })
  const py = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/py.png'), displacementMap: texLoader.load('textures/mars/mars_cubemap_4k_displacementmaps/py.png'), displacementScale: 2, displacementBias: -1 })
  const ny = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/ny.png'), displacementMap: texLoader.load('textures/mars/mars_cubemap_4k_displacementmaps/ny.png'), displacementScale: 2, displacementBias: -1 })
  const pz = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/pz.png'), displacementMap: texLoader.load('textures/mars/mars_cubemap_4k_displacementmaps/pz.png'), displacementScale: 2, displacementBias: -1 })
  const nz = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/nz.png'), displacementMap: texLoader.load('textures/mars/mars_cubemap_4k_displacementmaps/nz.png'), displacementScale: 2, displacementBias: -1 })

  const materials = [
    px,
    nx,
    py,
    ny,
    pz,
    nz
  ];

  return materials
}

function createQuadrilateralizedSphericalCube() {

  const r = 200;
  let g = new THREE.BoxGeometry(1, 1, 1, 50, 50, 50);

  let v = new THREE.Vector3(); // temp vector, for re-use
  for(let i = 0; i < g.attributes.position.count; i++){
    v.fromBufferAttribute(g.attributes.position, i);
    v.normalize().multiplyScalar(r); 
    //v.setLength(r); 
    g.attributes.position.setXYZ(i, v.x, v.y, v.z);
  }

  g.computeVertexNormals();

  const m = new createCubeMaterial();

  const cube = new THREE.Mesh(g, m);

  cube.material.generateMipmaps = true;
  cube.material.wrapS = THREE.ClampToEdgeWrapping;
  cube.material.wrapT = THREE.ClampToEdgeWrapping;

  cube.material.minFilter = cube.material.magFilter = THREE.LinearFilter;

  cube.geometry.computeVertexNormals();

  cube.castShadow = true;

  cube.traverse( function (child)
      {
        if ( child.isMesh ) {
          child.castShadow = true;
        }
      }
  )
  
  cube.tick = (delta) => {
    cube.rotation.y += (1 / 48 ) * delta;
  };

  return cube
}

export { createQuadrilateralizedSphericalCube };
