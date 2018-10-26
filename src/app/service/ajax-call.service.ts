import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
@Injectable({
  providedIn: 'root'
})
export class AjaxCallService {

  config = {} as any;

  constructor() {
    this.config = {
      apiKey: "AIzaSyAPDYufx8zKvGKifi53PryxMVWQVfqGhJc",
      authDomain: "calendar-f7596.firebaseapp.com",
      databaseURL: "https://calendar-f7596.firebaseio.com",
      projectId: "calendar-f7596",
      storageBucket: "",
      messagingSenderId: "778345395441"
    };
    firebase.initializeApp(this.config);
  }
}
