import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../../../service/ajax-call.service";
import { GlobalUrl } from "./../../../../../global/url";
import { GlobalTheme } from "./../../../../../global/theme";
import { CommunicatingService } from "./../../../../service/communicating-service.service";

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

  classAndSectionList : Array<Object> = [];
  selectedClassAndSection : any = {};

  studentList : Array<Object> = [];

  constructor(private router:Router, 
    private ajaxCallService : AjaxCallService,
    private globalUrl : GlobalUrl,
    private globalTheme : GlobalTheme,
    private communicatingService : CommunicatingService) { }

  ngOnInit() {
    this.getClassAndSectionList();
  }

  changeClassAndSection(event){
    console.log(event, "event", this.selectedClassAndSection);
    let url = this.globalUrl.API_TO_GET_STUDENT_OF_CLASSANDSECTION;
    url += this.selectedClassAndSection._id;
    this.communicatingService.hideOrShowSpinner(true);
    this.ajaxCallService.getRequest(url)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.studentList = response.body;
      this.communicatingService.hideOrShowSpinner(false);
      // this.communicatingService.showModal("Message", response.message);
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
    });
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

}
