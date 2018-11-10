import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxCallService } from "./../../../service/ajax-call.service";
import { GlobalTheme } from "./../../../../global/theme";
import { GlobalUrl } from "./../../../../global/url";
import { CommunicatingService } from "./../../../service/communicating-service.service"

@Component({
  selector: 'app-homework-list',
  templateUrl: './homework-list.component.html',
  styleUrls: ['./homework-list.component.css']
})
export class HomeworkListComponent implements OnInit {

  private homeworkList : Array<Object> = [];

  constructor(
    private ajaxCallService : AjaxCallService,
    private globalTheme : GlobalTheme,
    private globalUrl : GlobalUrl,
    private communicatingService : CommunicatingService,
    private route: ActivatedRoute
  ) { 
    this.gethomeworkList();
  }
  
  getDateString(data){
    return this.globalTheme.getDateString(data);
  }
  gethomeworkList(){
    let selectedStudent = this.globalTheme.getGlobalObject("selectedStudent");
    let url = this.globalUrl.API_TO_GET_HOMEWORK_OF_CLASS + selectedStudent.classAndSectionId;
    this.ajaxCallService.getRequest(url)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.homeworkList = response.body;
    }, err => {
      console.log(err);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

  ngOnInit() {
  }

}
