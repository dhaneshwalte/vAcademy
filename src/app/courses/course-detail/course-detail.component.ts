import { Component, OnInit } from '@angular/core';
import { Course } from 'src/app/shared/course.model';
import { ActivatedRouteSnapshot, ActivatedRoute, Params } from '@angular/router';
import { CoursesService } from 'src/app/services/courses.service';

@Component({
  selector: 'app-course-detail',
  templateUrl: './course-detail.component.html',
  styleUrls: ['./course-detail.component.css']
})
export class CourseDetailComponent implements OnInit {

  course: Course;
  index: number; 
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  ngOnInit(): void {
    this.index = +this.route.snapshot.params['id'];
    this.course = this.coursesService.getAvailableCourse(this.index);
  }

  enrollCourse(){

  }

}
