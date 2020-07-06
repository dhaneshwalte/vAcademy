import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  availableCourses: Course[]
  constructor(private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.availableCourses = this.coursesService.getAvailableCourses();
  }
  
}
