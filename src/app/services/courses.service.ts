import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../auth/user.model';
import { Course } from '../shared/course.model';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

	availableCourses: Course[];
	enrolledCourses: Course[];
	constructor() { }

	fetchCourses(){

		this.availableCourses = [
			{
				name: "OS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png",
				price: 700
			  },
			  {
				name: "DBMS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png",
				price: 700
			  },
			  {
				name: "CN",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png",
				price: 700
			  }
		]
	}

	getAvailableCourses(){
		return this.availableCourses;
	}

	fetchEnrolledCourses(){
		this.enrolledCourses = [
			{
				name: "OS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png",
				price: 700
			  },
			  {
				name: "DBMS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png",
				price: 700
			  }
		]
	}

	getAvailableCourse(index: number){
		return this.availableCourses[index];
	}

	getEnrolledCourses(){
		return this.enrolledCourses;
	}

	getEnrolledCourse(index: number){
		return this.enrolledCourses[index];
	}

}
