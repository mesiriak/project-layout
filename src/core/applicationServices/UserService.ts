import { User } from "../domain/User"
import { CreateUserDTO, UpdateUserDTO } from "../domainServices/DTO/UserDTO"
import { UserRepository } from "../domainServices/UserRepository"

export class UserService {
  constructor(readonly repository: UserRepository) {}

  async getList(limit: number, offset: number): Promise<[number, Array<User>]> {
    return this.repository.getList(limit, offset)
  }
  async getById(id: number): Promise<User> {
    return this.repository.getById(id)
  }
  async getByTitle(title: string): Promise<User> {
    return this.repository.getByTitle(title)
  }
  async createOne(dto: CreateUserDTO): Promise<User> {
    return this.repository.createOne(dto)
  }
  async updateOne(dto: UpdateUserDTO): Promise<User> {
    return this.repository.updateOne(dto)
  }
  async deleteOne(id: number): Promise<void> {
    return this.repository.deleteOne(id)
  }
}
