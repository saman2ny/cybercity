import {NgModule} from '@angular/core';
import {TranslocoModule, TranslocoPipe} from '@ngneat/transloco';
import {MatTooltipModule} from '@angular/material/tooltip';
import {FlexModule} from '@angular/flex-layout';
import { DirectivesModule } from '../directives/directives.module';

@NgModule({
  declarations: [],
  imports: [
    TranslocoModule,
    FlexModule,
  ],
  exports: [
    TranslocoPipe,
    MatTooltipModule,
    FlexModule,
    DirectivesModule
  ]
})
export class SharedModule { }
