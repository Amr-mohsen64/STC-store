import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { ProductsComponent } from './products/products.component';
import { UserRoutingModule } from './user-routing.module';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule],
  exports: [ProductsComponent],
})
export class UserModule {}
