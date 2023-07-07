import { User } from "../domain/User"
import { CreateUserDTO, UpdateUserDTO } from "./DTO/UserDTO"

export interface UserRepository {
  getList(limit: number, offset: number): [number, Array<User>]
  getById(id: number): User
  getByTitle(title: string): User
  createOne(dto: CreateUserDTO): User
  updateOne(dto: UpdateUserDTO): User
  deleteOne(id: number): void
}
