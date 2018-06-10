import { Component, OnInit } from '@angular/core';
import { Season } from '../model/season';

@Component({
  selector: 'app-season',
  templateUrl: './season.component.html',
  styleUrls: ['./season.component.css']
})
export class SeasonComponent implements OnInit {

  season: Season = {
    id: 1,
    start: '2018-06-03',
    end: '2019-06-02',
    startYear: '2018',
    endYear: '2019',
    numGames: 2,
    buyIn: 2040,
    rebuyAddOn: 670,
    annualTocAmount: 860,
    payouts: [
      {
        amount: 100,
        place: 1
      },
      {
        amount: 85,
        place: 2
      }
    ],
    players: [
      {
        entries: 2,
        name: "Tom",
        place: 1,
        id: 100,
        points: 100
      },
      {
        entries: 1,
        name: "Dick",
        place: 2,
        id: 101,
        points: 88
      },
      {
        entries: null,
        name: "Harry",
        place: null,
        id: 102,
        points: null
      }
    ],
    quarters: [
      {
        id: 1,
        quarter: 1,
        start: '2018-06-03',
        end: '2019-06-02',
        numGames: 2,
        quarterlyTocAmount: 860,
        payouts: [
          {
            amount: 100,
            place: 1
          },
          {
            amount: 85,
            place: 2
          }
        ],
        players: [
          {
            entries: 2,
            name: "Tom",
            place: 1,
            id: 100,
            points: 100
          },
          {
            entries: 1,
            name: "Dick",
            place: 2,
            id: 101,
            points: 88
          }
        ]
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
