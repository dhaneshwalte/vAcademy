import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-mycourses',
  templateUrl: './mycourses.component.html',
  styleUrls: ['./mycourses.component.css']
})
export class MycoursesComponent implements OnInit {

  enrolledCourses: Course[] = []

  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    //console.log("My Courses")
    this.enrolledCourses = this.coursesService.getEnrolledCourses();
  }

}
