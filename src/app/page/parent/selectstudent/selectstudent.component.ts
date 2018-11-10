import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../../service/ajax-call.service";
import { GlobalUrl } from "./../../../../global/url";
import { GlobalTheme } from "./../../../../global/theme";
import { ActivatedRoute } from '@angular/router';
import { CommunicatingService } from "./../../../service/communicating-service.service";

@Component({
  selector: 'app-selectstudent',
  templateUrl: './selectstudent.component.html',
  styleUrls: ['./selectstudent.component.css']
})
export class SelectstudentComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "addHomework",  value: "Add Homework"},
    {id : "homeworkList",  value: "Homework List"},
    // {id : "editClassAndSection",  value: "Edit Class"},
    {id : "deleteHomework",  value: "Delete Homework"}
  ];

  selectStudent(e, option){
    this.globalTheme.setGlobalObject({
      "selectedStudent" : option
    });
    this.router.navigateByUrl("userTypeParentOption");
    // console.log(this.globalTheme.getGlobalObject("selectedStudent"));
  }

  getStudentList(){
    let userObj = this.globalTheme.getGlobalObject("userObj");
    this.optionList = userObj.student;
  }

  constructor(
    private router:Router, 
    private ajaxCallService : AjaxCallService,
    private globalUrl : GlobalUrl,
    private globalTheme : GlobalTheme,
    private route : ActivatedRoute,
    private communicatingService : CommunicatingService
  ) { }

  ngOnInit() {
    this.getStudentList();
  }

}
