import { Payout } from './../../payout/model/payout';
import { Player } from './../../player/model/player';

export class Quarter {

  constructor(
    public start: string,
    public end: string,
    public quarter: number,
    public id?: number,
    public numGames?: number,
    public quarterlyTocAmount?: number,
    public payouts?: Payout[],
    public players?: Player[]
  ) {}

}
