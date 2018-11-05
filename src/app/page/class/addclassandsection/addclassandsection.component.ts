import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../../service/ajax-call.service";
import { GlobalUrl } from "./../../../../global/url";
import { GlobalTheme } from "./../../../../global/theme";

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
    private globalTheme : GlobalTheme
  ) { 
    
  }

  ngOnInit() {
    
  }

  addClassAndSection(e){
    let obj = {
      classAndSectionName : this.className
    };
    this.ajaxCallService.postRequest(this.globalUrl.API_TO_ADD_CLASS_AND_SECTION, obj)
    .subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
    }, err => {
      console.log(err);
    });
  }

}
