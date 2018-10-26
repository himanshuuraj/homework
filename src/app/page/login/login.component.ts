import { Component, OnInit } from '@angular/core';
// import { Globals } from '../../../global/theme';
import { AjaxCallService } from "./../../service/ajax-call.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [  ]
})
export class LoginComponent implements OnInit {

  //global : any = Globals;
  constructor() { }

  onLogin = (e) => {
    var firebaseRef = firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  }

  ngOnInit() {
  }

}
