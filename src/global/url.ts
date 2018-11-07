import { Injectable } from '@angular/core';
let HOST = "http://localhost:8080";


Injectable()
export class GlobalUrl{
    API_LOGIN : string =  HOST + "/parent/login";
    API_SIGN_UP_PARENT : string = HOST + "/parent/create";
    API_SIGN_UP_TEACHER : string = HOST + "/parent/teacher";

    API_TO_ADD_CLASS_AND_SECTION : string = HOST + "/classAndSection/create";
    API_TO_GET_CLASS_AND_SECTION_LIST : string = HOST + "/classAndSection/getAll";
  }