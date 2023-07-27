import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { FooterComponent } from './components/footer/footer.component';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from '../app-routing.module';
import { LoaderComponent } from './components/loader/loader.component';

@NgModule({
  declarations: [HeaderComponent, ProductCardComponent, FooterComponent, LoaderComponent],
  imports: [CommonModule, MaterialModule, AppRoutingModule],
  exports: [
    MaterialModule,
    HeaderComponent,
    FooterComponent,
    ProductCardComponent,
  ],
})
export class SharedModule {}
