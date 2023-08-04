import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';
import { UserRoutingModule } from './user-routing.module';
import { FormsModule } from '@angular/forms';
import { ProductsComponent } from './components/products/products.component';

@NgModule({
  declarations: [ProductsComponent],
  imports: [CommonModule, SharedModule, UserRoutingModule, FormsModule],
  exports: [ProductsComponent],
})
export class UserModule {}
