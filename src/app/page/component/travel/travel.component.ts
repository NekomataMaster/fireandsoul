import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-travel',
  templateUrl: './travel.component.html',
  styleUrls: ['./travel.component.css']
})
export class TravelComponent implements OnInit {

  columns:any = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
  rows:any = [{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];
  constructor() { }

  ngOnInit() {

  }

}
