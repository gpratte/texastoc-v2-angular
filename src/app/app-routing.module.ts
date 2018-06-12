
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login/login.component';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeasonComponent } from './season/season/season.component';
import { SuppliesComponent } from './supply/supplies/supplies.component';
import { GameComponent } from './game/game/game.component';
import { CurrentGameComponent } from './game/current-game/current-game.component';
import { NewPlayerComponent } from './game/new-player/new-player.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent },
  { path: 'season', component: SeasonComponent },
  { path: 'supplies', component: SuppliesComponent },
  { path: 'game', component: GameComponent },
  { path: 'current-game', component: CurrentGameComponent },
  { path: 'new-player', component: NewPlayerComponent }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
