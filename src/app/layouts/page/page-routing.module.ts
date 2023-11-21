import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { PageComponent } from "./page.component";

const routes: Routes = [
  {
    path: "",
    component: PageComponent,
    children: [
      {
        path: "",
        loadChildren: () =>
          import("../../modules/page/home/home.module").then(
            (m) => m.HomeModule
          ),
      },
      {
        path: "about",
        loadChildren: () =>
          import("../../modules/page/about/about.module").then(
            (m) => m.AboutModule
          ),
      },
      {
        path: "terms",
        loadChildren: () =>
          import("../../modules/page/terms/terms.module").then(
            (m) => m.TermsModule
          ),
      },
      {
        path: "privacy",
        loadChildren: () =>
          import("../../modules/page/privacy/privacy.module").then(
            (m) => m.PrivacyModule
          ),
      },
      {
        path: "contact",
        loadChildren: () =>
          import("../../modules/page/contact/contact.module").then(
            (m) => m.ContactModule
          ),
      },
      {
        path: "single",
        loadChildren: () =>
          import("../../modules/page/single/single.module").then(
            (m) => m.SingleModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PageRoutingModule {}
