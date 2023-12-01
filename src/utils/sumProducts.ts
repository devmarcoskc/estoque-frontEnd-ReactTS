import { ProductType } from "../types/ProductType";

export const sumProducts = (products: ProductType[]) => {
  return products.reduce((acc, product) => acc + product.quantidade, 0)
}