import { NgModule } from '@angular/core';
import { ShowDatePipe } from './date.pipe';

@NgModule({
  declarations: [
    ShowDatePipe
  ],
  exports: [
    ShowDatePipe
  ],
  providers: [
  ]
})
export class PipesModule { }
