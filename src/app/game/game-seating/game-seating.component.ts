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

  numTables = [1,2,3,4,5,6,7,8,9];

  numSeatsPerTable = [1,2,3,4,5,6,7,8,9,10];

  numSpecialSeating = 0;

  players = [
    new Player(1, 'Tom'),
    new Player(2, 'Dick'),
    new Player(3, 'Harry')
  ]

  addSpecialSeat(): void {
    this.numSpecialSeating = this.numSpecialSeating + 1;
  }

  removeSpecialSeat(): void {
    this.numSpecialSeating = this.numSpecialSeating - 1;
  }

  onSubmit() {
    console.log('submitted ' + JSON.stringify(this.model));
  }


  constructor() { }

  ngOnInit() {
  }

}
