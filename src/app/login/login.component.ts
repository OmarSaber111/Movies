import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  error: string = '';

  constructor(private _authService: AuthService, private _router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email]),
    password: new FormControl(null, [Validators.required])
  });

  submitLoginForm(loginForm: FormGroup) {
    this._authService.Login(loginForm.value).subscribe(response => {
      if (response.message === 'success') {
        localStorage.setItem('userToken',response.token)
        this._authService.saveCurrentUser()
        this._router.navigate(['/home']);
      } else {
        this.error = response.message || 'Login failed';
      }
    });
  }
}
