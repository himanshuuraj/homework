import { Injectable } from '@angular/core';
let HOST = "http://localhost:8080";


Injectable()
export class GlobalUrl{
    API_LOGIN : string =  HOST + "/parent/login";
    API_SIGN_UP_PARENT : string = HOST + "/parent/create";
    API_SIGN_UP_TEACHER : string = HOST + "/teacher/create";
    API_SIGN_UP_STUDENT : string = HOST + "/student/create";

    API_TO_ADD_CLASS_AND_SECTION : string = HOST + "/classAndSection/create";
    API_TO_GET_CLASS_AND_SECTION_LIST : string = HOST + "/classAndSection/getAll";
    API_TO_DELETE_CLASS_AND_SECTION : string = HOST + "/classAndSection/delete/";

    API_TO_GET_TEACHER_LIST : string = HOST + "/teacher/getAll";
    API_TO_DELETE_TEACHER : string = HOST + "/teacher/delete/";

    API_TO_ADD_SUBJECT : string = HOST + "/subject/create";
    API_TO_GET_SUBJECT_LIST : string = HOST + "/subject/getAll";
    API_TO_DELETE_SUBJECT : string = HOST + "/subject/delete/";

    API_TO_GET_STUDENT_OF_CLASSANDSECTION : string = HOST + "/student/getStudentOfClassAndSection/";
  }