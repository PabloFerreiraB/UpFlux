import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginForm } from 'src/app/models/login-form';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  imagePath = '';

  constructor(private router: Router, private authService: AuthService) {}

  submitForm(userData: LoginForm): void {
    this.authService.auth(userData).subscribe({
      next: () => this.router.navigateByUrl('home'),
      error: (error) => console.log(error),
    });
  }
}
