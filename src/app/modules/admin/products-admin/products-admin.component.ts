import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { ProductDeleteDialogComponent } from '../product-delete-dialog/product-delete-dialog.component';
import { ProductEditDialogComponent } from '../product-edit-dialog/product-edit-dialog.component';
import { LoaderService } from './../../../core/services/loader.service';
import { animate, style, transition, trigger } from '@angular/animations';

@Component({
  selector: 'app-products-admin',
  templateUrl: './products-admin.component.html',
  styleUrls: ['./products-admin.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ transform: 'translateX(-100%)', opacity: 0 }),
        animate(
          '500ms ease-out',
          style({ transform: 'translateX(0)', opacity: 1 })
        ),
      ]),
    ]),
  ],
})
export class ProductsAdminComponent implements OnInit {
  products$!: Observable<Product[]>;
  products: Product[] = [];
  displayedColumns: string[] = ['name', 'id', 'price', 'category', 'controls'];

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.products$ = this.productService.getProducts();
    this.getAllProducts();
  }

  getAllProducts() {
    this.loaderService.isLoading = true;
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.loaderService.isLoading = false;
    });
  }

  addProduct() {
    this.dialog
      .open(ProductEditDialogComponent, {
        width: '30%',
      })
      .afterClosed()
      .subscribe((value) => {
        if (value == 'add') {
          this.getAllProducts();
        }
      });
  }

  editProduct(product: Product) {
    this.dialog
      .open(ProductEditDialogComponent, {
        width: '30%',
        data: product,
      })
      .afterClosed()
      .subscribe((value) => {
        if (value == 'update') {
          this.getAllProducts();
        }
      });
  }

  deleteProduct(productId: number) {
    this.dialog
      .open(ProductDeleteDialogComponent, {
        width: '30%',
        data: productId,
      })
      .afterClosed()
      .subscribe((value) => {
        if (value == 'delete') {
          this.getAllProducts();
        }
      });
  }
}
