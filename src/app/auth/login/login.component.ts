import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService, AuthResponseData } from '../auth.service';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { format } from 'path';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  isAdmin = false;
  isLoading = false;
  error: string = null;
  //Observable to emit userlogin
  authObs: Observable<AuthResponseData>;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {}

  handleLogin(form: NgForm) {
    this.isLoading = true;
    if (this.isAdmin) {
      console.log('Admin');
      this.isLoading = false;
      this.error = 'Admin Component is under construction!';
    } else {
      this.handleStudentLogin(form.value.email, form.value.password);
    }
    form.reset();
  }

  handleStudentLogin(email: string, password: string) {
    this.authObs = this.authService.loginStudent(email, password);

    this.authObs.subscribe(
      (resData) => {
        //OnSuccessful Login
        this.isLoading = false;
        console.log(resData);
        this.router.navigate(['/courses']);
      },
      (errorMessage) => {
        //On Unsuccessful login
        this.error = errorMessage;
        this.isLoading = false;
      }
    );
  }
}
