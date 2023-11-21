import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

const routes: Routes = [
  {
    path: "p",
    loadChildren: () =>
      import("./layouts/page/page.module").then((m) => m.PageModule),
  },
  {
    path: "",
    loadChildren: () =>
      import("./layouts/default/default.module").then((m) => m.DefaultModule),
  },
  {
    path: "s",
    loadChildren: () =>
      import("./layouts/security/security.module").then(
        (m) => m.SecurityModule
      ),
  },
  {
    path: "e",
    loadChildren: () =>
      import("./layouts/error/error.module").then((m) => m.ErrorModule),
  },
  {
    path: "**",
    redirectTo: "e/404",
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
