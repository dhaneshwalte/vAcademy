import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
} from '@angular/common/http';
import { AuthService } from './auth.service';
import { take, exhaustMap } from 'rxjs/operators';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    
    return this.authService.user.pipe(
      //Unsubscribe from user after taking 1 value
      take(1),
      //attach inner observable to the outer one.
      exhaustMap((user) => {
        if (!user) {
          //if user does not exist, return default request
          return next.handle(req);
        }

        //Attach User token to all outgoing requests.
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });

        //Send modified request.
        return next.handle(modifiedReq);
      })
    );
  
  }

}
