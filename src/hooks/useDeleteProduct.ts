import { useAuth } from "./useAuth";
import { deleteProduct } from "../utils/apiCalls";

export const useDeleteProduct = () => {
  const { token, user } = useAuth();

  const handleDeleteProduct = async (productId: string) => {
    try {
      const response = await deleteProduct(productId, token, user?._id as string);
      return response;
    } catch (error:any) {
      alert(error.message);
    }    
  };

  return {handleDeleteProduct};
}