import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login/login.component';
import { AppRoutingModule } from './/app-routing.module';
import { ForgotPasswordComponent } from './login/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './login/reset-password/reset-password.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SeasonComponent } from './season/season/season.component';
import { SuppliesComponent } from './supply/supplies/supplies.component';
import { GameComponent } from './game/game/game.component';
import { CurrentGameComponent } from './game/current-game/current-game.component';
import { GameSeatingComponent } from './game/game-seating/game-seating.component';
import { NewPlayerComponent } from './game/new-player/new-player.component';
import { ExistingPlayerComponent } from './game/existing-player/existing-player.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ForgotPasswordComponent,
    ResetPasswordComponent,
    NavbarComponent,
    SeasonComponent,
    SuppliesComponent,
    GameComponent,
    CurrentGameComponent,
    GameSeatingComponent,
    NewPlayerComponent,
    ExistingPlayerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
