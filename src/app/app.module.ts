import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/all-courses/courses.component';
import { CourseComponent } from './courses/course/course.component';
import { ProfileComponent } from './profile/profile.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptorService } from './auth/auth-interceptor.service';
import { MycoursesComponent } from './courses/mycourses/mycourses.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HeaderComponent } from './header/header.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    CoursesComponent,
    CourseComponent,
    ProfileComponent,
    MycoursesComponent,
    LoadingSpinnerComponent,
    HeaderComponent,
    CourseDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
