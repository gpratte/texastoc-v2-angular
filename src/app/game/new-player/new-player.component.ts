import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AppService} from '../../app.service';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-new-player',
  templateUrl: './new-player.component.html',
  styleUrls: ['./new-player.component.css']
})
export class NewPlayerComponent implements OnInit {

  constructor(private app: AppService, private http: HttpClient, private router: Router) { }

  ngOnInit() {
    if (!this.app.authenticated) {
      this.router.navigate(['/login']);
    }
  }

  onSubmit() {
    this.router.navigate(['/current-game']);
  }


}
