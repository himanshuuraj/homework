import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GlobalTheme } from "./../../../../global/theme";

@Component({
  selector: 'app-parentoption',
  templateUrl: './parentoption.component.html',
  styleUrls: ['./parentoption.component.css']
})
export class ParentoptionComponent implements OnInit {

  selectedStudent : any = {};

  optionList: Array<Object> = [
    {id : "viewHomework",  value: "View Homework"},
    {id : "selectStudent",  value: "Select Student"},
    {id : "notice",  value: "Notice"},
    {id : "schedule",  value: "Schedule"}
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

  constructor(private router:Router, private globalTheme : GlobalTheme) {
    
   }

  ngOnInit() {
    this.selectedStudent = this.globalTheme.getGlobalObject("selectedStudent");
  }

}
