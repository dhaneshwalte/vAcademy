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
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png"
			  },
			  {
				name: "DBMS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png"
			  },
			  {
				name: "CN",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png"
			  }
		]
	}

	getAvailableCourses(){
		return this.availableCourses.slice();
	}

	fetchEnrolledCourses(){
		this.enrolledCourses = [
			{
				name: "OS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png"
			  },
			  {
				name: "DBMS",
				duration: "3",
				imageUrl: "https://code.org/shared/images/social-media/codeorg2019_social.png"
			  }
		]
	}

	getEnrolledCourses(){
		return this.enrolledCourses.slice();
	}

}
