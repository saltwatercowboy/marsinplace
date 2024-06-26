import * as THREE from 'three';

function createCubeMaterial() {

  const texLoader = new THREE.TextureLoader();

  const px = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/px.png') })
  const nx = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/nx.png') })
  const py = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/py.png') })
  const ny = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/ny.png') })
  const pz = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/pz.png') })
  const nz = new THREE.MeshPhongMaterial({ shininess: 10, map: texLoader.load('textures/mars/mars_cubemap_4k/nz.png') })

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
    v.normalize().multiplyScalar(r); // or v.setLength(r); 
    g.attributes.position.setXYZ(i, v.x, v.y, v.z);
  }

  g.computeVertexNormals();

  const m = new createCubeMaterial();
  const cube = new THREE.Mesh(g, m);
  
  cube.castShadow = true;

  cube.traverse( function (child)
      {
        if ( child.isMesh ) {
          child.castShadow = true;
        }
      }
  )
  
  cube.tick = (delta) => {
    //cube.rotation.y += (1 / 24  ) * delta;
  };

  return cube
}

export { createQuadrilateralizedSphericalCube };
