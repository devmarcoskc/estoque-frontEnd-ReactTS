import { ProductType } from "../types/ProductType";

export const formatArrayToPie = (products: ProductType[]) => {
  return products.reduce((acc, product) => {
    const existingCategory = acc.find((item) => item.label === product.categoria);

    if (existingCategory) {
      existingCategory.value += product.quantidade;
    } else {
      acc.push({ id: product.categoria, label: product.categoria, value: product.quantidade });
    }

    return acc;
    }, [] as { id: string, label: string; value: number}[]);
};