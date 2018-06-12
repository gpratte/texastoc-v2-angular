export class Player {

  constructor(
    public id: number,
    public name: string,
    public place?: number,
    public points?: number,
    public entries?: number,
    public email?: string
  ) {}
}
