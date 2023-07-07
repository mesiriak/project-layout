import { Product } from "../domain/Product"
import { CreateProductDTO, UpdateProductDTO } from "./DTO/ProductDTO"

export interface ProductRepository {
  getList(limit: number, offset: number): [number, Array<Product>]
  getById(id: number): Product
  getByTitle(title: string): Product
  createOne(dto: CreateProductDTO): Product
  updateOne(dto: UpdateProductDTO): Product
  deleteOne(id: number): void
}
