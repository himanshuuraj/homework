import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../../service/ajax-call.service";
import { GlobalUrl } from "./../../../../global/url";
import { GlobalTheme } from "./../../../../global/theme";
import { ActivatedRoute } from '@angular/router';
import { CommunicatingService } from "./../../../service/communicating-service.service";

@Component({
  selector: 'app-add-homework',
  templateUrl: './add-homework.component.html',
  styleUrls: ['./add-homework.component.css']
})
export class AddHomeworkComponent implements OnInit {

  header : string = "";
  content : string = "";
  todaysDate : any;
  selectedSubject : any = {};
  subjectList : Array<Object> = [];
  lastDateToSubmit : any;

  constructor(
    private router:Router, 
    private ajaxCallService : AjaxCallService,
    private globalUrl : GlobalUrl,
    private globalTheme : GlobalTheme,
    private route : ActivatedRoute,
    private communicatingService : CommunicatingService
  ) { }

  getSubjectlist(){
    let userObj : any = this.globalTheme.getGlobalObject("userObj");
    console.log(userObj, "userObj");
    let teacherId = userObj._id;
    let url = this.globalUrl.API_TO_GET_SUBJECTS_TEACHER;
    url += teacherId;
    this.ajaxCallService.getRequest(url)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.subjectList = response.body;
    }, err => {
      console.log(err);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

  addHomework(){
    let userObj : any = this.globalTheme.getGlobalObject("userObj");
    let obj = {
      "subjectId": this.selectedSubject._id,
      "subjectName": this.selectedSubject.subjectName,
      "header": this.header,
      "content": this.content,
      "teacherId": userObj._id,
      "teacherName": userObj.teacherName,
      "classAndSectionId" : this.selectedSubject.classAndSectionId,
      "classAndSectionName" : this.selectedSubject.classAndSectionName,
      "lastDateToSubmit" : new Date(this.lastDateToSubmit).getTime()
    };
    let url = this.globalUrl.API_TO_ADD_HOMEWORK;
    this.ajaxCallService.postRequest(url, obj).subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Message", response.message);
      this.router.navigateByUrl("userTypeTeacherOption");
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

  ngOnInit() {
    this.todaysDate = this.globalTheme.todaysDay();
    this.getSubjectlist();
  }

}
