import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { TargetBlankDirective } from './target-blank.directive';

@NgModule({
  declarations: [
    TargetBlankDirective
  ],
  exports: [
    TargetBlankDirective
  ],
  imports: [
    CommonModule
  ]
})
export class DirectivesModule { }
