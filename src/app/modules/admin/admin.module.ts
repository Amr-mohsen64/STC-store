import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsAdminComponent } from './products-admin/products-admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductEditDialogComponent } from './product-edit-dialog/product-edit-dialog.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductDeleteDialogComponent } from './product-delete-dialog/product-delete-dialog.component';

@NgModule({
  declarations: [ProductsAdminComponent, ProductEditDialogComponent, ProductDeleteDialogComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule,
  ],
})
export class AdminModule {}
