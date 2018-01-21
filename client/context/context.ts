import {Render} from "../gpu/render";

export class Game {

    private renderer: Render;

    constructor() {
        this.renderer = new Render();
    }
}