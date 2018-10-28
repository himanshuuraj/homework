import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  selectedOption : String = "";

  bloodGroupList = ["O+", "O-", "A+", "A-", "B+", "B-", "AB+", "AB-"];

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

  constructor() { }

  ngOnInit() {
  }

  selectOption(event){
    this.selectedOption = event.target.value;
  }

}
