import { Component, OnInit } from '@angular/core';
import { Player } from '../../player/model/player';

@Component({
  selector: 'app-existing-player',
  templateUrl: './existing-player.component.html',
  styleUrls: ['./existing-player.component.css']
})
export class ExistingPlayerComponent implements OnInit {

  players = [
    new Player(1, 'Tom', undefined, undefined, 5),
    new Player(2, 'Dick', undefined, undefined, 5),
    new Player(3, 'Harry', undefined, undefined, 4),
    new Player(3, 'Ron', undefined, undefined, 2),
    new Player(3, 'Hermione', undefined, undefined, 1),
    new Player(3, 'Draco'),
    new Player(3, 'Morpheous'),
    new Player(3, 'Neo'),
    new Player(3, 'Snape'),
    new Player(3, 'Trinity')
  ]

  constructor() { }

  ngOnInit() {
  }

}
