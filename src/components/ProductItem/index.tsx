import * as C from './styles';
import { memo } from 'react';
import { ProductType } from '../../types/ProductType';
import { useState } from 'react';
import ProductItemModel from '../ProductItemModel';
import { Colors } from '../../globalStyles/globalStyles';
import DeleteProductModal from '../DeleteProductModal';

type Props = {
  product: ProductType;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  borderBottomIsNeeded: boolean;
}

const ProductItem = ({product, borderBottomIsNeeded, setProducts}: Props) => {
  const [isModalProductClosed, setIsModalProductClosed] = useState<boolean>(true);
  const [isDeleteModalClosed, setIsDeleteModalClosed] = useState<boolean>(true);

  return (
    <>
    <C.Container style={{borderBottom: borderBottomIsNeeded ? `1px solid ${Colors.primary300}`: 'none'}}>
      <C.MainInfosArea>
        <C.RowDiv>
          <C.NamedAndValueDiv>
            <C.FieldNameH2>Nome:</C.FieldNameH2>
            <C.FieldValue>{product.nome}</C.FieldValue>
          </C.NamedAndValueDiv>
          <C.SKUAndValueDiv>
            <C.FieldNameH2>SKU:</C.FieldNameH2>
            <C.FieldValue>{product.código_de_identificação}</C.FieldValue>
          </C.SKUAndValueDiv>
          <C.FieldAndValueDiv>
            <C.FieldNameH2>Localização:</C.FieldNameH2>
            <C.FieldValue>{product.localização}</C.FieldValue>
          </C.FieldAndValueDiv>
          <C.ShortFieldDiv>
            <C.FieldNameH2>Quantidade:</C.FieldNameH2>
            <C.FieldValue>{product.quantidade}</C.FieldValue>
          </C.ShortFieldDiv>
        </C.RowDiv>
      </C.MainInfosArea>
      <C.ButtonsArea>
        <C.ControllSpan onClick={() => setIsModalProductClosed(false)}>
          Mais Informações
        </C.ControllSpan>
        <C.ControllSpan onClick={() => setIsDeleteModalClosed(false)}>Excluir</C.ControllSpan>
      </C.ButtonsArea>
    </C.Container>

    {!isModalProductClosed && (
      <ProductItemModel 
        product={product} 
        setProducts={setProducts}
        setIsModalProductClosed={setIsModalProductClosed}
      />
    )} 
    {!isDeleteModalClosed && (
      <DeleteProductModal 
        productId={product._id} 
        setProducts={setProducts}
        setIsDeleteModalClosed={setIsDeleteModalClosed}
      />
    )} 
    </>
  )
}

export default memo(ProductItem);