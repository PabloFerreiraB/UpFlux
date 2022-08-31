import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginForm } from 'src/app/models/login-form';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  form!: FormGroup;
  hidePassword = true;
  @Output() submitForm = new EventEmitter<LoginForm>();

  buttonConfig = {
    styles: {
      cursor: 'pointer',
      position: 'relative',
      backgroundColor: '#0099dc',
      color: '#fff',
      fontFamily: 'Roboto',
      fontSize: '14px',
      fontWeight: '500',
      lineHeight: '16px',
      borderRadius: '4px',
      border: 'none',
      padding: '10px 15px',
      marginTop: '4px',
      width: '100%',
    },
    text: 'entrar',
  };

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.form = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  changePasswordVisibility(): void {
    this.hidePassword = !this.hidePassword;
  }

  onSubmit(): void {
    if (this.form.valid)
      this.submitForm.emit(this.form.getRawValue() as LoginForm);
  }
}
