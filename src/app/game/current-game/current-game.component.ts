import { Component, OnInit } from '@angular/core';
import {AppService} from '../../app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

@Component({
  selector: 'app-current-game',
  templateUrl: './current-game.component.html',
  styleUrls: ['./current-game.component.css']
})
export class CurrentGameComponent implements OnInit {

  game = {
    id: 1,
    date: '2019-06-02',
    started: '7:30',
    hostId: 1,
    hostName: "Brian",
    transportRequired: false,
    doubleBuyin: false,
    seasonOrdinal: 1,
    quarterOrdinal: 1,
    numPlayers: 20,
    kitty: 10,
    buyIn: 800,
    rebuyAddOn: 400,
    adjustedRebuyAddOn: 200,
    annualTocAmount: 100,
    adjustedAnnualTocAmount: 200,
    quarterlyTocAmount: 50,
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
    ],
    paidPlayers: 20,
    numRemainingPlayers: 15,
    averageStack: 6250,
    showChop: false
  };


  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (!this.app.authenticated) {
      this.router.navigate(['/login']);
    }
  }

}
