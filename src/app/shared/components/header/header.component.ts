import { Component } from "@angular/core";

@Component({
  selector: "app-header",
  template: ` <nav
    class="navbar navbar-expand-lg navbar-light bg-body-tertiary mb-3"
  >
    <div class="container-fluid">
      <a class="navbar-brand" [routerLink]="'.'">Blog</a>
      <button
        class="navbar-toggler"
        type="button"
        (click)="isMenuCollapsed = !isMenuCollapsed"
      >
        &#9776;
      </button>

      <div [ngbCollapse]="isMenuCollapsed" class="collapse navbar-collapse">
        <ul class="navbar-nav">
          <li class="nav-item active">
            <a class="nav-link" routerLink="/" (click)="isMenuCollapsed = true"
              >Home</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLink="/about"
              (click)="isMenuCollapsed = true"
              >About</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLink="/contact"
              (click)="isMenuCollapsed = true"
              >contact</a
            >
          </li>
        </ul>
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a
              class="nav-link"
              routerLink="/s/login"
              (click)="isMenuCollapsed = true"
              >Login</a
            >
          </li>
          <li class="nav-item">
            <a
              class="nav-link"
              routerLink="/s/register"
              (click)="isMenuCollapsed = true"
              >Register</a
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>`,
  styles: [],
})
export class HeaderComponent {
  isMenuCollapsed = true;
}
