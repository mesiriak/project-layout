import { User } from "../../../../../core/domain/User"
import {
  CreateUserDTO,
  UpdateUserDTO,
} from "../../../../../core/domainServices/DTO/UserDTO"
import { UserRepository } from "../../../../../core/domainServices/UserRepository"

export class MongoUserRepository implements UserRepository {
  getList(limit: number, offset: number): [number, User[]] {
    throw new Error("Method not implemented.")
  }
  getById(id: number): User {
    throw new Error("Method not implemented.")
  }
  getByTitle(title: string): User {
    throw new Error("Method not implemented.")
  }
  createOne(dto: CreateUserDTO): User {
    throw new Error("Method not implemented.")
  }
  updateOne(dto: UpdateUserDTO): User {
    throw new Error("Method not implemented.")
  }
  deleteOne(id: number): void {
    throw new Error("Method not implemented.")
  }
}
