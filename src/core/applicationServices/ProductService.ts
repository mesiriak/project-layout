import { Product } from "../domain/Product"
import {
  CreateProductDTO,
  UpdateProductDTO,
} from "../domainServices/DTO/ProductDTO"
import { ProductRepository } from "../domainServices/ProductRepository"

export class ProductService {
  constructor(readonly repository: ProductRepository) {}

  async getList(
    limit: number,
    offset: number
  ): Promise<[number, Array<Product>]> {
    return this.repository.getList(limit, offset)
  }
  async getById(id: number): Promise<Product> {
    return this.repository.getById(id)
  }
  async getByTitle(title: string): Promise<Product> {
    return this.repository.getByTitle(title)
  }
  async createOne(dto: CreateProductDTO): Promise<Product> {
    return this.repository.createOne(dto)
  }
  async updateOne(dto: UpdateProductDTO): Promise<Product> {
    return this.repository.updateOne(dto)
  }
  async deleteOne(id: number): Promise<void> {
    return this.repository.deleteOne(id)
  }
}
