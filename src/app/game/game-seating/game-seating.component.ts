import { Component, OnInit } from '@angular/core';
import { Seating } from '../model/seating';
import { Player } from '../../player/model/player';

@Component({
  selector: 'app-game-seating',
  templateUrl: './game-seating.component.html',
  styleUrls: ['./game-seating.component.css']
})
export class GameSeatingComponent implements OnInit {

  model = new Seating(0, 0);

  players = [
    new Player(1, 'Tom'),
    new Player(2, 'Dick'),
    new Player(3, 'Harry')
  ]

  constructor() { }

  ngOnInit() {
  }

}
