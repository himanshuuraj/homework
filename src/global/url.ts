import { Injectable } from '@angular/core';
let HOST = "http://localhost:8080";


Injectable()
export class GlobalUrl{
    API_LOGIN : string =  HOST + "/user/login";
    API_SIGN_UP_PARENT : string = HOST + "/user/create";
    API_SIGN_UP_TEACHER : string = HOST + "/user/teacher";
  }