import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-parent-option',
  templateUrl: './parent-option.component.html',
  styleUrls: ['./parent-option.component.css']
})
export class ParentOptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "addParent",  value: "Add Parent"},
    {id : "parentList",  value: "Parent List"},
    //{id : "editClassAndSection",  value: "Edit Class"},
    {id : "deleteParent",  value: "Delete Parent"}
  ];

  teacherOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    if(id === "addParent")
      this.router.navigate(['signup', {type: "parent"}]);
    else if(id === "deleteParent")
      this.router.navigate([id, {delete: true}]);
    else
      this.router.navigateByUrl(id);

  }
  

  constructor(private router:Router) { }

  ngOnInit() {
  }

}
