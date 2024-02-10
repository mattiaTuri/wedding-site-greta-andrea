import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    template: 
    `
    <div class="h-screen w-full relative flex"> 
        <img src="../../assets/images/bg.jpg" class="w-full h-full object-cover object-[55%] ">
        <div class="absolute w-full h-full flex flex-col justify-center items-center md:flex-row gap-10 text-white text-5xl md:text-7xl">
            <h1>GRETA SERPELLONI</h1>
            <h1>&</h1>
            <h1>ANDREA DE MARCO</h1>
        </div>
    </div>
    `,
    styles: [],
  })
  export class HomeComponent {
  }
  