import { Component, signal } from "@angular/core";
import { ContainerComponent } from "../shared/container.component";
import { CommonModule } from "@angular/common";

@Component({
    selector:"app-hamburger-menu",
    standalone: true,
    imports:[ContainerComponent, CommonModule],
    template:
    `
    <div class="p-4 bg-white rounded-full">
        <button (click)="openHamburgerMenu()" [ngClass]="{'rotate-180': openMenu()}" class="h-[20px] flex flex-col justify-between duration-700 ease">
            <span [ngClass]="{'origin-bottom-right -rotate-45 -translate-x-[0.2rem]': openMenu()}" class="h-[2px] w-[25px] bg-black duration-300 ease delay-100"></span>
            <span [ngClass]="{'opacity-0': openMenu()}" class="h-[2px] w-[25px] bg-black duration-300 ease delay-100"></span>
            <span [ngClass]="{'origin-top-right rotate-45 -translate-x-[0.2rem]': openMenu()}" class="h-[2px] w-[25px] bg-black duration-300 ease delay-100"></span>
        </button> 
    </div>
    `
})

export class HamburgerMenuComponent{
    openMenu = signal<boolean>(false)

    openHamburgerMenu(){
        this.openMenu.update(c => !c)
    }
}