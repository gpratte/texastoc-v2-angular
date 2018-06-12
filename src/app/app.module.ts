import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
    CurrentGameComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
