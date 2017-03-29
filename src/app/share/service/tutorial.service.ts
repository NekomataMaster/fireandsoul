import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';

@Injectable()
export class TutorialService {

  constructor(private http:Http) { }

  getEmployee(){
    return this.http.get('http://157.179.132.123:3000/api/Employees').map((response:Response) => response.json());
  }

}
