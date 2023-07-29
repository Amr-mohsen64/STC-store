import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { AuthRoutingModule } from './auth-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, AuthRoutingModule, SharedModule],
  exports: [LoginComponent],
})
export class AuthModule {}
