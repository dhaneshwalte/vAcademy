import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isLoggedIn = false;

  //Subscription to the user object.
  private userSub: Subscription;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSub = this.authService.user.subscribe(user => {
      //If user is not null, set loggedIn to true
      this.isLoggedIn = !!user;
    });
  }

  ngOnDestroy(){
    this.userSub.unsubscribe();
  }

  onLogOut(){
    this.authService.logout();
  }
}
