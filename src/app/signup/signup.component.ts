import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  mobile: string = '';
  passWord: string = '';
  re_passWord: string = '';
  ngOnInit(): void {
  }
  handleLogin(){
  }
}
