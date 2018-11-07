import { Injectable } from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
@Injectable({
  providedIn: 'root'
})
export class AjaxCallService {

  config = {} as any;
  headers : any = {};
  options : any = {};

  constructor(public http : Http) {
    this.headers = new Headers({ 'Content-Type': 'application/json' });
    this.options = new RequestOptions({ headers: this.headers });
  }

  postRequest = (url, obj) => {
    let body = JSON.stringify(obj);
    return this.http.post(url, body, this.options );
  }

  getRequest = (url) => {
    return this.http.get(url);
  }

  putRequest = (obj, url) => {
    let body = JSON.stringify(obj);
    return this.http.put(url, body, this.options );
  }

  deleteRequest = (url) => {
    return this.http.delete(url, this.options);
  }

}
