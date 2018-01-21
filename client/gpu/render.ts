import {Camera, OrthographicCamera, Renderer, Scene, WebGLRenderer} from "three";

class Render {

    private scene: Scene;
    private camera: Camera;
    private renderer: Renderer;

    constructor() {

    }

    private init() {
        this.scene = new Scene();
        this.camera = new OrthographicCamera(-0.5, 0.5, 0.5, 0.5, 1, 100);
        this.renderer = new WebGLRenderer();

        this.renderer.setSize(1280, 720);
        document.body.appendChild(this.renderer.domElement);
        
    }
}