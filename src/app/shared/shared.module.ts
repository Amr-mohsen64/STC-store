import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LoaderComponent } from './components/loader/loader.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    HeaderComponent,
    ProductCardComponent,
    FooterComponent,
    LoaderComponent,
  ],
  imports: [RouterModule, CommonModule, MaterialModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
    LoaderComponent,
  ],
})
export class SharedModule {}
