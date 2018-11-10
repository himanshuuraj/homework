import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parentoption',
  templateUrl: './parentoption.component.html',
  styleUrls: ['./parentoption.component.css']
})
export class ParentoptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "viewHomework",  value: "View Homework"},
    {id : "selectStudent",  value: "Select Student"},
    // {id : "editClassAndSection",  value: "Edit Class"},
    // {id : "deleteHomework",  value: "Delete Homework"}
  ];

  classOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    if(id === "deleteHomework")
      this.router.navigate([id, {delete: true}]);
    else
      this.router.navigateByUrl(id);
  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
