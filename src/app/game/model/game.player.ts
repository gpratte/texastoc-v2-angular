export class GamePlayer {

  constructor(
    public id: number,
    public name: string,
    public buyIn: number,
    public reBuyAddOn?: number,
    public annualTocAmout?: number,
    public quarterlyTocAmount?: number,
    public place?: number,
    public points?: number,
    public chop?: number
  ) {}
}
