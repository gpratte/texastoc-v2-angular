import { Component, OnInit } from '@angular/core';
import { Seating } from '../model/seating';
import { Player } from '../../player/model/player';
import { Table } from '../model/table';
import { Seat } from '../model/seat';

@Component({
  selector: 'app-game-seating',
  templateUrl: './game-seating.component.html',
  styleUrls: ['./game-seating.component.css']
})
export class GameSeatingComponent implements OnInit {

  model = new Seating(null, null);

  numTables = [1,2,3,4,5,6,7,8,9];

  numSeatsPerTable = [1,2,3,4,5,6,7,8,9,10];

  numSpecialSeating = 0;

  players = [
    new Player(1, 'Tom'),
    new Player(2, 'Dick'),
    new Player(3, 'Harry')
  ]

  tables = [
    new Table(1, [
      new Seat(1,100,"Tom"),
      new Seat(4,101,"Dick"),
      new Seat(7,102,"Harry"),
    ]),
    new Table(2, [
      new Seat(2,100,"Tina Louise"),
      new Seat(5,101,"Dina"),
      new Seat(8,102,"Hina"),
    ])
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
