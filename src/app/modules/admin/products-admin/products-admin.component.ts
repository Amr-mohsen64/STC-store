import { ProductService } from 'src/app/core/services/product.service';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/models/product.model';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
})
export class ProductsAdminComponent implements OnInit {
  products$!: Observable<Product[]>;
  products: Product[] = [];
  displayedColumns: string[] = ['name', 'id', 'price', 'category', 'controls'];

  constructor(
    private productService: ProductService
  ) // public dialog: MatDialog
  {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.productService
      .getProducts()
      .subscribe((data) => (this.products = data));
  }

  addProduct() {
    console.log('add');
  }

  editProduct(productId: number) {
    // this.productService.updateProduct()
  }
  deleteProduct(productId: number) {
    console.log(productId);

    // this.productService.deleteProduct(productId);
  }
}
