import { Injectable } from '@angular/core';

// userType
// userObj

Injectable()
export class GlobalTheme{
    GRADIENT_COLOR1 : string = "red";
    GRADIENT_COLOR2 : string = "yellow";
    token : String  = "";
    globalObject : Object = {};
    public getToken(){
      return this.token;
    }
    public setToken(token){
      this.token = token;
    }
    public getGlobalObject(key){
      return this.globalObject[key];
    }
    public setGlobalObject(obj){
      for(let key in obj)
        this.globalObject[key] = obj[key];
    }
    public todaysDay(){
      let today : any = new Date();
      let dd : any = today.getDate();
      let mm : any = today.getMonth()+1; //January is 0!
      var yyyy = today.getFullYear();
      if(dd<10){
        dd='0'+dd
      } 
      if(mm<10){
        mm='0'+mm
      } 
      today = yyyy+'-'+mm+'-'+dd;
      return today
    }
    public getDateString(data){
      if (!data) return "N/A";
      var date = new Date(data);
      return (
        date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
      );
    }
  }