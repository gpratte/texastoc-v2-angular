import { Payout } from '../../payout/model/payout';
import { GamePlayer } from './game.player';

export class Game {

  constructor(
    public date: string,
    public hostId: number,
    public transportRequired: boolean,
    public doubleBuyin: boolean,
    public id?: number,
    public started?: string,
    public hostName?: string,
    public seasonOrdinal?: number,
    public quarterOrdinal?: number,
    public numPlayers?: number,
    public kitty?: number,
    public buyIn?: number,
    public rebuyAddOn?: number,
    public annualTocAmount?: number,
    public adjustedRebuyAddOn?: number,
    public adjustedAnnualTocAmount?: number,
    public quarterlyTocAmount?: number,
    public payouts?: Payout[],
    public players?: GamePlayer[]
  ) {}

}
