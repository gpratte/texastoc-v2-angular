import { Payout } from './payout';
import { Player } from './player';

export class Quarter {
  id: number;
  start: string;
  end: string;
  quarter: number;
  numGames: number;
  quarterlyTocAmount: number;
  payouts: Payout[];
  players: Player[];
}
