import { Payout } from './payout';
import { Player } from './player';
import { Quarter } from './quarter';

export class Season {
  id: number;
  start: string;
  end: string;
  startYear: string;
  endYear: string;
  numGames: number;
  buyIn: number;
  rebuyAddOn: number
  annualTocAmount: number;
  payouts: Payout[];
  players: Player[];
  quarters: Quarter[];
}
