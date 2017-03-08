import { Component, OnInit } from '@angular/core';
import {FireBaseService} from '../../share/service/firebase-service';

@Component({
  selector: 'app-firebase',
  templateUrl: './firebase.component.html',
  styleUrls: ['./firebase.component.css']
})
export class FirebaseComponent implements OnInit {
  chars:any[];
  constructor(private fireBaseService: FireBaseService) {}
  ngOnInit() {
    this.fireBaseService.getChars().subscribe((data:any) => {
      this.chars=data;
    });
  }

}
