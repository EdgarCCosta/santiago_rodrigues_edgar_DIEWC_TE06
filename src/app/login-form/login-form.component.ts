import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent {
  username: string = 'esantiagoridrigues';
  password: string = 'esr1122';
  isLoginSuccessful: boolean = false;

  constructor(private authService: AuthService) {}

  login(): void {
    if (this.username === 'esantiagoridrigues' && this.password === 'esr1122') {
      this.authService.loggedIn = true;
      this.isLoginSuccessful = true;
    } else {
    }
  }
}
