import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-statpanel',
  host: {'(window:keydown)': 'hotkeys($event)'},
  templateUrl: 'statpanel.component.html',
  styleUrls: ['statpanel.component.css']
})
export class StatpanelComponent implements OnInit {
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
  endgame:boolean=false;

  textAtPlayer:string = "---------------";
  textAtEnemy:string = "---------------";

  constructor() {}

  hotkeys(event){

    if (event.keyCode == 65 && !this.endgame){//a
      this.action(1,1);
    }
  }

  colorHP(){
    document.getElementById('id1').style.color = 'red'
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

  action(action:number,actiontype:number){
    if(this.speed>this.espeed){
      this.playerAction(action,actiontype);
      if(this.eHP >0)
        this.enemyAction();
    }else{
      this.enemyAction();
      if(this.eHP >0)
        this.playerAction(action,actiontype);
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
          this.eHP -= damage;
        } else {
          this.eHP = 0;
      }
      this.textAtEnemy = "Enemy take "+damage+" critical damages";
    }else if((100-(this.eflee-this.hit))>=ranhit){
      damage = Math.ceil((this.atk-(this.atk*randamage))-this.edef);
      if(this.eHP>damage) {
        this.eHP -= damage;
      } else {
        this.eHP =0;
      }
      this.textAtEnemy = "Enemy take "+damage+" damages";
    }else {
      this.textAtEnemy = "Player attack miss";
    }

    this.updateBar();
  }
  EaP(){
    let damage:number=0;
    let randamage:number=(Math.round(Math.random()*10))/100;//0-10
    let ranhit:number=Math.round((Math.random()*(100-1))+1);//1-100
    let rancri:number=Math.round((Math.random()*(100-1))+1);//1-100
    if(this.ecri>=rancri){
      damage = Math.ceil(this.eatk-(this.eatk*randamage));
      if(this.HP>damage) {
        this.HP -= damage;
      } else {
        this.HP = 0;
      }
      this.textAtPlayer = "Player take "+damage+" critical damages";
    }else if((100-(this.flee-this.ehit))>=ranhit){
      damage = Math.ceil((this.eatk-(this.eatk*randamage))-this.def);
      if(this.HP>damage) {
        this.HP -= damage;
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
        this.eHP -= damage;
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
      for(let i =0;i<15;i++){
        damage = Math.ceil(((this.atk-(this.atk*randamage))*0.9)-this.edef);
        if(this.eHP>damage) {
          this.eHP -= damage;
        } else {
          this.eHP =0;
        }
        alldamage+=damage;
      }
      this.textAtEnemy = "Enemy take "+alldamage+" damages";
    }else {
      this.textAtEnemy = "Player attack miss";
    }
    this.updateBar();
  }


}
