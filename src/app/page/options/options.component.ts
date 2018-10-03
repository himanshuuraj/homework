import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  optionList: Array<Object> = [
    {id : "homework",  value: "Homework"},
    {id : "notice",  value: "Notice"},
    {id : "schedule",  value: "Schedule"}
  ];

  constructor() { }

  ngOnInit() {
  }

}
