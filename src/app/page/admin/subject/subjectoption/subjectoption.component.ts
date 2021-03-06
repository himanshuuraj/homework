import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-subjectoption',
  templateUrl: './subjectoption.component.html',
  styleUrls: ['./subjectoption.component.css']
})
export class SubjectoptionComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "addSubject",  value: "Add Subject"},
    {id : "subjectList",  value: "Subject List"},
    //{id : "editClassAndSection",  value: "Edit Class"},
    {id : "deleteSubject",  value: "Delete Subject"}
  ];

  classOptionClick(e, option){
    console.log(e, option);
    let id = option.id;
    if(id === "deleteSubject")
      this.router.navigate([id, {delete: true}]);
    else 
      this.router.navigateByUrl(id);

  }

  constructor(private router:Router) { }

  ngOnInit() { }


}
