import { DirectionalLight, AmbientLight } from 'three';

const createLight = ()=>{
    const ambientLight = new AmbientLight('#c0bfad', 5);

    const mainLight = new DirectionalLight('#c0bfad', 3);
    const softenerLightLower = new DirectionalLight('#c0bfad', 0.5);
    mainLight.castShadow = true;

    // position light
    mainLight.position.set(1200,700,700);
    softenerLightLower.position.set(1200,500,700);

    var side = 300;
    mainLight.shadow.camera.top = side;
    mainLight.shadow.camera.bottom = -side;
    mainLight.shadow.camera.left = side;
    mainLight.shadow.camera.right = -side;

    mainLight.shadow.mapSize.width = 500; // default
    mainLight.shadow.mapSize.height = 500; // default
    mainLight.shadow.camera.near = 1350; // default
    mainLight.shadow.camera.far = 2200; // default

    return {mainLight, softenerLightLower, ambientLight};
}

export { createLight };