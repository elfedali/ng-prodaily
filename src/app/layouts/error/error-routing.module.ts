import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { ErrorComponent } from "./error.component";

const routes: Routes = [
  {
    path: "",
    component: ErrorComponent,
    children: [
      {
        path: "404",
        loadChildren: () =>
          import("../../modules/error/not-found/not-found.module").then(
            (m) => m.NotFoundModule
          ),
      },
      {
        path: "403",
        loadChildren: () =>
          import("../../modules/error/forbidden/forbidden.module").then(
            (m) => m.ForbiddenModule
          ),
      },

      {
        path: "500",
        loadChildren: () =>
          import("../../modules/error/server-error/server-error.module").then(
            (m) => m.ServerErrorModule
          ),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ErrorRoutingModule {}
