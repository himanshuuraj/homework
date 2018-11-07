import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CommunicatingService {

  private subject = new Subject();

  constructor() { }

  spinner(){
    return this.subject;
  }

  hideOrShowSpinner(flag){
    return this.subject.next(flag);
  }

  hideOrShowModal(){

  }

}
