import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-teacher-option',
  templateUrl: './teacher-option.component.html',
  styleUrls: ['./teacher-option.component.css']
})
export class TeacherOptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "addTeacher",  value: "Add Teacher"},
    {id : "teacherList",  value: "View Teacher List"},
    //{id : "editClassAndSection",  value: "Edit Class"},
    {id : "deleteTeacher",  value: "Delete Teacher"}
  ];

  teacherOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    if(id === "addTeacher")
      this.router.navigate(['signup', {type: "teacher"}]);
    else if(id === "deleteTeacher")
      this.router.navigate([id, {delete: true}]);
    else
      this.router.navigateByUrl(id);
  }
  
  constructor(private router:Router) { }

  ngOnInit() {
  }

}
