import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { SecurityComponent } from "./security.component";

const routes: Routes = [
  { path: "", component: SecurityComponent },
  {
    path: "login",
    loadChildren: () =>
      import("../../modules/security/login/login.module").then(
        (m) => m.LoginModule
      ),
  },
  {
    path: "register",
    loadChildren: () =>
      import("../../modules/security/register/register.module").then(
        (m) => m.RegisterModule
      ),
  },
  {
    path: "forgot-password",
    loadChildren: () =>
      import(
        "../../modules/security/forgot-password/forgot-password.module"
      ).then((m) => m.ForgotPasswordModule),
  },
  {
    path: "reset-password",
    loadChildren: () =>
      import(
        "../../modules/security/reset-password/reset-password.module"
      ).then((m) => m.ResetPasswordModule),
  },
  {
    path: "verify-email",
    loadChildren: () =>
      import("../../modules/security/verify-email/verify-email.module").then(
        (m) => m.VerifyEmailModule
      ),
  },
  {
    path: "email-verified",
    loadChildren: () =>
      import(
        "../../modules/security/email-verified/email-verified.module"
      ).then((m) => m.EmailVerifiedModule),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SecurityRoutingModule {}
