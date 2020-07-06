import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router,
  UrlTree,
} from '@angular/router';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { map, take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService, private router: Router) {}
  
  canActivate(
    route: ActivatedRouteSnapshot,
    router: RouterStateSnapshot
  ): boolean | Promise<boolean | UrlTree> | Observable<boolean | UrlTree> {
    
    //get user object
    return this.authenticationService.isLoggedIn();
    // return this.authService.user.pipe(
    //   //get user object once and unsubscribe
    //   take(1),
    //   map((user) => {

    //     //Check if user object exists
    //     const isAuth = !!user;

    //     if (isAuth) {
    //       //return true if exists
    //       return true;
    //     }

    //     //redirect to login page if user object not found
    //     return this.router.createUrlTree(['/login']);
    //   })
    // );
  }

}
