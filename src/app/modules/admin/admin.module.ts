import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDeleteDialogComponent } from './components/product-delete-dialog/product-delete-dialog.component';
import { ProductsAdminComponent } from './components/products-admin/products-admin.component';
import { ProductEditDialogComponent } from './components/product-edit-dialog/product-edit-dialog.component';

@NgModule({
  declarations: [
    ProductsAdminComponent,
    ProductEditDialogComponent,
    ProductDeleteDialogComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
