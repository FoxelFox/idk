import {
    BoxGeometry, Camera, Mesh, MeshBasicMaterial, OrthographicCamera, PlaneBufferGeometry, Renderer, Scene,
    WebGLRenderer,
    WebGLRenderTarget
} from "three";

export class Render {

    public scene: Scene;
    public camera: Camera;
    public renderer: WebGLRenderer;

    constructor() {
        this.init();
    }

    private init() {
        this.scene = new Scene();
        this.camera = new OrthographicCamera(-0.5, 0.5, 0.5, -0.5, -15, 15);
        this.renderer = new WebGLRenderer({canvas: document.getElementById("draw-area") as HTMLCanvasElement});
        this.renderer.setSize(512, 512);

        let geo = new PlaneBufferGeometry(1, 1);
        let mat = new MeshBasicMaterial({color: 0x00ff00});
        let cube = new Mesh(geo, mat);

        this.scene.add(cube);

        let animate = () => {
            requestAnimationFrame(animate);
            this.renderer.render(this.scene, this.camera);
        };

        animate();
    }
}