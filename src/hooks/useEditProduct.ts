import { ProductFormType } from "../types/ProductType";
import { editProduct } from "../utils/apiCalls";
import { useAuth } from "./useAuth";

export const useEditProduct = () => {
  const {token} = useAuth();

  const updateProduct = async (product:ProductFormType) => {
    try {
      const response = await editProduct(product._id as string, token, product);
      return response;
    } catch (error: any) {
      alert(error.message);
    }
  }

  return {updateProduct};
}