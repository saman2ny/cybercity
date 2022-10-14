/* eslint-disable @typescript-eslint/explicit-function-return-type */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundErrorComponent } from '../main/error-page/not-found-error/not-found-error';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
    {
      path: 'users',
      loadChildren: () => import('src/app/main/users/users.module').then(m => m.UsersModule)
    },
    {
      path: 'dashboard',
      loadChildren: () => import('src/app/main/dashboard/dashboard.module').then(m => m.DashboardModule)
    },
    {
      path: '**',
      component: NotFoundErrorComponent
    }
    ]
  }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
