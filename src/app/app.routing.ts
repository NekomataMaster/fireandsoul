import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {BattleComponent} from './page/component/battle/battle.component';
import {StatpanelComponent} from './page/component/statpanel/statpanel.component';
import {MainComponent} from './page/component/main/main.component';
import {TravelComponent} from './page/component/travel/travel.component';


import {GooglemapComponent} from './test/googlemap/googlemap.component';
import {FirebaseComponent} from './test/firebase/firebase.component';
import {TesterComponent} from './test/tester/tester.component';


import {Tutorial01Component} from './test/tutorial01/tutorial01.component';
import {TutorialEmpComponent} from './test/tutorial-emp/tutorial-emp.component';



const appRoutes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full'},
    { path: 'battle', component: BattleComponent },
    { path: 'stat', component: StatpanelComponent },
    { path: 'travel', component: TravelComponent },
    { path: 'googlemap', component: GooglemapComponent },
    { path: 'firebase', component: FirebaseComponent },
    { path: 'tester', component: TesterComponent },
    { path: 'tutorial01', component: Tutorial01Component },
    { path: 'tutorialEmp', component: TutorialEmpComponent },



];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
