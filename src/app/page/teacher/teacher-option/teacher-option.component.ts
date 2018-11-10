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
    {id : "homeworkList",  value: "Homework List"},
    // {id : "editClassAndSection",  value: "Edit Class"},
    {id : "deleteHomework",  value: "Delete Homework"}
  ];

  classOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    if(id === "deleteHomework")
      this.router.navigate([id, {delete: true}]);
    else
      this.router.navigateByUrl(id);
  }

  logout(){
    this.router.navigateByUrl("/");
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
