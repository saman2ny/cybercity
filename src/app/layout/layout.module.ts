import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';

import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FooterModule } from './footer/footer.module';
import { ToolbarModule } from './toolbar/toolbar.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    LayoutComponent
  ],
  imports: [
    LayoutRoutingModule,

    CommonModule,
    SharedModule,

    ToolbarModule,
    FooterModule,

    RouterModule,
    MatSidenavModule,
    MatIconModule

  ],
  exports: [
    LayoutComponent
  ]
})
export class LayoutModule { }
