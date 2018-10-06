import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { Player } from '../../player/model/player';
import {AppService} from '../../app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  model = new Game(null, null, false, false);

  players = [
    new Player(1, 'Tom'),
    new Player(2, 'Dick'),
    new Player(3, 'Harry')
  ]

  onSubmit() {
    console.log('submitted ' + JSON.stringify(this.model));
  }

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (!this.app.authenticated) {
      this.router.navigate(['/login']);
    }
  }

}
