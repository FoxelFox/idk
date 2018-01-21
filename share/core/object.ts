import {Component} from "./component";

export class Object {

    private components: {[key: string]: Component} = {};

    constructor() {

    }

    has<T extends Component>(type: T): boolean {
        return !!this.components[type.name];
    }

    get<T extends Component>(type: T): Component {
        return this.components[type.name];
    }

    set(component: Component) {
        this.components[component.name] = component;
    }
}