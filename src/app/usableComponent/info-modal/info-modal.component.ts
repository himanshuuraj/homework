import { Component, OnInit } from '@angular/core';
import {
  CommunicatingService
} from "./../../service/communicating-service.service";
@Component({
  selector: 'app-info-modal',
  templateUrl: './info-modal.component.html',
  styleUrls: ['./info-modal.component.css']
})
export class InfoModalComponent implements OnInit {

  private headerText : string = "Info";
  private content : string = "contentText";
  private showModalFlag : boolean = false;
  private modal : any;
  constructor(private communicatingService : CommunicatingService) {
    this.modal = communicatingService.modal();
    this.showModal();
  }

  ngOnInit() {}

  showModal(){
    this.modal.subscribe(obj => {
      this.showModalFlag = true;
      this.headerText = obj.header;
      this.content = obj.body;
    });
  }

  closeModal(e){
    this.showModalFlag = false;
  }

}
