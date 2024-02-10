import { Component } from "@angular/core";

@Component({
    selector: "app-container",
    standalone: true,
    imports:[],
    template:
    `
        <div class="container h-full w-full flex mx-auto py-4 px-8"><ng-content></ng-content></div>
    `
})

export class ContainerComponent{

}