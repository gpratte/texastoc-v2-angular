import { Component, OnInit } from '@angular/core';
import { Season } from '../model/season';
import { AppService } from '../../app.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

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
    ],
    games: [
      {
        id: 1,
        date: '2019-06-02',
        started: '7:30',
        hostId: 1,
        hostName: "Brian",
        transportRequired: false,
        doubleBuyin: false,
        seasonOrdinal: 1,
        quarterOrdinal: 1,
        numPlayers: 21,
        buyIn: 890,
        rebuyAddOn: 200,
        annualTocAmount: 300,
        quarterlyTocAmount: 160,
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
            id: 100,
            playerId: 100,
            name: "Tom",
            buyIn: 40,
            reBuyAddOn: 20,
            annualTocAmout: 10,
            quarterlyTocAmount: 10,
            place: 1,
            points: 100
          },
          {
            id: 101,
            playerId: 101,
            name: "Dick",
            buyIn: 40,
            reBuyAddOn: 20,
            annualTocAmout: 10,
            place: 2,
            points: 85
          },
          {
            id: 102,
            playerId: 102,
            name: "Harry",
            buyIn: 40
          }
        ]
      },
      {
        id: 2,
        date: '2019-06-03',
        started: '7:30',
        hostId: 1,
        hostName: "Beau",
        transportRequired: false,
        doubleBuyin: false,
        seasonOrdinal: 1,
        quarterOrdinal: 1,
        numPlayers: 21,
        buyIn: 890,
        rebuyAddOn: 200,
        annualTocAmount: 300,
        quarterlyTocAmount: 160,
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
            id: 100,
            playerId: 100,
            name: "Tom",
            buyIn: 40,
            reBuyAddOn: 20,
            annualTocAmout: 10,
            quarterlyTocAmount: 10,
            place: 1,
            points: 100
          },
          {
            id: 101,
            playerId: 101,
            name: "Dick",
            buyIn: 40,
            reBuyAddOn: 20,
            annualTocAmout: 10,
            place: 2,
            points: 85
          },
          {
            id: 102,
            playerId: 102,
            name: "Harry",
            buyIn: 40
          }
        ]
      }
    ]
  };

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (!this.app.authenticated) {
      this.router.navigate(['/login']);
    }
  }

}
