import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { authGuard } from 'src/app/core/guards/auth.guard';
import { permissionGuard } from 'src/app/core/guards/permission.guard';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/user-view/products',
    pathMatch: 'full',
  },
  {
    path: 'user-view/products',
    component: ProductsComponent,
    canActivate: [authGuard, permissionGuard],
    data: { permissions: 'user' },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class UserRoutingModule {}
