import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { ProductService } from 'src/app/core/services/product.service';
import { Product } from 'src/app/shared/models/product.model';
import { SnackBarService } from './../../../core/services/snack-bar.service';

@Component({
  selector: 'app-product-edit-dialog',
  templateUrl: './product-edit-dialog.component.html',
  styleUrls: ['./product-edit-dialog.component.scss'],
})
export class ProductEditDialogComponent implements OnInit {
  productForm!: FormGroup;
  categories: string[] = [];

  constructor(
    @Inject(MAT_DIALOG_DATA) public productEditData: Product,
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private dialogRef: MatDialogRef<ProductEditDialogComponent>,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.loadCategories();
    this.intFormControls();
    this.setFormDataInEditMode();
  }

  intFormControls() {
    this.productForm = this.formBuilder.group({
      title: ['', Validators.required],
      category: ['', Validators.required],
      price: ['', Validators.required],
      description: ['', Validators.required],
      image: ['', Validators.required],
    });
  }

  setFormDataInEditMode() {
    if (this.productEditData) {
      this.productForm.controls['title'].setValue(this.productEditData.title);
      this.productForm.controls['category'].setValue(
        this.productEditData.category
      );
      this.productForm.controls['price'].setValue(this.productEditData.price);
      this.productForm.controls['description'].setValue(
        this.productEditData.description
      );
      this.productForm.controls['image'].setValue(this.productEditData.image);
    }
  }

  loadCategories() {
    this.productService.getCategories().subscribe((categories) => {
      this.categories = categories;
    });
  }

  onSaveProduct() {
    if (this.productForm.valid) {
      if (!this.productEditData) {
        this.addProduct();
      } else {
        this.updateProduct();
      }
    }
  }

  addProduct() {
    this.productService.addProduct(this.productForm.value).subscribe({
      next: (res) => {
        this.productForm.reset();
        this.dialogRef.close('add');
        this.snackBarService.openSnackBar(
          'Product Added Succesfully!',
          'blue-snackbar'
        );
      },
      error: (error) => {
        this.snackBarService.openSnackBar('Error in creating Product!');
      },
    });
  }

  updateProduct() {
    this.productService
      .updateProduct({ ...this.productForm.value, id: this.productEditData.id })
      .subscribe({
        next: (res) => {
          this.productForm.reset();
          this.dialogRef.close('update');
          this.snackBarService.openSnackBar(
            'Product updated Succesfully!',
            'blue-snackbar'
          );
        },
        error: (error) => {
          this.snackBarService.openSnackBar('Error in updating Product!');
        },
      });
  }
}
