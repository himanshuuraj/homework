import { Component, OnInit, Input,  Output, EventEmitter } from '@angular/core'
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  @Input() headerText: string;
  @Input() backUrlString: string ;
  // @Output()
  // backButtonClick: EventEmitter<String> = new EventEmitter<String>(); //creating an output event
  // https://ciphertrick.com/2017/07/24/parent-child-component-communication-angular/

  constructor(
    private router:Router
  ){
    // this.router.navigateByUrl("/" + this.backUrlString);
  }

  ngOnInit() {
  }

  backbuttonClick(event, routingLink){
    if(!this.backUrlString) return;
    this.router.navigateByUrl("/" + this.backUrlString);
  }

}
