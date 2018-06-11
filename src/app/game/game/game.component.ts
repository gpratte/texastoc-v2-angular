import { Component, OnInit } from '@angular/core';
import { Game } from '../model/game';
import { Player } from '../../player/model/player';

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

  constructor() { }

  ngOnInit() {
  }

}
