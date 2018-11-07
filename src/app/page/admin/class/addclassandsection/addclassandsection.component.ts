import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../../../service/ajax-call.service";
import { GlobalUrl } from "./../../../../../global/url";
import { GlobalTheme } from "./../../../../../global/theme";
import { CommunicatingService } from "./../../../../service/communicating-service.service";

@Component({
  selector: 'app-addclassandsection',
  templateUrl: './addclassandsection.component.html',
  styleUrls: ['./addclassandsection.component.css']
})
export class AddclassandsectionComponent implements OnInit {

  className : String = "";

  constructor(
    private router:Router, 
    private ajaxCallService : AjaxCallService,
    private globalUrl : GlobalUrl,
    private globalTheme : GlobalTheme,
    private communicatingService : CommunicatingService
  ) { 
    
  }

  ngOnInit() {
    
  }

  addClassAndSection(e){
    let obj = {
      classAndSectionName : this.className
    };
    this.communicatingService.hideOrShowSpinner(true);
    this.ajaxCallService.postRequest(this.globalUrl.API_TO_ADD_CLASS_AND_SECTION, obj)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Message", response.message);
      this.router.navigateByUrl("classOption");
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
    });
  }

}
