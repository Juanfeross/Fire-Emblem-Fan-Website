import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { InfoGameComponent } from './components/info-game/info-game.component';
import { StartComponent } from './components/start/start.component';
import { InfoWorldComponent } from './components/info-world/info-world.component';
import { InfoBattleComponent } from './components/info-battle/info-battle.component';
import { SoundtrackComponent } from './components/soundtrack/soundtrack.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    HomeComponent,
    InfoGameComponent,
    StartComponent,
    InfoWorldComponent,
    InfoBattleComponent,
    SoundtrackComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
