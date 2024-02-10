import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './core/navbar.component';
import { ContainerComponent } from './shared/container.component';
import { HamburgerMenuComponent } from './core/hamburger-menu.component';
import { HomeComponent } from './features/home.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, ContainerComponent, HamburgerMenuComponent, HomeComponent],
  template: 
  `
  <div class="flex flex-col">
    <header class="fixed md:sticky top-0 w-full md:bg-white">
      <app-container>
        <app-hamburger-menu class="md:hidden w-full flex justify-end"/>
        <app-navbar class="hidden md:flex md:w-full"/>
      </app-container>
    </header> 
    <app-home/>
    <div class="w-full h-[500px] bg-red-400"></div>
    <div class="w-full h-[500px] bg-green-400">
  <router-outlet />
  <div>

  `,
  styles: [],
})
export class AppComponent {
  title = 'Greta e Andrea';
}
