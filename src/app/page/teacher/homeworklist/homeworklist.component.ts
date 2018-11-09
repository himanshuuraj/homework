import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxCallService } from "./../../../service/ajax-call.service";
import { GlobalTheme } from "./../../../../global/theme";
import { GlobalUrl } from "./../../../../global/url";
import { CommunicatingService } from "./../../../service/communicating-service.service";

@Component({
  selector: 'app-homeworklist',
  templateUrl: './homeworklist.component.html',
  styleUrls: ['./homeworklist.component.css']
})
export class HomeworklistComponent implements OnInit {

  private homeworkList : Array<Object> = [];
  private deleteMode : boolean = false

  constructor(
    private ajaxCallService : AjaxCallService,
    private globalTheme : GlobalTheme,
    private globalUrl : GlobalUrl,
    private communicatingService : CommunicatingService,
    private route: ActivatedRoute
  ) { 
    this.getHomeworkList();
  }

  getHomeworkList(){
    let userObj : any = this.globalTheme.getGlobalObject("userObj");
    let teacherId : string = userObj._id;
    let url = this.globalUrl.API_TO_GET_HOMEWORK_BY_TECAHER + teacherId;
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
    this.route.params.subscribe(params => {
      let deleteMode = params['delete']; // (+) converts string 'id' to a number
      if(deleteMode)
        this.deleteMode = true;
      console.log(deleteMode, "deleteMode");
   });
  }

  deleteHomework(e, option){
    let id = option._id;
    let url = this.globalUrl.API_TO_DELETE_HOMEWORK + id;
    this.communicatingService.hideOrShowSpinner(true);
    this.ajaxCallService.deleteRequest(url).subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Message", response.message);
      this.getHomeworkList();
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

}
