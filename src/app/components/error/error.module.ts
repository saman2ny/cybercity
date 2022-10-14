import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErrorComponent } from './error.component';
import { SharedModule } from '../../shared/shared.module';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    ErrorComponent
  ],
  exports: [
    ErrorComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatInputModule
  ]
})
export class ErrorModule { }
