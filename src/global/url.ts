import { Injectable } from '@angular/core';
let HOST = "http://localhost:8080";


Injectable()
export class GlobalUrl{
    API_LOGIN : string =  HOST + "/user/login";
    API_SIGN_UP : string = HOST + "";
  }