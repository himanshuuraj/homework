import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunicatingService {

  private spinnerSubject = new Subject();
  private modalSubject = new Subject();


  constructor() { }

  spinner(){
    return this.spinnerSubject;
  }

  hideOrShowSpinner(flag){
    return this.spinnerSubject.next(flag);
  }

  modal(){
    return this.modalSubject;
  }

  showModal(header, body){
    return this.modalSubject.next({
      header : header,
      body : body
    });
  }

  hideOrShowModal(){

  }

}
