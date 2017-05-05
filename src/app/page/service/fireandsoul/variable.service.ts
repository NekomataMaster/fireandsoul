import { Injectable } from '@angular/core';
import {BehaviorSubject} from "rxjs";
import {CharInfo} from "../../model/fireandsoul/charInfo";

@Injectable()
export class ValiableService {

  mapnumber: BehaviorSubject<string> = new BehaviorSubject(null);
  gameState: BehaviorSubject<string> = new BehaviorSubject(null);
  charData: BehaviorSubject<CharInfo> = new BehaviorSubject(null);

  constructor() { }

  gsLogin(){
    this.gameState.next("login");
    return "login";
  }
  gsRegister(){
    this.gameState.next("register");
    return "register";
  }
  gsSelect(){
    this.gameState.next("select");
    return "select";
  }
  gsCreate(){
    this.gameState.next("create");
    return "create";
  }
  gsTravel(){
    this.gameState.next("travel");
    return "travel";
  }
  gsStat(){
    this.gameState.next("stat");
    return "stat";
  }
  gsBattle(){
    this.gameState.next("battle");
    return "battle";
  }
  gsVictory(){
    this.gameState.next("victory");
    return "victory";
  }
  gsOver(){
    this.gameState.next("over");
    return "over";
  }

}
