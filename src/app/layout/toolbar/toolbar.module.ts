import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ToolbarComponent } from './toolbar.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule } from '@angular/router';
import { UserMenuComponent } from 'src/app/layout/toolbar/user-menu/user-menu.component';
import { MatMenuModule } from '@angular/material/menu';
import { ContactUsDialogComponent } from './contact-us-dialog/contact-us-dialog.component';
import { IconsModule } from '../../icons/icons.module';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { ErrorModule } from '../../components/error/error.module';
// import { EnterpriseToolbarComponent } from './enterprise-toolbar/enterprise-toolbar.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SidenavHeaderModule } from 'src/app/components/sidenav-header/sidenav-header.module';
import { MatIconModule } from '@angular/material/icon';


@NgModule({
  declarations: [
    ToolbarComponent,
    UserMenuComponent,
    ContactUsDialogComponent,
    // EnterpriseToolbarComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    RouterModule,
    MatMenuModule,
    IconsModule,
    MatDialogModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatDividerModule,
    ErrorModule,
    MatSlideToggleModule,
    SidenavHeaderModule,
    FormsModule,
    SidenavHeaderModule,
    MatIconModule
  ],
  exports: [
    ToolbarComponent,
    // EnterpriseToolbarComponent
  ],
})
export class ToolbarModule { }
