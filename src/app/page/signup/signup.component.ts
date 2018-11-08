import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AjaxCallService } from "./../../service/ajax-call.service";
import { GlobalUrl } from "./../../../global/url";
import { GlobalTheme } from "./../../../global/theme";
import { ActivatedRoute } from '@angular/router';
import { CommunicatingService } from "./../../service/communicating-service.service";

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
    phone : "",
    dob : 0,
    bloodGroup : "",
    gender : "",
    address : ""
  };

  classAndSectionList : Array<Object> = [];
  selectedClassAndSection : any = {};

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
    this.signUp();
  }

  signUp(){
    let url = "";
    if(this.userType === "parent"){
      url = this.globalUrl.API_SIGN_UP_PARENT;
    }else if(this.userType === "teacher"){
      url = this.globalUrl.API_SIGN_UP_TEACHER;
    }else if(this.userType === "student"){
      url = this.globalUrl.API_SIGN_UP_STUDENT;
      this.user.classAndSectionId = this.selectedClassAndSection._id;
      this.user.classAndSectionName = this.selectedClassAndSection.classAndSectionName;
    }
    this.communicatingService.hideOrShowSpinner(true);
    this.ajaxCallService.postRequest(url, this.user).subscribe((res: any) =>{
      let response = res.json();
      console.log(response);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Message", response.message);
      //this.globalTheme.setToken(response.token);
      //console.log(this.globalTheme.getToken() + " " + "token");
    }, err => {
      console.log(err);
      this.communicatingService.hideOrShowSpinner(false);
      this.communicatingService.showModal("Error", err.toString());
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
    private globalTheme : GlobalTheme,
    private route : ActivatedRoute,
    private communicatingService : CommunicatingService,
  ) { }

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
      let type = params['type']; // (+) converts string 'id' to a number
      if(type)
        this.selectedOption = this.userType = type;
      if(type === "student")
        this.getClassAndSectionList();
      console.log(type, "type");
   });
  }

  logIn = (event) => {
    this.router.navigateByUrl("/login");
  }

  selectOption(event){
    console.log(this.userType);
    this.selectedOption = event.target.value;
  }

}
