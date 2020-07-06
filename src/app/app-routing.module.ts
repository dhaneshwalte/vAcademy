import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/all-courses/courses.component';
import { MycoursesComponent } from './courses/mycourses/mycourses.component';
import { AuthGuard } from './auth/auth.guard';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CoursePayComponent } from './courses/course-detail/course-pay/course-pay.component';
import { ViewCourseComponent } from './courses/mycourses/view-course/view-course.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';

const appRoutes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
	  path: 'courses',
	  canActivateChild: [AuthGuard],
	  children: [
		  { path: '', component: CoursesComponent },
		  { path: 'my', component: MycoursesComponent },
		  {path: 'add-course', component: AddCourseComponent},
	  {
		path: 'my/:id',
		component: ViewCourseComponent,
	  },
      {
        path: ':id',
        component: CourseDetailComponent,
	  },
	  {
        path: ':id/pay/:id',
        component: CoursePayComponent,
      }
    ],
  },
  { path: 'home', component: HomepageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'profile', component: ProfileComponent },
  // {path: '', redirectTo: '/recipes', pathMatch: 'full' },
  // {path: 'recipes', component: RecipesComponent, children:[
  // 	{path: '', component: RecipeStartComponent},
  // ]},
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
