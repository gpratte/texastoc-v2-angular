import { Component, OnInit } from '@angular/core';
import { Player } from '../../player/model/player';
import {AppService} from '../../app.service';
import {HttpClient} from '@angular/common/http';
import {Router} from '@angular/router';

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
    new Player(3, 'Neophine'),
    new Player(3, 'Snape'),
    new Player(3, 'Trinity')
  ]

  searchResults = [
  ]

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (!this.app.authenticated) {
      this.router.navigate(['/login']);
    }
  }

  select(playerId: number): void {
    console.log('player id ', playerId);
  }

  search(term: string): void {
    console.log('!!! term ', (typeof term))
    if (term.trim() === '') {
      this.searchResults.length = 0;
      console.log('returning')
      return;
    }

    term = term.toLowerCase();
    this.searchResults = this.players.filter(player => player.name.toLowerCase().includes(term));
  }

}
