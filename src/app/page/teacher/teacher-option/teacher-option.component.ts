import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-option',
  templateUrl: './teacher-option.component.html',
  styleUrls: ['./teacher-option.component.css']
})
export class TeacherOptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "addHomework",  value: "Add Homework"},
    {id : "viewDetails",  value: "View Details"},
    // {id : "editClassAndSection",  value: "Edit Class"},
    {id : "updateHomework",  value: "Update Homework"}
  ];

  classOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    this.router.navigateByUrl(id);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
