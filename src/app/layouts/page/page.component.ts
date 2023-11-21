import { Component } from "@angular/core";

@Component({
  selector: "app-page",
  template: `
    <app-header></app-header>
    <router-outlet></router-outlet>
    <app-footer></app-footer>
  `,
  styles: [],
})
export class PageComponent {}
