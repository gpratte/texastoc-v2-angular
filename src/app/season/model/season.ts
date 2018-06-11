import { Payout } from './../../payout/model/payout';
import { Player } from './../../player/model/player';
import { Quarter } from './quarter';
import { Game } from './../../game/model/game';

export class Season {

  constructor(
    public start: string,
    public end: string,
    public startYear: string,
    public endYear: string,
    public id?: number,
    public numGames?: number,
    public buyIn?: number,
    public rebuyAddOn?: number,
    public annualTocAmount?: number,
    public payouts?: Payout[],
    public players?: Player[],
    public quarters?: Quarter[],
    public games?: Game[]
  ) {}

}
