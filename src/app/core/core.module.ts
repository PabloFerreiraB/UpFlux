import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { MatPaginatorIntl } from '@angular/material/paginator';

import { LogoModule } from '../components/logo/logo.module';
import { NavbarModule } from '../components/navbar/navbar.module';
import { StorageModule } from './storage/storage.module';
import { AUTH_USER_STORAGE } from '../services/auth/auth-user-storage.provider';
import { MatPaginatorIntlPtBr } from './mat-paginator-intl-pt-br/mat-paginator-intl-pt-br';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    LogoModule,
    NavbarModule,
    StorageModule,
  ],
  providers: [
    AUTH_USER_STORAGE,
    { provide: MatPaginatorIntl, useClass: MatPaginatorIntlPtBr },
  ],
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
