import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmailVerifiedRoutingModule } from './email-verified-routing.module';
import { EmailVerifiedComponent } from './email-verified.component';


@NgModule({
  declarations: [
    EmailVerifiedComponent
  ],
  imports: [
    CommonModule,
    EmailVerifiedRoutingModule
  ]
})
export class EmailVerifiedModule { }
