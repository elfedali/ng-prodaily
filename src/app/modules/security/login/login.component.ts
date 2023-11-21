import { Component } from "@angular/core";

@Component({
  selector: "app-login",
  template: `
    login works!
    <div><a routerLink="/">Go home</a></div>
    <div><a routerLink="/s/register">Go to register</a></div>
    <div><a routerLink="/s/forgot-password">Go to forgot password</a></div>
  `,
  styles: [],
})
export class LoginComponent {}
