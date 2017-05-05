import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable,AngularFireDatabase } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()
export class FireBaseService {
  chars: FirebaseListObservable<any[]>;
  chars2: FirebaseListObservable<any[]>;

  constructor(private angularFire: AngularFire,private agularFireDatabase: AngularFireDatabase,private http:Http) { }

  getChars(){
    this.chars = this.angularFire.database.list('/chars') as FirebaseListObservable<any[]>;
    return this.chars
  }

  getChars2(){
    this.chars2 = this.agularFireDatabase.list('/chars');
    console.log(this.chars2);
    return this.chars2
  }

  addChars(){

  }

  // getA() {
  //   return this.http.get('http://157.179.8.104/testSwagger/test').map(data => data.json());
  // }

}
