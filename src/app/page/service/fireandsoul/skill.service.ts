import { Injectable } from '@angular/core';
import * as char from '../../model/fireandsoul/charInfo'

@Injectable()
export class SkillService {

  private char:char.CharInfo=null;

  constructor() { }


  //
  // useSkillID_1(){
  //   let damage:number=0;
  //   let randamage:number=(Math.round(Math.random()*10))/100;//0-10
  //   let ranhit:number=Math.round((Math.random()*(100-1))+1);//1-100
  //   this.MP-=5;
  //   if((100-(this.eflee-this.hit))>=ranhit){
  //     damage = Math.ceil(((this.atk-(this.atk*randamage))*2.25)-this.edef);
  //     if(this.eHP>damage) {
  //       this.demageAnimate("eHP",damage);
  //     } else {
  //       this.eHP =0;
  //     }
  //     this.textAtEnemy = "Enemy take "+damage+" damages";
  //   }else {
  //     this.textAtEnemy = "Player attack miss";
  //   }
  //   this.updateBar();
  // }
  //
  // useSkillID_2(){
  //   let damage:number=0;
  //   let randamage:number=(Math.round(Math.random()*10))/100;//0-10
  //   let ranhit:number=Math.round((Math.random()*(100-1))+1);//1-100
  //   this.MP-=50;
  //   if((100-(this.eflee-this.hit))>=ranhit){
  //     let alldamage:number=0;
  //     let i =15;
  //     damage = Math.ceil(((this.atk-(this.atk*randamage))*0.9)-this.edef);
  //     if(this.eHP>damage) {
  //       this.demageAnimate("eHP",damage);
  //     } else {
  //       this.eHP =0;
  //     }
  //     alldamage+=damage;
  //     i--;
  //     this.updateBar();
  //     let interval = setInterval(() => {
  //       damage = Math.ceil(((this.atk-(this.atk*randamage))*0.9)-this.edef);
  //       if(this.eHP>damage) {
  //         this.demageAnimate("eHP",damage);
  //       } else {
  //         this.eHP =0;
  //       }
  //       alldamage+=damage;
  //       i--;
  //       this.updateBar();
  //       if(i<=0) {
  //         clearInterval(interval);
  //       }
  //     }, 200);
  //     this.textAtEnemy = "Enemy take "+alldamage+" damages";
  //   }else {
  //     this.textAtEnemy = "Player attack miss";
  //   }
  //   this.updateBar();
  // }

}
