import {Routes, RouterModule} from '@angular/router';
import {ModuleWithProviders} from "@angular/core";

import {BattleComponent} from './page/component/battle/battle.component';
import {StatpanelComponent} from './page/component/statpanel/statpanel.component';
import {MainComponent} from './page/component/main/main.component';
import {TravelComponent} from './page/component/travel/travel.component';


import {GooglemapComponent} from './test/googlemap/googlemap.component';
import {FirebaseComponent} from './test/firebase/firebase.component';

const appRoutes: Routes = [
    { path: '', component: MainComponent, pathMatch: 'full'},
    { path: 'battle', component: BattleComponent },
    { path: 'stat', component: StatpanelComponent },
    { path: 'travel', component: TravelComponent },
    { path: 'googlemap', component: GooglemapComponent },
    { path: 'firebase', component: FirebaseComponent }

];

export const appRoutingProviders: any[] = [

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
