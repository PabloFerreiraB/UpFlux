import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { LogoModule } from '../components/logo/logo.module';
import { NavbarModule } from '../components/navbar/navbar.module';

@NgModule({
  imports: [CommonModule, HttpClientModule, LogoModule, NavbarModule],
  providers: [],
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule has already been instantiated. Import it only in AppModule'
      );
    }
  }
}
