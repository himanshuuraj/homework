import { Component, OnInit } from '@angular/core';
import { CommunicatingService } from "./../../service/communicating-service.service";
@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.css']
})
export class SpinnerComponent implements OnInit {

  public showSpinner : boolean = false;
  private spinner : any;

  constructor(private communicatingService : CommunicatingService) {
    this.spinner = communicatingService.spinner();
    this.hideOrShowSpinner();
  }

  hideOrShowSpinner(){
    this.spinner.subscribe(flag => this.showSpinner = flag);
  }

  ngOnInit() {
  }

}
