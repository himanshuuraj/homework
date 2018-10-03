import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subject-list',
  templateUrl: './subject-list.component.html',
  styleUrls: ['./subject-list.component.css']
})
export class SubjectListComponent implements OnInit {

  subjectList : Array<Object> = [
    {subjectId : "subject1", subjectName : "Mathematics", startDate : "8:00 AM", endDate : "9:00 AM"},
    {subjectId : "subject2", subjectName : "Physics", startDate : "9:00 AM", endDate : "10:00 AM"},
    {subjectId : "subject3", subjectName : "Chemistry", startDate : "10:00 AM", endDate : "11:00 AM"}
  ]

  constructor() { }

  ngOnInit() {
  }

}
