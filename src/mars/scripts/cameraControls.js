import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function createControls(camera, canvas) {
    const controls = new OrbitControls(camera, canvas);

    controls.enableDamping = true;
 
    // restricting zoom in and zoom out
    controls.minDistance = 430;
    controls.maxDistance = 2600;

    return controls;
}

export { createControls };