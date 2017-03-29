import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {TutorialService} from '../../share/service/tutorial.service'

@Component({
  selector: 'app-tutorial02',
  templateUrl: './tutorial02.component.html',
  styleUrls: ['./tutorial02.component.css']
})
export class Tutorial02Component implements OnInit {
  @Input() txt:string;
  @Output() changeTxt: EventEmitter<string> = new EventEmitter();

  txt2a:string;
  txt2b:string;
  datalist:any[];

  constructor(private tutorialService:TutorialService) { }

  ngOnInit() {
    this.tutorialService.getEmployee().subscribe((response) => this.datalist = response);
    this.txt2a="";
  }

  clicked(txt:string){
    this.txt2a = this.txt2a+txt;
    this.changeTxt.emit(txt);
  }
}
