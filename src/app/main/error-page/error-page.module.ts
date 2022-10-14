import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { ErrorPageRoutingModule } from './error-page-routing.module';
import { NotFoundErrorComponent } from './not-found-error/not-found-error';

@NgModule({
  declarations: [
    NotFoundErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    ErrorPageRoutingModule
  ],
  exports: [
    NotFoundErrorComponent
  ]
})
export class ErrorPageModule { }
