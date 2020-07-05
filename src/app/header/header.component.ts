import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { AuthenticationService } from '../services/authentication.service';
import { Router } from '@angular/router';
import { UserDataService } from '../services/user-data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = true;

  //Subscription to the user object. 
  private userSub: Subscription;

  constructor(private authService: AuthService,private authenticationServie:AuthenticationService,
    private router:Router,private userInfo:UserDataService) { }

  ngOnInit(): void {
    
    this.isLoggedIn=this.authenticationServie.isLoggedIn()
    console.log('header',this.isLoggedIn)
    // this.userSub = this.authService.user.subscribe(user => {
    //   //If user is not null, set loggedIn to true
    //   this.isLoggedIn = !!user;
    // });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogOut(){
    this.authenticationServie.logout()
    this.router.navigate(['/'])
    //this.authService.logout();
  }
}
