import {Camera, OrthographicCamera, Renderer, Scene, WebGLRenderer, WebGLRenderTarget} from "three";

export class Render {

    public scene: Scene;
    public camera: Camera;
    public renderer: WebGLRenderer;

    constructor() {

    }

    private init() {
        this.scene = new Scene();
        this.camera = new OrthographicCamera(-0.5, 0.5, 0.5, 0.5, 1, 100);
        this.renderer = new WebGLRenderer();

        this.renderer.setSize(1280, 720);
        document.body.appendChild(this.renderer.domElement);


        let rt = new WebGLRenderTarget(100, 100);

        this.renderer.setRenderTarget(rt);


    }
}