import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tutorial01',
  templateUrl: './tutorial01.component.html',
  styleUrls: ['./tutorial01.component.css']
})
export class Tutorial01Component implements OnInit {


  text1:string;
  text2a:string;
  text2b:string;

  constructor() { }

  ngOnInit() {
    this.text1="AAAAA";
    this.text2a="";
  }
  clicked(){
    this.text1 = this.text1+' > > >';
  }
  clicked2(text:string){
  this.text2a = this.text2a+text;
  }

  onChangeTxt(txt:string){
    this.text2a = this.text2a+txt;
  }
}
