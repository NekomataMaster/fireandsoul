import { Component, OnInit } from '@angular/core';
import {FireBaseService}from '../../share/service/firebase-service';
import {TestApi}from '../../share/service/TestApi';

@Component({
  selector: 'app-tester',
  templateUrl: 'tester.component.html',
  styleUrls: ['tester.component.css']
})
export class TesterComponent implements OnInit {

  class:string="Novice";
  strBase:number=0;
  agiBase:number=0;
  vitBase:number=0;
  intBase:number=0;
  dexBase:number=0;
  lukBase:number=0;
  strBonus:number=0;
  agiBonus:number=0;
  vitBonus:number=0;
  intBonus:number=0;
  dexBonus:number=0;
  lukBonus:number=0;
  max:number=10;

  bonus:Bonus[];

  constructor(private fireBaseService:FireBaseService,private testApi:TestApi) { }






  ngOnInit() {
    console.log(this.testApi.testGet());

    // console.log(this.fireBaseService.());
    this.fireBaseService.getChars().subscribe((data:any) => {this.bonus=data;});

    this.update();
  }

  update(){
    this.bonus = [];
    for(let i=1;i<=this.max;i++){
      this.bonus.push({
        level: i,
        str: Math.round(this.strBase+this.parab(this.strBonus,i)),
        agi: Math.round(this.agiBase+this.parab(this.agiBonus,i)),
        vit: Math.round(this.vitBase+this.parab(this.vitBonus,i)),
        int: Math.round(this.intBase+this.parab(this.intBonus,i)),
        dex: Math.round(this.dexBase+this.parab(this.dexBonus,i)),
        luk: Math.round(this.lukBase+this.parab(this.lukBonus,i)),
      });
    }
  }

  parab(num:number,lab:number){
    return num*lab;
  }

  changeclass(id:number){
    if(id==1){
      this.class="Novice";
      this.strBase =0.000;
      this.agiBase =0.000;
      this.vitBase =0.000;
      this.intBase =0.000;
      this.dexBase =0.000;
      this.lukBase =0.000;

      this.strBonus=0.000;
      this.agiBonus=0.000;
      this.vitBonus=0.000;
      this.intBonus=0.000;
      this.dexBonus=0.000;
      this.lukBonus=0.000;
      this.max=10;
    }
    if(id==2){
      this.class="Warrior";
      this.strBase =0.000;
      this.agiBase =0.000;
      this.vitBase =0.000;
      this.intBase =0.000;
      this.dexBase =0.000;
      this.lukBase =0.000;

      this.strBonus=0.100;
      this.agiBonus=0.080;
      this.vitBonus=0.115;
      this.intBonus=0.000;
      this.dexBonus=0.065;
      this.lukBonus=0.040;
      this.max=50;
    }
    if(id==3){
      this.class="Trickster";
      this.strBase =0.000;
      this.agiBase =0.000;
      this.vitBase =0.000;
      this.intBase =0.000;
      this.dexBase =0.000;
      this.lukBase =0.000;

      this.strBonus=0.065;
      this.agiBonus=0.140;
      this.vitBonus=0.050;
      this.intBonus=0.030;
      this.dexBonus=0.040;
      this.lukBonus=0.075;
      this.max=50;
    }
    if(id==4){
      this.class="Scout";
      this.strBase =0.000;
      this.agiBase =0.000;
      this.vitBase =0.000;
      this.intBase =0.000;
      this.dexBase =0.000;
      this.lukBase =0.000;

      this.strBonus=0.030;
      this.agiBonus=0.100;
      this.vitBonus=0.040;
      this.intBonus=0.050;
      this.dexBonus=0.140;
      this.lukBonus=0.040;
      this.max=50;
    }
    if(id==5){
      this.class="Magician";
      this.strBase =0.000;
      this.agiBase =0.000;
      this.vitBase =0.000;
      this.intBase =0.000;
      this.dexBase =0.000;
      this.lukBase =0.000;

      this.strBonus=0.030;
      this.agiBonus=0.060;
      this.vitBonus=0.040;
      this.intBonus=0.160;
      this.dexBonus=0.080;
      this.lukBonus=0.030;
      this.max=50;
    }
    if(id==6){
      this.class="Assistant";
      this.strBase =0.000;
      this.agiBase =0.000;
      this.vitBase =0.000;
      this.intBase =0.000;
      this.dexBase =0.000;
      this.lukBase =0.000;

      this.strBonus=0.050;
      this.agiBonus=0.075;
      this.vitBonus=0.080;
      this.intBonus=0.100;
      this.dexBonus=0.070;
      this.lukBonus=0.025;
      this.max=50;
    }
    //////////////////////////////////////////////////////////////////////////////////////////////
    if(id==7){
      this.class="Knight";
      this.strBase =5.000;
      this.agiBase =4.000;
      this.vitBase =6.000;
      this.intBase =0.000;
      this.dexBase =3.000;
      this.lukBase =2.000;

      this.strBonus=0.100;
      this.agiBonus=0.080;
      this.vitBonus=0.080;
      this.intBonus=0.000;
      this.dexBonus=0.080;
      this.lukBonus=0.060;
      this.max=50;
    }
    if(id==8){
      this.class="Gladiator";
      this.strBase =5.000;
      this.agiBase =4.000;
      this.vitBase =6.000;
      this.intBase =0.000;
      this.dexBase =3.000;
      this.lukBase =2.000;

      this.strBonus=0.160;
      this.agiBonus=0.100;
      this.vitBonus=0.040;
      this.intBonus=0.020;
      this.dexBonus=0.060;
      this.lukBonus=0.020;
      this.max=50;
    }
    if(id==9){
      this.class="Spellsword";
      this.strBase =5.000;
      this.agiBase =4.000;
      this.vitBase =6.000;
      this.intBase =0.000;
      this.dexBase =3.000;
      this.lukBase =2.000;

      this.strBonus=0.070;
      this.agiBonus=0.050;
      this.vitBonus=0.100;
      this.intBonus=0.130;
      this.dexBonus=0.040;
      this.lukBonus=0.010;
      this.max=50;
    }
    this.update();
  }


}

interface Bonus {
  level:number;
  str:number;
  agi:number;
  vit:number;
  int:number;
  dex:number;
  luk:number;
}