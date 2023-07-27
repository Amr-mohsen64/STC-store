import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from './services/product.service';

@NgModule({
  declarations: [ProductService],
  imports: [CommonModule],
})
export class CoreModule {}
