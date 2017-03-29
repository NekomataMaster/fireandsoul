import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()
export class FireBaseService {
  chars: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire,private http:Http) { }

  getChars(){
    this.chars = this.af.database.list('/chars') as FirebaseListObservable<any[]>;
    return this.chars
  }

  getA() {
    return this.http.get('http://157.179.8.104/testSwagger/test').map(data => data.json());
  }

}
