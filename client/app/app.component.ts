import {Component, OnInit} from "@angular/core";
import {Render} from "../gpu/render";

@Component({
    selector: "app",
    templateUrl: "./app.component.html"
})
export class AppComponent implements OnInit {

    private gpu: Render;

    constructor() {
        console.log("halllo")
    }

    public ngOnInit() {
        this.gpu = new Render();
    }
}