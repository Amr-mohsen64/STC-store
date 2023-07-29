import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { LoaderService } from './../../../core/services/loader.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
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
export class ProductsComponent implements OnInit {
  categories$!: Observable<string[]>;
  products: Product[] = [];
  selectedCategory: string | null = null;

  constructor(
    private productService: ProductService,
    private loaderService: LoaderService
  ) {}

  ngOnInit(): void {
    this.loadAllProducts();
    this.loadCategories();
    console.log(this.selectedCategory);
  }

  loadCategories() {
    this.categories$ = this.productService.getCategories();
  }

  loadAllProducts() {
    this.loaderService.isLoading = true;
    this.productService.getProducts().subscribe((products) => {
      this.products = products;
      this.loaderService.isLoading = false;
    });
  }

  loadProductsBySelectedCategory() {
    this.loaderService.isLoading = true;
    this.productService
      .getProductsByCategory(this.selectedCategory as string)
      .subscribe((products) => {
        this.products = products;
        this.loaderService.isLoading = false;
      });
  }

  filterCategories() {
    if (this.selectedCategory) {
      this.loadProductsBySelectedCategory();
    } else {
      this.loadAllProducts();
    }
  }
}
