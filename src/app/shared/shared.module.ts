import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterLink } from "@angular/router";
import { NgbCollapseModule } from "@ng-bootstrap/ng-bootstrap";

import { AsideComponent } from "./components/aside/aside.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HeaderComponent } from "./components/header/header.component";
import { SidebarComponent } from "./components/sidebar/sidebar.component";
import { CustomDatePipe } from "./pipes/custom-date.pipe";

@NgModule({
  declarations: [
    CustomDatePipe,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    SidebarComponent,
  ],
  imports: [CommonModule, RouterLink, NgbCollapseModule],
  exports: [
    CustomDatePipe,
    HeaderComponent,
    FooterComponent,
    AsideComponent,
    SidebarComponent,
  ],
})
export class SharedModule {}
