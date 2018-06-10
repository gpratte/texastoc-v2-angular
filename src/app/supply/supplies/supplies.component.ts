import { Component, OnInit } from '@angular/core';
import { Supplies } from '../model/supplies';

@Component({
  selector: 'app-supplies',
  templateUrl: './supplies.component.html',
  styleUrls: ['./supplies.component.css']
})
export class SuppliesComponent implements OnInit {

  supplies: Supplies = {
    kittyAmount: 450,
    supplies: [
      {
        id: 1,
        date: '2017-10-05',
        type: 'Chips',
        cost: 44,
        description: "New chip case for 1000 chips"
      },
      {
        id: 2,
        date: '2017-09-23	',
        type: 'texastoc',
        cost: 55,
        description: "virtual server for 2016"
      }
    ]
  };

  constructor() { }

  ngOnInit() {
  }

}
