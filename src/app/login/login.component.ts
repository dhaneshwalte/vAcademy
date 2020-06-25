import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userName: string = '';
  passWord: string = '';
  errorMessage: string = '';
  isInvalidUser: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  handleLogin(){
    console.log(this.userName + this.passWord);
  }
}
