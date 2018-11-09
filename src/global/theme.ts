import { Injectable } from '@angular/core';

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
  }