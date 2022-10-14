import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { LoaderModule } from 'src/app/components/loader/loader.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { FeatherModule } from 'angular-feather';
import { InviteUsersComponent } from './invite-users/invite-users.component';
import { MatDividerModule } from '@angular/material/divider';


@NgModule({
  declarations: [
    UsersComponent,
    InviteUsersComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    LoaderModule,
    UsersRoutingModule,
    FeatherModule,
    MatDividerModule
  ],
  exports: [
    UsersComponent
]
})
export class UsersModule { }
