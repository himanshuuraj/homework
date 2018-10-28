import { Injectable } from '@angular/core';

Injectable()
export class GlobalTheme{
    GRADIENT_COLOR1 : string = "red";
    GRADIENT_COLOR2 : string = "yellow";
    token : String  = "";
    public getToken(){
      return this.token;
    }
    public setToken(token){
      this.token = token;
    }
  }