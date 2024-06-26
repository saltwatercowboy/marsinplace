// PlaceMapper.js

import * as THREE from 'three';

class PinHead extends THREE.Mesh {
  constructor(item) {
    super();
    this.data = item;
    const front = Math.tan(Math.PI / 6);
    const back = Math.cos(Math.PI / 6);
    const faces = [
      2, 1, 2, // left, right, top
      1, 3, 0, // right, back, top
      3, 2, 0, // back, left, top
      2, 4, 1, // left, bottom, right
      1, 4, 3, // right, bottom, back
      3, 4, 2, // back, bottom, left
    ];
    const verticesJewel = [
      0, 1, 0, // 0: top
      1, 0, front, // 1: right
      -1, 0, front, // 2: left
      0, 0, -back, // 3: back middle
      0, -1, 0, // 4: bottom
    ];

    this.jewelGeometry = new THREE.PolyhedronGeometry(verticesJewel, faces, 1.6, 0); // 1.6
    this.jewelMaterial = new THREE.MeshBasicMaterial({
      fog: true,
      wireframe: false,
      color: item.jewelColor,
      reflectivity: 20,
    });
    this.jewelMesh = new THREE.Mesh(this.jewelGeometry, this.jewelMaterial);
    this.jewelActive = false;
    this.jewelSize = 0;
  }
}

class Places {
  constructor(placeType, dataList, isActive, body) {
    this.placeType = placeType;
    this.dataList = dataList;
    this.celestialBody = body;
    this.isActive = isActive;
    this.path = '/src/World/assets/places/photos/';
  }

  createAll() {
    this.setActive();
    this.assignPlaceData();
    this.placeData.forEach(this.findPosition);
    this.placeData.forEach(this.createPins);
  }

  // Utility
  getType() {
    return this.placeType;
  }

  getPinsData() {
    return this.placeData;
  }

  // True or false
  setActive(isActive) {
    this.isActive = isActive;
  }

  // Returns object
  assignPlaceData() {
    if (this.dataList.placeData[this.placeType]) {
      this.placeData = this.dataList.placeData[this.placeType];
    } else {
      throw new Error(`Type "${this.placeType}" not in placeData`);
    }
  }

  // Assigns location in x, y, z on a sphere (technically a cube sphere) based on lat and lon coordinates
  findPosition(item) {
    switch (item.body) {
      case 'Mars':
        var r = 200; // Radius of planetary body
        var phi = ((90 - item.lat) * Math.PI) / 180;
        var theta = ((180 + item.lon) * Math.PI) / 180;

        Object.defineProperties(item, {
          x: {
            value: r * Math.sin(phi) * Math.cos(theta),
            writable: true,
          },
          y: {
            value: r * Math.cos(phi),
            writable: true,
          },
          z: {
            value: r * Math.sin(phi) * Math.sin(theta),
            writable: true,
          },
        });
    }
  }

  createPins(item) {
    const startPoint = new THREE.Vector3(item.x, item.y, item.z);
    const normalVector = startPoint.clone().normalize();
    const lineLength = 20;
    const lineLengthDiamond = 1;

    // Scale the normal vector to set the end point of the line
    const endPoint = startPoint.clone().add(normalVector.multiplyScalar(lineLength));
    const endPointDiamond = startPoint.clone().add(normalVector.multiplyScalar(lineLengthDiamond));

    const points = [];
    points.push(startPoint); // Start point on the surface
    points.push(endPoint);   // End point in the direction of the normal vector

    const geometry = new THREE.BufferGeometry().setFromPoints(points);
    const material = new THREE.LineBasicMaterial({ color: '#7FFFFF' });
    const line = new THREE.Line(geometry, material);

    // Create just one triangle
    const front = Math.tan(Math.PI / 6);
    const back = Math.cos(Math.PI / 6);
    const vertices = [
      0, 1, 0, // 0: top
      1, 0, front, // 1: right
      -1, 0, front, // 2: left
      0, 0, -back, // 3: back middle
      0, -1, 0, // 4: bottom
    ];
    const faces = [
      2, 1, 2, // Left, right, top
      1, 3, 0, // Right, back, top
      3, 2, 0, // Back, left, top
      2, 4, 1, // Left, bottom, right
      1, 4, 3, // Right, bottom, back
      3, 4, 2, // Back, bottom, left
    ];
    const diamondGeometry = new THREE.PolyhedronGeometry(vertices, faces, 2, 0);
    const diamondMaterial = new THREE.MeshBasicMaterial({ wireframe: true, color: '#7FFFFF' });
    const diamondMesh = new THREE.Mesh(diamondGeometry, diamondMaterial);

    diamondMesh.position.copy(endPointDiamond);
    diamondMesh.lookAt(new THREE.Vector3(0, 0, 0));
    
    Object.defineProperty(diamondMesh, 'data', { value: item});

    const jewelMesh = new PinHead(item).jewelMesh;

    jewelMesh.position.copy(endPointDiamond);
    jewelMesh.lookAt(new THREE.Vector3(0, 0, 0));

    Object.defineProperty(item, 'mesh', { value: line });
    Object.defineProperty(item, 'diamondMesh', { value: diamondMesh });
    Object.defineProperty(item, 'jewelMesh', { value: jewelMesh });
  }
}

export { Places };
