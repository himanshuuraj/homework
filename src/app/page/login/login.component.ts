import { Component, OnInit } from '@angular/core';
// import { Globals } from '../../../global/theme';
import { AjaxCallService } from "./../../service/ajax-call.service";
import { GlobalUrl } from '../../../global/url';
import { CommunicatingService } from "./../../service/communicating-service.service";

import {
  GlobalTheme
} from "./../../../global/theme";
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : string = "";
  password : string = "";
  user = {
    email : "",
    password : ""
  };
  userType : string = "";
  
  onLogin = (event) => {
    if(!this.user.email){
      alert("Please enter valid emailId");
      return;
    }
    if(!this.user.password){
      alert("Please enter valid password");
      return;
    }
    if(!this.userType){
      alert("Please enter a user type");
      return;
    }
    let obj = {
      email : this.user.email,
      password : this.user.password
    }
    let url;
    if(this.userType === "parent")
      url = this.globalUrl.API_PARENT_LOGIN;
    else if(this.userType === "teacher")
      url = this.globalUrl.API_TEACHER_LOGIN;
    this.communicatingService.hideOrShowSpinner(true);
    let loginSubscriber = this.ajaxCallService.postRequest(url, obj);
    loginSubscriber.subscribe((res: any) =>{
      let response = res.json();
      if(response.success ===  false){
        this.communicatingService.hideOrShowSpinner(false);
        this.communicatingService.showModal("Error", response.message);
        return;
      }
      response = response.body;
      console.log(res.json(), 50);
      this.communicatingService.hideOrShowSpinner(false);
      // this.communicatingService.showModal("Message", response.message);
      // this.globalTheme.setToken(response.token);
      // console.log(this.globalTheme.getToken() + " " + "token");
      if(this.userType === "teacher"){
        this.globalTheme.setGlobalObject({
          userType : this.userType,
          userObj : response
        });
        this.router.navigateByUrl("userTypeTeacherOption");
      }else if(this.userType === "parent"){
        this.globalTheme.setGlobalObject({
          userType : this.userType,
          userObj : response,
          selectedStudent : response.student[0]
        });
        this.router.navigateByUrl("userTypeParentOption");
      }
    }, err => {
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
      console.log(err);
    });
  }

  signUp = (event) => {
    this.router.navigateByUrl("/signup");
  }

  constructor(private ajaxCallService : AjaxCallService,
     private globalUrl : GlobalUrl,
     private globalTheme : GlobalTheme,
     private communicatingService : CommunicatingService,
     private router:Router) {
    // console.log(this.globalUrl.API_LOGIN);
  }

  ngOnInit() {}

}
