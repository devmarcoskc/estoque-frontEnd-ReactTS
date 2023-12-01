import { createNewProduct } from "../utils/apiCalls";
import { ProductFormType, ProductType } from "../types/ProductType";
import { useAuth } from "./useAuth";

export const useCreateProduct = () => {
    const {token} = useAuth();

    const createProduct = async (product: ProductFormType) => {
      try {
        const response:ProductType = await createNewProduct(token, product);
        return response;
      } catch (error:any) {
        alert(error.message)
      }
    }

    return {createProduct};
}