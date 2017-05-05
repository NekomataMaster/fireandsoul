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
  GrowlModule,
  GMapModule } from 'primeng/primeng';

import { AppComponent } from './app.component';
import { GooglemapComponent } from './test/googlemap/googlemap.component';
import { MainComponent } from './page/component/main/main.component';
import { HeaderComponent } from './share/component/header/header.component';
import { FireAndSoulComponent } from './page/component/fireandsoul/fireandsoul.component';
import { FirebaseComponent } from './test/firebase/firebase.component';
import { AngularFireModule } from 'angularfire2';
import { MapslotService } from './page/service/fireandsoul/mapslot.service';
import { ValiableService } from './page/service/fireandsoul/variable.service';
import {DataBaseService} from './page/service/fireandsoul/database-service';

import { appRoutingProviders, routing } from "./app.routing";
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
    GooglemapComponent,
    MainComponent,
    HeaderComponent,
    FireAndSoulComponent,
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
    GrowlModule,
    GMapModule,
    routing,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [appRoutingProviders,FireBaseService,TestApi,TutorialService,EmployeeService,MapslotService,ValiableService,DataBaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
