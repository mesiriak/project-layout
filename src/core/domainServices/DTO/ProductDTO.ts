export class CreateProductDTO {
  constructor(
    readonly title: string,
    readonly shortDescription: string,
    readonly description: string,
    readonly price: number,
    readonly salePrice: number
  ) {}
}

export class UpdateProductDTO {
  constructor(
    readonly title: string,
    readonly shortDescription: string,
    readonly description: string,
    readonly price: number,
    readonly salePrice: number
  ) {}
}
