export class User {
  constructor(
    readonly id: number,
    readonly email: string,
    readonly username: string,
    readonly age: number,
    readonly password: string
  ) {}
}
