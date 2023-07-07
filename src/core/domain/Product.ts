export class Product {
  constructor(
    readonly id: number,
    readonly title: string,
    readonly shortDescription: string,
    readonly description: string,
    readonly price: number,
    readonly salePrice: number
  ) {}
}
