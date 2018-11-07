import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-option',
  templateUrl: './admin-option.component.html',
  styleUrls: ['./admin-option.component.css']
})
export class AdminOptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "class",  value: "Class"},
    {id : "subject",  value: "Subject"},
    {id : "student",  value: "Student"},
    {id : "parent",  value: "Parent"},
    {id : "teacher",  value: "Teacher"}
  ];

  adminOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    this.router.navigateByUrl(id + "Option");
    // if(id === "class"){
    // }
    // else if(id === "subject"){
    // }
    // else if(id === "student"){}
    // else if(id === "parent"){}
    // else if(id === "teacher"){}
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
