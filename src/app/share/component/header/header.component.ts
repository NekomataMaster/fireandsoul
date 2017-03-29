import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  dd: SelectItem[];
  d:any=1;

  constructor() {
    this.dd = [];
    this.dd.push({label:'Game', value:1});
    this.dd.push({label:'Test1', value:2});

  }

  ngOnInit() {

  }

}
