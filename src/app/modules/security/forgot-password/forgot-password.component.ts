import { Component } from "@angular/core";

@Component({
  selector: "app-forgot-password",
  template: `
    forgot-password works!
    <div><a routerLink="/">Go home</a></div>
    <div><a routerLink="/s/login">Go to login</a></div>
    <div><a routerLink="/s/register">Go to register</a></div>
  `,
  styles: [],
})
export class ForgotPasswordComponent {}
