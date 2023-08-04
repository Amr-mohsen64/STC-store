import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';
import { ProductDeleteDialogComponent } from '../product-delete-dialog/product-delete-dialog.component';
import { ProductEditDialogComponent } from '../product-edit-dialog/product-edit-dialog.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { LoaderService } from 'src/app/core/services/loader/loader.service';
import { ProductService } from 'src/app/core/services/product/product.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

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
  products: Product[] = [];
  displayedColumns: string[] = [
    'name',
    'id',
    'price',
    'category',
    'image',
    'controls',
  ];
  dataSource = new MatTableDataSource<Product>(this.products);
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  constructor(
    private productService: ProductService,
    public dialog: MatDialog,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.getAllProducts();
  }

  getAllProducts() {
    this.loaderService.isLoading = true;
    this.productService.getProducts().subscribe((data) => {
      this.products = data;
      this.dataSource.data = this.products;
      this.dataSource.paginator = this.paginator;
      this.loaderService.isLoading = false;
    });
  }

  addProduct() {
    this.dialog
      .open(ProductEditDialogComponent, {
        minWidth: '30%',
      })
      .afterClosed()
      .subscribe((result: { value: string; data: Product }) => {
        if (result.value == 'add') {
          this.dataSource.data = [
            ...this.dataSource.data,
            { ...result.data, id: this.generateRandomId() },
          ];
        }
      });
  }

  editProduct(product: Product) {
    this.dialog
      .open(ProductEditDialogComponent, {
        minWidth: '30%',
        data: { ...product },
      })
      .afterClosed()
      .subscribe((result: { value: string; data: Product }) => {
        if (result.value == 'update') {
          let copiedProducts = this.products;
          let foundProductIndex = this.dataSource.data.findIndex(
            (foundProduct) => foundProduct.id === product.id
          );

          copiedProducts[foundProductIndex] = {
            ...result.data,
            id: product.id,
          };
          this.dataSource.data = copiedProducts;
        }
      });
  }

  deleteProduct(productId: number) {
    this.dialog
      .open(ProductDeleteDialogComponent, {
        minWidth: '30%',
        data: productId,
      })
      .afterClosed()
      .subscribe((value) => {
        if (value == 'delete') {
          this.dataSource.data = this.products.filter(
            (product) => product.id !== productId
          );
        }
      });
  }

  generateRandomId() {
    const timestamp = new Date().getTime(); // Get current timestamp
    const randomDecimal = Math.random(); // Generate a random decimal between 0 and 1
    const randomNumber = Math.floor(randomDecimal * 1000000); // Convert the random decimal to a 6-digit number
    const randomId = Number(`${timestamp}${randomNumber}`); // Concatenate timestamp and random number

    return randomId;
  }
}
