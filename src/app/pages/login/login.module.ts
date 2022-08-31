import { NgModule } from '@angular/core';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

import { LogoModule } from 'src/app/components/logo/logo.module';
import { LoginFormModule } from './login-form/login-form.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [LoginRoutingModule, LogoModule, LoginFormModule],
})
export class LoginModule {}
