import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {MapslotService} from "../../service/fireandsoul/mapslot.service";
import {ValiableService} from "../../service/fireandsoul/variable.service";
import {CharInfo} from "../../model/fireandsoul/charInfo";
import {Status} from "../../model/fireandsoul/status";
import {Message} from 'primeng/primeng';
import {FireBaseService} from "../../../share/service/firebase-service";

@Component({
  selector: 'app-travel',
  host: {'(window:keydown)': 'hotkeys($event)'},
  templateUrl: 'fireandsoul.component.html',
  styleUrls: ['fireandsoul.component.css']
})
export class FireAndSoulComponent implements OnInit {

  private msg: Message[] = [];
  private gameState:any;

  //////////////////////
  private usernameLogin:string;
  private passwordLogin:string;


  private username:string;
  private idTeam:any[]=[{id:null,teamName:null},{id:null,teamName:null},{id:null,teamName:null}];


  private position:number = 0;

  private player:CharInfo[]=[null,null,null,null];
  private playerBattle:Status[]=[null,null,null,null];

  private enemyBattle:Status[]=[null,null,null,null];

  private testtext = "Nekomata Team";

  constructor(private router : Router,
              private mapslotService : MapslotService,
              private valiableService : ValiableService,
              private FireBaseService : FireBaseService) { }

  hotkeys(event){
    console.log(event.keyCode);
    if(this.gameState == "login"){
      if (event.keyCode == 13){
          this.login();
      }
    }

    if(this.gameState == "battle"){
      // if (event.keyCode == 90 && !this.endgame && !this.onbattle){//z
      //   // this.action(1,1);
      // }else if (event.keyCode == 65 && !this.endgame && !this.onbattle && this.MP >=5){//a
      //   // this.action(1,2);
      // }else if (event.keyCode == 83 && !this.endgame && !this.onbattle && this.MP >=50){//s
      //   // this.action(2,2);
      // }else if (event.keyCode == 49 && !this.endgame && !this.onbattle && this.potion >=1){//1
      //   // this.action(100,3);
      // }
    }
  }

  ngOnInit() {
    this.disableScroll();
    this.gameState = this.valiableService.gsLogin();


    this.idTeam[0] = {id:17234,teamName:"Nekomata Team"};
    this.idTeam[1] = {id:null,teamName:null};
    this.idTeam[2] = {id:null,teamName:null};

    this.player[0] = null;
    this.player[1] = null;
    this.player[2] = null;
    this.player[3] = null;
    this.playerBattle[0] = null;
    this.playerBattle[1] = null;
    this.playerBattle[2] = null;
    this.playerBattle[3] = null;

  }
  
  test(){
    console.log(this.gameState);
  }

  logout(){
    this.gameState = this.valiableService.gsLogin();
  }

  disableScroll(){
    var keys = {};
    window.addEventListener("keydown",
        function(e){
          keys[e.keyCode] = true;
          switch(e.keyCode){
            case 37: case 39: case 38:  case 40: // Arrow keys
            case 32: e.preventDefault(); break; // Space
            default: break; // do not block other keys
          }
        },
        false);
    window.addEventListener('keyup',
        function(e){
          keys[e.keyCode] = false;
        },
        false);
  }

  ////////////////////////////////////////////////////////////

  login(){

    // if(this.usernameLogin == "nekomata" && this.passwordLogin == "1234"){
      this.gameState = this.valiableService.gsSelect();
    // } else {
    //   this.msg.push({severity:'warn', summary:'Warning', detail:'Username and/or Password Incorrect.'});
    // }


  }

  register(){
    this.gameState = this.valiableService.gsRegister();
  }

  registing(){
    this.gameState = this.valiableService.gsLogin();
  }

  select(){
    this.gameState = this.valiableService.gsTravel();
  }

  create(){
    this.gameState = this.valiableService.gsCreate();
  }

  creating(){
    this.gameState = this.valiableService.gsSelect();
  }

  ////////////////////////////////////////////////////////////

  travel(){
    this.gameState = this.valiableService.gsTravel();
  }

  stat(){
    this.gameState = this.valiableService.gsStat();
  }

  battle(){
    this.gameState = this.valiableService.gsBattle();
  }

  victory(){
    this.gameState = this.valiableService.gsVictory();
  }

  gameover(){
    this.gameState = this.valiableService.gsOver();
  }

  ////////////////////////////////////////////////////////////

  searchBattle(){
    this.battle();
  }

  travelF(){
    this.battle();
  }

  travelB(){
    this.battle();
  }

  ////////////////////////////////////////////////////////////

  attack(){
    this.victory();
  }

  escape(){
    this.gameState = this.valiableService.gsTravel();
  }

  ////////////////////////////////////////////////////////////

  ngOnDestroy(){
    console.log("ONDES");
  }

}
