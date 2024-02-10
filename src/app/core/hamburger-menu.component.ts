import { Component, signal } from "@angular/core";
import { ContainerComponent } from "../shared/container.component";
import { CommonModule } from "@angular/common";

@Component({
    selector:"app-hamburger-menu",
    standalone: true,
    imports:[ContainerComponent, CommonModule],
    template:
    `
    <div class="p-4 rounded-full" [ngClass]="openMenu() ? 'bg-transparent' : 'bg-white'">
        <button (click)="openHamburgerMenu()" [ngClass]="{'rotate-180': openMenu()}" class="h-[20px] flex flex-col justify-between duration-700 ease z-10 relative">
            <span [ngClass]="{'origin-bottom-right -rotate-45 -translate-x-[0.2rem]': openMenu()}" class="h-[2px] w-[25px] bg-black duration-300 ease delay-100"></span>
            <span [ngClass]="{'opacity-0': openMenu()}" class="h-[2px] w-[25px] bg-black duration-300 ease delay-100"></span>
            <span [ngClass]="{'origin-top-right rotate-45 -translate-x-[0.2rem]': openMenu()}" class="h-[2px] w-[25px] bg-black duration-300 ease delay-100"></span>
        </button> 
        <div class="bg-white absolute h-screen w-full top-0 duration-300 ease opacity-90" [ngClass]="openMenu() ? 'left-0' : 'left-full'">
            <div class="absolute top-8 px-8">
                <h3 class="font-bold">MENU</h3>
            </div>       
            <div class="absolute top-24 h-[0.5px] w-full bg-black"></div>
            <div class="flex flex-col gap-10 h-full justify-center items-center font-bold">
                <a href="#">BENVENUTI!</a>
                <a href="#">TIMELINE</a>
                <a href="#">CONTATTACI</a>
            </div>
        <div>
    </div>
    `
})

export class HamburgerMenuComponent{
    openMenu = signal<boolean>(false)

    openHamburgerMenu(){
        this.openMenu.update(c => !c)
    }
}