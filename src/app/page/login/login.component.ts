import { Component, OnInit } from '@angular/core';
// import { Globals } from '../../../global/theme';
import { AjaxCallService } from "./../../service/ajax-call.service";
import { GlobalUrl } from '../../../global/url';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email : String = "";
  password : String = "";
  

  onLogin = () => {
    if(!this.email){
      alert("Please enter valid emailId");
      return;
    }
    if(!this.password){
      alert("Please enter valid password");
      return;
    }
    let obj = {
      email : this.email,
      password : this.password
    }
    let loginSubscriber = this.ajaxCallService.postRequest(obj, this.globalUrl.API_LOGIN);
    loginSubscriber.subscribe((res: any) =>{
      console.log(res.json());
    }, err => {
      console.log(err);
    });
  }

  constructor(private ajaxCallService : AjaxCallService, private globalUrl : GlobalUrl) {
    // console.log(this.globalUrl.API_LOGIN);
  }

  ngOnInit() {}

}
