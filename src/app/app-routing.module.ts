import { ProfileComponent } from './profile/profile.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CoursesComponent } from './courses/all-courses/courses.component';
import { MycoursesComponent } from './courses/mycourses/mycourses.component';
import { AuthGuard } from './auth/auth.guard';

const appRoutes: Routes = [
	{path: '', redirectTo: '/home', pathMatch: 'full'},
	{path: 'courses', component: CoursesComponent},
	{path: 'home', component: HomepageComponent},
	{path: 'login', component: LoginComponent},
	{path: 'signup', component: SignupComponent},
	{path: 'profile', component: ProfileComponent},
	{path: 'mycourses', component: MycoursesComponent, canActivate: [AuthGuard]}
	// {path: '', redirectTo: '/recipes', pathMatch: 'full' },
	// {path: 'recipes', component: RecipesComponent, children:[
	// 	{path: '', component: RecipeStartComponent},
	// ]},
];
@NgModule({
	imports: [
		RouterModule.forRoot(appRoutes)
	],
	exports: [RouterModule]
})
export class AppRoutingModule{

}