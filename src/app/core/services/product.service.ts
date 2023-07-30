import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from 'src/app/shared/models/product.model';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>('https://fakestoreapi.com/products');
  }

  getProductsByCategory(categoryName: string): Observable<Product[]> {
    return this.http.get<Product[]>(
      `https://fakestoreapi.com/products/category/${categoryName}`
    );
  }

  getProductById(productId: number): Observable<Product> {
    return this.http.get<Product>(
      `https://fakestoreapi.com/products/${productId}`
    );
  }

  getCategories(): Observable<string[]> {
    return this.http.get<string[]>(
      'https://fakestoreapi.com/products/categories'
    );
  }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(
      'https://fakestoreapi.com/products',
      product
    );
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(
      `https://fakestoreapi.com/products/${product.id}`,
      product
    );
  }

  deleteProduct(productId: number): Observable<Product> {
    return this.http.delete<Product>(
      `https://fakestoreapi.com/products/${productId}`
    );
  }
}
