import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxCallService } from "./../../../../service/ajax-call.service";
import { GlobalTheme } from "./../../../../../global/theme";
import { GlobalUrl } from "./../../../../../global/url";
import { CommunicatingService } from "./../../../../service/communicating-service.service";

@Component({
  selector: 'app-teacherlist',
  templateUrl: './teacherlist.component.html',
  styleUrls: ['./teacherlist.component.css']
})
export class TeacherlistComponent implements OnInit {

  private teacherList : Array<Object> = [];
  private deleteMode : boolean = false

  constructor(
    private ajaxCallService : AjaxCallService,
    private globalTheme : GlobalTheme,
    private globalUrl : GlobalUrl,
    private communicatingService : CommunicatingService,
    private route: ActivatedRoute
  ) { 
    this.getTeachersList();
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      let deleteMode = params['delete']; // (+) converts string 'id' to a number
      if(deleteMode)
        this.deleteMode = true;
      console.log(deleteMode, "deleteMode");
   });
  }

  deleteTeacher(e, option){
    let id = option._id;
    let url = this.globalUrl.API_TO_DELETE_TEACHER + id;
    this.communicatingService.hideOrShowSpinner(true);
    this.ajaxCallService.deleteRequest(url).subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Message", response.message);
      this.getTeachersList();
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

}
