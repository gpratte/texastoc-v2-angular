import { Seat } from './seat';

export class Table {

  constructor(
    public number: number,
    public seats: Seat[]
  ) {}

}
