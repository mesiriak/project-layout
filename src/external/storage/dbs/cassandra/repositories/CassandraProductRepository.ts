import { Product } from "../../../../../core/domain/Product"
import {
  CreateProductDTO,
  UpdateProductDTO,
} from "../../../../../core/domainServices/DTO/ProductDTO"
import { ProductRepository } from "../../../../../core/domainServices/ProductRepository"

export class MongoProductRepository implements ProductRepository {
  getList(limit: number, offset: number): [number, Product[]] {
    throw new Error("Method not implemented.")
  }
  getById(id: number): Product {
    throw new Error("Method not implemented.")
  }
  getByTitle(title: string): Product {
    throw new Error("Method not implemented.")
  }
  createOne(dto: CreateProductDTO): Product {
    throw new Error("Method not implemented.")
  }
  updateOne(dto: UpdateProductDTO): Product {
    throw new Error("Method not implemented.")
  }
  deleteOne(id: number): void {
    throw new Error("Method not implemented.")
  }
}
