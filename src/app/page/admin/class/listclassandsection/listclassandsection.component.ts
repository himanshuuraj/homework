import { Component, OnInit } from '@angular/core';
import {
  AjaxCallService
} from "./../../../../service/ajax-call.service";
import {
  GlobalTheme
} from "./../../../../../global/theme";
import {
  GlobalUrl
} from "./../../../../../global/url";
import {
  CommunicatingService
} from "./../../../../service/communicating-service.service"
@Component({
  selector: 'app-listclassandsection',
  templateUrl: './listclassandsection.component.html',
  styleUrls: ['./listclassandsection.component.css']
})
export class ListclassandsectionComponent implements OnInit {

  private classAndSectionList : Array<Object> = [];

  constructor(
    private ajaxCallService : AjaxCallService,
    private globalTheme : GlobalTheme,
    private globalUrl : GlobalUrl,
    private communicatingService : CommunicatingService
  ) { 
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

  ngOnInit() {}

}
