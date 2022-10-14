import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SidenavHeaderComponent } from './sidenav-header.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { IconsModule } from 'src/app/icons/icons.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    SidenavHeaderComponent
  ],
  imports: [
    CommonModule,
    SharedModule,

    IconsModule,
    MatIconModule,

    MatDividerModule,
  ],
  exports: [
    SidenavHeaderComponent
  ]
})
export class SidenavHeaderModule { }
