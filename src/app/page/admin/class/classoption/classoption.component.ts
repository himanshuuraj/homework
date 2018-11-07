import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-classoption',
  templateUrl: './classoption.component.html',
  styleUrls: ['./classoption.component.css']
})
export class ClassoptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "addClassAndSection",  value: "Add Class"},
    {id : "viewClassAndSection",  value: "View Class"},
    // {id : "editClassAndSection",  value: "Edit Class"},
    {id : "deleteClassAndSection",  value: "Delete Class"}
  ];

  classOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    if(id === "deleteClassAndSection")
      this.router.navigate([id, {delete: true}]);
    else
      this.router.navigateByUrl(id);

  }

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
