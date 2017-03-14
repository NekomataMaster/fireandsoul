import { Component, OnInit } from '@angular/core';
// import {} from '../../../share'

@Component({
  selector: 'app-battle',
  host: {'(window:keydown)': 'hotkeys($event)'},
  templateUrl: 'battle.component.html',
  styleUrls: ['battle.component.css']
})
export class BattleComponent implements OnInit {
  HP: number = 0;
  MP: number = 0;
  maxHP: number = 0;
  maxMP: number = 0;
  percentHP: number = 0;
  percentMP: number = 0;
  atk: number = 0;
  def: number = 0;
  matk: number = 0;
  mdef: number = 0;
  hit: number = 0;
  flee: number = 0;
  speed: number = 0;
  cri: number = 0;

  regenMP: number = 0;

  eHP: number = 0;
  eMP: number = 0;
  emaxHP: number = 0;
  emaxMP: number = 0;
  epercentHP: number = 0;
  epercentMP: number = 0;
  eatk: number = 0;
  edef: number = 0;
  ematk: number = 0;
  emdef: number = 0;
  ehit: number = 0;
  eflee: number = 0;
  espeed: number = 0;
  ecri: number = 0;

  potion:number=0;


  text:string=" Let's Fight!!";
  onbattle:boolean=false;
  endgame:boolean=false;

  textAtPlayer:string = "---------------";
  textAtEnemy:string = "---------------";

  constructor() {}

  hotkeys(event){
    console.log(event.keyCode);
    if (event.keyCode == 90 && !this.endgame && !this.onbattle){//a
      this.action(1,1);
    }else if (event.keyCode == 65 && !this.endgame && !this.onbattle && this.MP >=5){//a
      this.action(1,2);
    }else if (event.keyCode == 83 && !this.endgame && !this.onbattle && this.MP >=50){//a
      this.action(2,2);
    }else if (event.keyCode == 49 && !this.endgame && !this.onbattle && this.potion >=1){//a
      this.action(100,3);
    }
  }

  ngOnInit() {
    // let interval = setInterval(() => {
    //   this.HP = this.HP + Math.round(this.maxHP*0.005);
    //   if(this.HP >= this.maxHP) {
    //     this.HP = this.maxHP;
    //     // clearInterval(interval);
    //   }
    //   this.updateBar();
    // }, 10000);
    this.HP =500;
    this.MP =100;
    this.maxHP =500;
    this.maxMP =100;
    this.percentHP = this.HP/this.maxHP*100;
    this.percentMP = this.MP/this.maxMP*100;
    this.atk  = 30;
    this.def  = 20;
    this.matk = 1;
    this.mdef = 20;
    this.hit  = 80;
    this.flee = 80;
    this.speed= 110;
    this.cri  = 5;

    this.regenMP = Math.round(this.maxMP*0.01);

    this.eHP =2500;
    this.eMP =100;
    this.emaxHP =2500;
    this.emaxMP =100;
    this.epercentHP = this.eHP/this.emaxHP*100;
    this.epercentMP = this.eMP/this.emaxMP*100;
    this.eatk  = 50;
    this.edef  = 10;
    this.ematk = 30;
    this.emdef = 10;
    this.ehit  = 50;
    this.eflee = 60;
    this.espeed= 100;
    this.ecri  = 10;

    this.potion = 20;

    this.text=" Let's Fight!!";
    this.onbattle=false;
    this.endgame = false;
  }

  updateBar(){
    this.percentHP = this.HP/this.maxHP*100;
    this.percentMP = this.MP/this.maxMP*100;
    this.epercentHP = this.eHP/this.emaxHP*100;
    this.epercentMP = this.eMP/this.emaxMP*100;
    if(this.HP == 0){
      this.endgame = true;
      this.text = "GAME OVER";
    }
    if(this.eHP == 0){
      this.endgame = true;
      this.text = "Enemy Defeated";
    }
  }

  demageAnimate(target:string,dmg:number){
    if(target=="HP"){
      let likefor = setInterval(() => {
        this.HP--;
        dmg--;
        this.updateBar();
        if(this.HP <= 0||dmg <= 0) {
          if(this.HP <= 0)
            this.HP = 0;
          clearInterval(likefor);
        }
      }, (500/dmg));
    }else if(target=="eHP"){
      let likefor = setInterval(() => {
        this.eHP--;
        dmg--;
        this.updateBar();
        if(this.eHP <= 0||dmg <= 0) {
          if(this.eHP <= 0)
            this.eHP = 0;
          clearInterval(likefor);
        }
      }, (500/dmg));
    }
  }

  getPercent(per:string){
    if(per == "HP"){
      return this.percentHP+"%";
    } else if(per == "MP"){
      return this.percentMP+"%";
    } else if(per == "eHP"){
      return this.epercentHP+"%";
    } else if(per == "eMP"){
      return this.epercentMP+"%";
    }
  }

  getStyle(per:number){
    if(per <= 10){
      return "red";
    } else if(per <= 50){
      return "orange";
    }else if(per <= 100){
      return "green";
    }
  }

  ////////////////////////////////////////////////////////////////////////////////////////////////////

  action(action:number,actiontype:number){
    this.onbattle=true;
    let eaction:number = 1;let eactiontype:number = 1;
    if(this.speed>this.espeed){
      this.playerAction(action,actiontype);
      setTimeout(()=>{
        if(this.eHP >0)
          this.enemyAction();
        setTimeout(()=> {this.onbattle=false;}, (this.actionTimer(eaction,eactiontype)+300) );
      }, (this.actionTimer(action,actiontype)+300));
    }else{
      this.enemyAction();
      setTimeout(()=>{
      if(this.HP >0)
        this.playerAction(action,actiontype);
        setTimeout(()=> {this.onbattle=false;}, (this.actionTimer(eaction,eactiontype)+300));
      }, (this.actionTimer(action,actiontype)+300));
    }
    if(!this.endgame){
      if(this.maxMP-this.MP>this.regenMP) {
        this.MP += this.regenMP;
      } else {
        this.MP = this.maxMP;
      }
      this.updateBar();
    }
  }

  actionTimer(action:number,actiontype:number){
    if(actiontype == 1){
      return (0+500);
    }else if(actiontype == 2){
      if(action == 1){
        return (0+500);
      }else if(action == 2){
        return (0+((200*15)+200));
      }
    }else if(actiontype == 3){
      if(action == 1){
        return (0+500);
      }
    }
  }

  playerAction(action:number,actiontype:number){
    if(actiontype == 1){
      this.PaE();
    }else if(actiontype == 2){
      this.useSkill(action);
    }else if(actiontype == 3){
      this.useItem(action);
    }
  }

  enemyAction(){
    let action:number=Math.round((Math.random()*(100-1))+1)//1-100
    if(action <= 75){
      this.EaP();
    }else if(action <= 99){
      this.EaP();
      this.EaP();
      this.EaP();
    }
    else if(action <= 100){
      for(let i=0;i<50;i++){
        this.EaP();
      }
    }
  }

  PaE(){
    let damage:number=0;
    let randamage:number=(Math.round(Math.random()*10))/100;//0-10
    let ranhit:number=Math.round((Math.random()*(100-1))+1);//1-100
    let rancri:number=Math.round((Math.random()*(100-1))+1);//1-100
    if(this.cri>=rancri){
      damage = Math.ceil(this.atk-(this.atk*randamage));
      if(this.eHP>damage) {
        // this.eHP -= damage;
        this.demageAnimate("eHP",damage);
      } else {
        this.eHP = 0;
      }
      this.textAtEnemy = "Enemy take "+damage+" critical damages";
    }else if((100-(this.eflee-this.hit))>=ranhit){
      damage = Math.ceil((this.atk-(this.atk*randamage))-this.edef);
      if(this.eHP>damage) {
        // this.eHP -= damage;
        this.demageAnimate("eHP",damage);
      } else {
        this.eHP =0;
      }
      this.textAtEnemy = "Enemy take "+damage+" damages";
    }else {
      this.textAtEnemy = "Player attack miss";
    }

    // this.updateBar();
  }
  EaP(){
    let damage:number=0;
    let randamage:number=(Math.round(Math.random()*10))/100;//0-10
    let ranhit:number=Math.round((Math.random()*(100-1))+1);//1-100
    let rancri:number=Math.round((Math.random()*(100-1))+1);//1-100
    if(this.ecri>=rancri){
      damage = Math.ceil(this.eatk-(this.eatk*randamage));
      if(this.HP>damage) {
        this.demageAnimate("HP",damage);
      } else {
        this.HP = 0;
      }
      this.textAtPlayer = "Player take "+damage+" critical damages";
    }else if((100-(this.flee-this.ehit))>=ranhit){
      damage = Math.ceil((this.eatk-(this.eatk*randamage))-this.def);
      if(this.HP>damage) {
        this.demageAnimate("HP",damage);
      } else {
        this.HP =0;
      }
      this.textAtPlayer = "Player take "+damage+" damages";
    }else {
      this.textAtPlayer = "Enemy attack miss";
    }
    this.updateBar();
  }

  useItem(itemID:number){
    if(itemID == 100){
      this.useItemID_100();
    }
  }
  useSkill(skillID:number){
    if(skillID == 1){
      this.useSkillID_1()
    }else if(skillID == 2){
      this.useSkillID_2()
    }



  }
////////////////////////////////////////////////////////////////////////////////////////////////
  useItemID_100(){
    if(this.potion!=0){
      let recover = 150;
      if(this.maxHP-this.HP>recover) {
        this.HP += recover;
      } else {
        this.HP = this.maxHP;
      }
      this.potion--;
    }else{
      if(this.maxHP-this.HP>10) {
        this.HP += 10;
      } else {
        this.HP = this.maxHP;
      }
    }
    this.textAtEnemy = "";
    this.updateBar();
  }

  useSkillID_1(){
    let damage:number=0;
    let randamage:number=(Math.round(Math.random()*10))/100;//0-10
    let ranhit:number=Math.round((Math.random()*(100-1))+1);//1-100
    this.MP-=5;
    if((100-(this.eflee-this.hit))>=ranhit){
      damage = Math.ceil(((this.atk-(this.atk*randamage))*2.25)-this.edef);
      if(this.eHP>damage) {
        this.demageAnimate("eHP",damage);
      } else {
        this.eHP =0;
      }
      this.textAtEnemy = "Enemy take "+damage+" damages";
    }else {
      this.textAtEnemy = "Player attack miss";
    }
    this.updateBar();
  }

  useSkillID_2(){
    let damage:number=0;
    let randamage:number=(Math.round(Math.random()*10))/100;//0-10
    let ranhit:number=Math.round((Math.random()*(100-1))+1);//1-100
    this.MP-=50;
    if((100-(this.eflee-this.hit))>=ranhit){
      let alldamage:number=0;
      let i =15;
      damage = Math.ceil(((this.atk-(this.atk*randamage))*0.9)-this.edef);
      if(this.eHP>damage) {
        this.demageAnimate("eHP",damage);
      } else {
        this.eHP =0;
      }
      alldamage+=damage;
      i--;
      this.updateBar();
      let interval = setInterval(() => {
        damage = Math.ceil(((this.atk-(this.atk*randamage))*0.9)-this.edef);
        if(this.eHP>damage) {
          this.demageAnimate("eHP",damage);
        } else {
          this.eHP =0;
        }
        alldamage+=damage;
        i--;
        this.updateBar();
        if(i<=0) {
          clearInterval(interval);
        }
      }, 200);
      this.textAtEnemy = "Enemy take "+alldamage+" damages";
    }else {
      this.textAtEnemy = "Player attack miss";
    }
    this.updateBar();
  }
}
