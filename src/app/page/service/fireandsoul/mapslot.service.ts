import { Injectable } from '@angular/core';
import {Response, Http} from "@angular/http";

@Injectable()
export class MapslotService {

  constructor(private http:Http) { }

  getmap(mapnumber:string){
    return this.http.get('../../../app/share/json/map'+mapnumber+'.json').map((response:Response) => response.json());
  }

}
