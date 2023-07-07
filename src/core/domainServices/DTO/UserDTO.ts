export class CreateUserDTO {
  constructor(
    readonly email: string,
    readonly username: string,
    readonly age: number,
    readonly password: string
  ) {}
}

export class UpdateUserDTO {
  constructor(
    readonly email: string,
    readonly username: string,
    readonly password: string
  ) {}
}
