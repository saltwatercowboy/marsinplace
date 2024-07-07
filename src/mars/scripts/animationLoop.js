import { Clock } from 'three';

const clock = new Clock();

class Loop{

    constructor(camera, scene, renderer, composer){
        this.camera = camera;
        this.scene = scene;
        this.renderer = renderer;
        this.composer = composer;
        this.updatables = [];
    }

    start(){

        this.renderer.setAnimationLoop(()=>{
            this.renderer.render(this.scene, this.camera);
            this.composer.render();
            this.tick();
        })
    }

    stop(){
        this.renderer.render(null);
    }

    tick(){
        const delta = clock.getDelta();

        for(const object of this.updatables){

            object.tick(delta);
        }
    }
}

export { Loop };