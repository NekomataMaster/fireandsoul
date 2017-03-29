import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {
  DataTableModule,
  InputTextModule,
  ProgressBarModule,
  ButtonModule,
  DropdownModule,
  GMapModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { StatpanelComponent } from './page/component/statpanel/statpanel.component';
import { GooglemapComponent } from './test/googlemap/googlemap.component';
import { BattleComponent } from './page/component/battle/battle.component';
import {appRoutingProviders, routing} from "./app.routing";
import { MainComponent } from './page/component/main/main.component';
import { HeaderComponent } from './share/component/header/header.component';
import { TravelComponent } from './page/component/travel/travel.component';
import { FirebaseComponent } from './test/firebase/firebase.component';
import { AngularFireModule } from 'angularfire2';

import {FireBaseService} from './share/service/firebase-service';
import {TestApi} from './share/service/TestApi';
import { TesterComponent } from './test/tester/tester.component';

import { Tutorial01Component } from './test/tutorial01/tutorial01.component';
import { Tutorial02Component } from './test/tutorial02/tutorial02.component';
import {TutorialService} from './share/service/tutorial.service';
import {EmployeeService} from './share/service/employee.service';
import { TutorialEmpComponent } from './test/tutorial-emp/tutorial-emp.component';
import { TutorialEmpFormComponent } from './test/tutorial-emp-form/tutorial-emp-form.component';
import { TutorialEmpTableComponent } from './test/tutorial-emp-table/tutorial-emp-table.component';

export const firebaseConfig = {
  apiKey: "AIzaSyB0Cw8xKGgLz5pz8T4JVbzLPPuz2eiJidM",
  authDomain: "fireandsoul-48726.firebaseapp.com",
  databaseURL: "https://fireandsoul-48726.firebaseio.com",
  storageBucket: "fireandsoul-48726.appspot.com",
  messagingSenderId: "725774315755"
};


@NgModule({
  declarations: [
    AppComponent,
    StatpanelComponent,
    GooglemapComponent,
    BattleComponent,
    MainComponent,
    HeaderComponent,
    TravelComponent,
    HeaderComponent,
    FirebaseComponent,
    TesterComponent,
    Tutorial01Component,
    Tutorial02Component,
    TutorialEmpComponent,
    TutorialEmpFormComponent,
    TutorialEmpTableComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    ProgressBarModule,
    DataTableModule,
    InputTextModule,
    DropdownModule,
    ButtonModule,
    GMapModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [appRoutingProviders,FireBaseService,TestApi,TutorialService,EmployeeService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
