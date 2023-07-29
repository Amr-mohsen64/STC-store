import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  constructor(private _snackBar: MatSnackBar) {}

  openSnackBar(message: string, cssClass?: string) {
    const snackBarConfig: MatSnackBarConfig<any> = {
      horizontalPosition: 'start',
      verticalPosition: 'bottom',
      duration: 3000,
    };

    //TODO
    if (cssClass) {
      // If 'cssClass' is provided, add it to the 'panelClass' property
      snackBarConfig['panelClass'] = [cssClass];
    }
    this._snackBar.open(message, 'close', snackBarConfig);
  }
}
