import { Injectable } from '@angular/core';
import { AngularFire, FirebaseListObservable } from 'angularfire2';
import 'rxjs/add/operator/map';
import 'rxjs/Rx';

@Injectable()
export class FireBaseService {
  chars: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) { }

  getChars(){
    this.chars = this.af.database.list('/chars') as FirebaseListObservable<any[]>;
    return this.chars
  }
}
