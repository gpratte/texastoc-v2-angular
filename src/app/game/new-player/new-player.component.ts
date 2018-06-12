import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  constructor(private router: Router) {}

  ngOnInit() {
  }

  onSubmit() {
    this.router.navigate(['/current-game']);
  }


}
