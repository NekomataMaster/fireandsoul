import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable,AngularFireDatabase } from 'angularfire2';

@Injectable()
export class DataBaseService {
  chars2: FirebaseListObservable<any[]>;

  constructor(private angularFireDatabase: AngularFireDatabase) { }

  getChars2(){
    this.chars2 = this.angularFireDatabase.list('/chars');
    console.log(this.chars2);
    return this.chars2
  }


}
