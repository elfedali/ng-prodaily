import { SharedModule } from "src/app/shared/shared.module";

import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";

import { PageRoutingModule } from "./page-routing.module";
import { PageComponent } from "./page.component";

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, PageRoutingModule, SharedModule],
})
export class PageModule {}
