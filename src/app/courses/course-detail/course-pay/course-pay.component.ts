import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Course } from 'src/app/shared/course.model';
import { CoursesService } from 'src/app/services/courses.service';

declare var paypal;

@Component({
  selector: 'app-course-pay',
  templateUrl: './course-pay.component.html',
  styleUrls: ['./course-pay.component.css']
})
export class CoursePayComponent implements OnInit {
  index: number;
  course: Course;
  @ViewChild('paypal', { static: true }) paypalElement: ElementRef;
  constructor(private route: ActivatedRoute,
              private coursesService: CoursesService) { }

  paidFor = false;
  ngOnInit() {
    this.index = this.route.snapshot.params['id'];
    this.course = this.coursesService.getAvailableCourse(this.index);
    paypal
      .Buttons({
        createOrder: (data, actions) => {
          return actions.order.create({
            purchase_units: [
              {
                description: this.course.name,
                amount: {
                  currency_code: 'USD',
                  value: this.course.price
                }
              }
            ]
          });
        },
        onApprove: async (data, actions) => {

          //Payment Approved
          //Create API Call
          const order = await actions.order.capture();
          this.paidFor = true;
          console.log(order);
        },
        onError: err => {
          
          console.log(err);
        }
      })
      .render(this.paypalElement.nativeElement);
  }

}
