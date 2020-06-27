import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  isAdmin = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(form: NgForm){
    const value = form.value;
    console.log(value.email + value.password);
    if(this.isAdmin){
      console.log('Admin');
    }else{
      console.log('Studente');
    }
  }
}
