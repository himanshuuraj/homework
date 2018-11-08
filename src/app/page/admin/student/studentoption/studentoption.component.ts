import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-studentoption',
  templateUrl: './studentoption.component.html',
  styleUrls: ['./studentoption.component.css']
})
export class StudentoptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "addStudent",  value: "Add Student"},
    {id : "studentList",  value: "Student List"},
    //{id : "editClassAndSection",  value: "Edit Class"},
    {id : "deleteStudent",  value: "Delete Student"}
  ];

  teacherOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    if(id === "addStudent")
      this.router.navigate(['signup', {type: "student"}]);
    else if(id === "deleteStudent")
      this.router.navigate([id, {delete: true}]);
    else
      this.router.navigateByUrl(id);

  }
  

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
