import { Component } from '@angular/core';

@Component({
  selector: 'app-trainees-list',
  templateUrl: './trainees-list.component.html',
  styleUrls: ['./trainees-list.component.css'],
})
export class TraineesListComponent {
  Trainees: Array<any> = [
    {
      name: 'Sonal',
      technology: 'C#',
      course_completed: true,
      grade: 8,
    },
    {
      name: 'Abhijit',
      technology: 'Python',
      course_completed: false,
      grade: 8,
    },
    {
      name: 'Himanshu',
      technology: 'Figma',
      course_completed: true,
      grade: 8,
    },
    {
      name: 'Dinesh',
      technology: 'Java',
      course_completed: true,
      grade: 8,
    },
  ];
}
