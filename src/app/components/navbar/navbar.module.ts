import { NgModule } from '@angular/core';
import { NavbarComponent } from './navbar.component';
import { LogoModule } from '../logo/logo.module';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [NavbarComponent],
  imports: [LogoModule, MatMenuModule, MatIconModule],
  exports: [NavbarComponent],
})
export class NavbarModule {}
