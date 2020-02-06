import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, Validators} from '@angular/forms';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {UserService} from '../../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  private minPasswordLength = 8;
  email = new FormControl('feragon@feragon.net', [Validators.required, Validators.email]);
  password = new FormControl('', [Validators.required, Validators.minLength(this.minPasswordLength)]);

  loginForm = this.fb.group({email: this.email, password: this.password});
  hide = true;

  constructor(private fb: FormBuilder,
              private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  onSubmit() {
    const result = this.userService.login(this.email.value, this.password.value);
    result.then(value => {
      this.router.navigate(['/']);
    });
  }

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email' :
        '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter a password' :
      this.password.hasError('minlength') ? 'Password must be at least ' + this.minPasswordLength + ' chars long' :
        '';
  }
}
