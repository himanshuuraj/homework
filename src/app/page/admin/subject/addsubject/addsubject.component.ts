import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../../../service/ajax-call.service";
import { GlobalUrl } from "./../../../../../global/url";
import { GlobalTheme } from "./../../../../../global/theme";
import { CommunicatingService } from "./../../../../service/communicating-service.service";

@Component({
  selector: 'app-addsubject',
  templateUrl: './addsubject.component.html',
  styleUrls: ['./addsubject.component.css']
})
export class AddsubjectComponent implements OnInit {

  subjectName : String = "";
  teacherList : Array<Object> = [];
  classAndSectionList : Array<Object> = [];
  selectedTeacher : any = { teacherId : "", teacherName : ""};
  selectedClassAndSection : any = {};

  constructor(private router:Router, 
    private ajaxCallService : AjaxCallService,
    private globalUrl : GlobalUrl,
    private globalTheme : GlobalTheme,
    private communicatingService : CommunicatingService) { }

  ngOnInit() {
    this.getTeachersList();
    this.getClassAndSectionList();
  }

  getClassAndSectionList(){
    this.ajaxCallService.getRequest(this.globalUrl.API_TO_GET_CLASS_AND_SECTION_LIST)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.classAndSectionList = response.body;
    }, err => {
      console.log(err);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

  changeTeacher(event){
    console.log(event, "event", this.selectedTeacher);
  }

  getTeachersList(){
    this.ajaxCallService.getRequest(this.globalUrl.API_TO_GET_TEACHER_LIST)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.teacherList = response.body;
    }, err => {
      console.log(err);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

  addSubject(e){
    if(!this.selectedTeacher._id){
      this.communicatingService.showModal("Message", "Please select a teacher");
      return;
    }
    if(!this.selectedClassAndSection._id){
      this.communicatingService.showModal("Message", "Please select a class");
      return;
    }
    if(!this.subjectName){
      this.communicatingService.showModal("Message", "Please enter a subject");
      return;
    }
    let obj = {
      "subjectName": this.subjectName,
      "teacherId": this.selectedTeacher._id,
      "teacherName": this.selectedTeacher.teacherName,
      "classAndSectionId": this.selectedClassAndSection._id,
      "classAndSectionName": this.selectedClassAndSection.classAndSectionName
    };
    this.communicatingService.hideOrShowSpinner(true);
    this.ajaxCallService.postRequest(this.globalUrl.API_TO_ADD_SUBJECT, obj)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Message", response.message);
      this.router.navigateByUrl("subjectOption");
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
    });
  }
}
