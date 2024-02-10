import { Component, signal } from "@angular/core";
import { ContainerComponent } from "../shared/container.component";
import { CommonModule } from "@angular/common";

@Component({
    selector:"app-navbar",
    standalone: true,
    imports:[ContainerComponent, CommonModule],
    template:
    `
    <nav class="flex flex-col items-center w-full gap-10">
        <div>
            <h1>A + G</h1>
        </div>
        <div class="flex gap-10">
            <a href="#">BENVENUTI!</a>
            <a href="#">TIMELINE</a>
            <a href="#">CONTATTACI</a>
        </div>
    </nav>
    `
})

export class NavbarComponent{

}