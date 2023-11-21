import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmailVerifiedComponent } from './email-verified.component';

const routes: Routes = [{ path: '', component: EmailVerifiedComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmailVerifiedRoutingModule { }
