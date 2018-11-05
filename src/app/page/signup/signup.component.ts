import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../service/ajax-call.service";
import { GlobalUrl } from "./../../../global/url";
import { GlobalTheme } from "./../../../global/theme";
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selectedOption : String = "";

  userType : String = "";

  user : any = {
    name : "",
    email : "",
    password : "",
    phone : "9876543210",
    dob : 0,
    bloodGroup : "",
    gender : "",
    address : ""
  };

  bloodGroupList = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

  onSignUp(e){
    if(!this.user.name){
      return alert("Please enter the name");
    }
    else if(!this.user.email){
      return alert("Please enter the email");
    }
    else if(!this.user.password){
      return alert("Please enter the password");
    }
    else if(!this.user.phone){
      return alert("Please enter the phone number");
    }
    else if(!this.user.dob){
      return alert("Please enter the date of birth");
    }
    else if(!this.user.gender){
      return alert("Please enter the gender");
    }
    else if(this.userType === "parent" && !this.user.address){
      return alert("Please enter the address");
    }
    this.user.dob = new Date(this.user.dob).getTime();
    this.ajaxCallService.postRequest(this.globalUrl.API_SIGN_UP_PARENT, this.user).subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.globalTheme.setToken(response.token);
      console.log(this.globalTheme.getToken() + " " + "token");
    }, err => {
      console.log(err);
    });
  }

  getTodaysDate(){
    let today : any = new Date();
    let dd : any = today.getDate();
    let mm : any = today.getMonth()+1; //January is 0!
    let yyyy : any = today.getFullYear();
    if(dd<10)
        dd='0'+dd
    if(mm<10)
        mm='0'+mm
    today = yyyy+'-'+mm+'-'+dd;
    return today;
  }

  constructor(private router:Router, 
    private ajaxCallService : AjaxCallService,
    private globalUrl : GlobalUrl,
    private globalTheme : GlobalTheme
  ) { }

  ngOnInit() {
  }

  logIn = (event) => {
    this.router.navigateByUrl("/login");
  }

  selectOption(event){
    console.log(this.userType);
    this.selectedOption = event.target.value;
  }

}
