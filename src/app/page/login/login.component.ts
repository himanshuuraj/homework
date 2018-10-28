import { Component, OnInit } from '@angular/core';
// import { Globals } from '../../../global/theme';
import { AjaxCallService } from "./../../service/ajax-call.service";
import { GlobalUrl } from '../../../global/url';
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

  email : String = "";
  password : String = "";
  user = {
    email : "hraj3116@gmail.com",
    password : "12345"
  };
  
  onLogin = (event) => {
    if(!this.user.email){
      alert("Please enter valid emailId");
      return;
    }
    if(!this.user.password){
      alert("Please enter valid password");
      return;
    }
    let obj = {
      email : this.user.email,
      password : this.user.password
    }
    let loginSubscriber = this.ajaxCallService.postRequest(obj, this.globalUrl.API_LOGIN);
    loginSubscriber.subscribe((res: any) =>{
      let response = res.json();
      console.log(res.json());
      this.globalTheme.setToken(response.token);
      console.log(this.globalTheme.getToken() + " " + "token");
    }, err => {
      console.log(err);
    });
  }

  signUp = (event) => {
    // this.router.navigateByUrl("/signup");
  }

  constructor(private ajaxCallService : AjaxCallService,
     private globalUrl : GlobalUrl,
     private globalTheme : GlobalTheme,
     private router:Router) {
    // console.log(this.globalUrl.API_LOGIN);
  }

  ngOnInit() {}

}
