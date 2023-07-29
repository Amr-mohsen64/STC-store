import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { authGuard } from 'src/app/core/guards/auth.guard';

const routes: Routes = [
  { path: '', redirectTo: '/admin-view/products', pathMatch: 'full' },
  {
    path: 'admin-view/products',
    component: ProductsAdminComponent,
    canActivate: [authGuard],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}