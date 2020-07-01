import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { AuthResponseData, AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  isLoading = false;
  error: string = null;

  //Observable to listen incoming response from server
  authObs: Observable<AuthResponseData>;

  constructor(private authService: AuthService,
              private router: Router){}
  ngOnInit(): void {
  }
  handleSignup(form: NgForm){
    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    this.authObs = this.authService.signup(email,password);


    this.authObs.subscribe(
      (resData)=>{
        console.log(resData);
        this.isLoading = false;
        this.router.navigate(['/']);
      },
      (errorMessage)=>{
        this.error = errorMessage;
        this.isLoading = false;
      }
    );

    form.reset();
  }
}
