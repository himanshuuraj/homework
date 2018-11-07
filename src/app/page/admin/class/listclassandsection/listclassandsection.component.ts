import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AjaxCallService } from "./../../../../service/ajax-call.service";
import { GlobalTheme } from "./../../../../../global/theme";
import { GlobalUrl } from "./../../../../../global/url";
import { CommunicatingService } from "./../../../../service/communicating-service.service"
@Component({
  selector: 'app-listclassandsection',
  templateUrl: './listclassandsection.component.html',
  styleUrls: ['./listclassandsection.component.css']
})
export class ListclassandsectionComponent implements OnInit {

  private classAndSectionList : Array<Object> = [];
  private deleteMode : boolean = false

  constructor(
    private ajaxCallService : AjaxCallService,
    private globalTheme : GlobalTheme,
    private globalUrl : GlobalUrl,
    private communicatingService : CommunicatingService,
    private route: ActivatedRoute
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

  ngOnInit() {
    this.route.params.subscribe(params => {
      let deleteMode = params['delete']; // (+) converts string 'id' to a number
      if(deleteMode)
        this.deleteMode = true;
      console.log(deleteMode, "deleteMode");
   });
  }

  deleteClassAndSection(e, option){
    let id = option._id;
    let url = this.globalUrl.API_TO_DELETE_CLASS_AND_SECTION + id;
    this.ajaxCallService.deleteRequest(url).subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.showModal("Message", response.message);
      this.getClassAndSectionList();
    }, err => {
      console.log(err);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

}
