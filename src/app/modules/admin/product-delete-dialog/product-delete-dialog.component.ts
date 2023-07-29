import { SnackBarService } from './../../../core/services/snack-bar.service';
import { ProductService } from 'src/app/core/services/product.service';
import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-product-delete-dialog',
  templateUrl: './product-delete-dialog.component.html',
  styleUrls: ['./product-delete-dialog.component.scss'],
})
export class ProductDeleteDialogComponent implements OnInit {
  constructor(
    private productService: ProductService,
    @Inject(MAT_DIALOG_DATA) public productId: number,
    private snackBarService: SnackBarService,
    private dialogRef: MatDialogRef<ProductDeleteDialogComponent>
  ) {}

  ngOnInit(): void {}

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe({
      next: () => {
        this.dialogRef.close('delete');
        this.snackBarService.openSnackBar('product deleted succefully');
      },
    });
  }
}
