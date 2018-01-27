import {AppModule} from "./app/app.module";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {Render} from "./gpu/render";

console.log('test');

platformBrowserDynamic().bootstrapModule(AppModule);

let render = new Render();