
export class Seat {

  constructor(
    public number: number,
    public gamePlayerId: number,
    public gamePlayerName: string,
    public tableNumber?: number
  ) {}

}
