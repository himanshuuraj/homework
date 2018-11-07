import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxCallService } from "./../../../../service/ajax-call.service";
import { GlobalTheme } from "./../../../../../global/theme";
import { GlobalUrl } from "./../../../../../global/url";
import { CommunicatingService } from "./../../../../service/communicating-service.service"

@Component({
  selector: 'app-subjectlist',
  templateUrl: './subjectlist.component.html',
  styleUrls: ['./subjectlist.component.css']
})
export class SubjectlistComponent implements OnInit {

  private subjectList : Array<Object> = [];
  private deleteMode : boolean = false

  constructor(
    private ajaxCallService : AjaxCallService,
    private globalTheme : GlobalTheme,
    private globalUrl : GlobalUrl,
    private communicatingService : CommunicatingService,
    private route: ActivatedRoute
  ) { 
    this.getSubjectList();
  }

  getSubjectList(){
    this.ajaxCallService.getRequest(this.globalUrl.API_TO_GET_SUBJECT_LIST)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.subjectList = response.body;
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

  deleteSubject(e, option){
    let id = option._id;
    let url = this.globalUrl.API_TO_DELETE_SUBJECT + id;
    this.communicatingService.hideOrShowSpinner(true);
    this.ajaxCallService.deleteRequest(url).subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Message", response.message);
      this.getSubjectList();
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

}
