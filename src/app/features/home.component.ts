import { Component } from "@angular/core";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [],
    template: 
    `
    <div class="h-screen">
        <img src="../../assets/images/bg.jpg" class="w-full h-full object-cover object-[55%]">
    </div>
    `,
    styles: [],
  })
  export class HomeComponent {
  }
  