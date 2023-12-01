import React, { SetStateAction } from 'react';
import * as C from './styles';
import { useDeleteProduct } from '../../hooks/useDeleteProduct';
import { ProductType } from '../../types/ProductType';

type Props = {
  productId: string;
  setIsDeleteModalClosed: React.Dispatch<SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const DeleteProductModal = ({productId, setIsDeleteModalClosed, setProducts}: Props) => {
  const { handleDeleteProduct } = useDeleteProduct();

  const deleteProduct = async () => {
    try {
      const response:ProductType[] = await handleDeleteProduct(productId);
      setProducts(response);
      setIsDeleteModalClosed(true);
    } catch (error:any) {
      alert(error.message);
    }
  }

  return (
    <C.Container>
      <C.MessageContainer>
        <C.WarningMessage>
          Você tem certeza que quer deletar esse produto ?
        </C.WarningMessage>
        <C.ButtonsArea>
          <C.Button type='button' onClick={() => deleteProduct()}>Sim</C.Button>
          <C.Button type='button' onClick={() => setIsDeleteModalClosed(true)}>Cancelar</C.Button>
        </C.ButtonsArea>
      </C.MessageContainer>
    </C.Container>
  )
}

export default DeleteProductModal