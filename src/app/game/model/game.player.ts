export class GamePlayer {

  constructor(
    public playerId: number,
    public name: string,
    public buyIn: number,
    public id?: number,
    public reBuyAddOn?: number,
    public annualTocAmout?: number,
    public quarterlyTocAmount?: number,
    public place?: number,
    public points?: number,
    public chop?: number
  ) {}
}
