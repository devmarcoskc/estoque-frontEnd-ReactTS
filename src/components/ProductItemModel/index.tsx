import { useState } from 'react';
import { ProductFormType, ProductType } from '../../types/ProductType';
import * as C from './styles';
import CompanyLogo from '../../assets/images/estoquemais.png';
import { useNavigate } from 'react-router-dom';
import { useEditProduct } from '../../hooks/useEditProduct';

type Props = {
  product: ProductType;
  setIsModalProductClosed: React.Dispatch<React.SetStateAction<boolean>>;
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
}

const ProductItemModel = ({product, setIsModalProductClosed, setProducts}: Props) => {
  const [isAttQuantityNeeded, setIsAttQuantityNeeded] = useState<boolean>(false);
  const [inputValues, setInputValues] = useState({
    quantidade: product.quantidade,
    tipo: 'reposição'
  });

  const { updateProduct } = useEditProduct();
  const navigate = useNavigate();
  
  const handleMoreInfoClick = () => {
    navigate('/addproduct', {state: {product}});
  }

  const handleEditQuantity = async () => {
    let ProductToEdit:ProductFormType = {...product};

    ProductToEdit.tipo = inputValues.tipo;
    ProductToEdit.quantidade_modificada = Math.abs(inputValues.quantidade - product.quantidade);
    ProductToEdit.quantidade = inputValues.quantidade;

    try {
      const response:ProductType[] = await updateProduct(ProductToEdit);
      setProducts(response);
      setIsModalProductClosed(true);
    } catch (error:any) {
      alert(error.message);
    }
  }

  return (
    <C.Container>
      <C.ProductContainer>
        <C.TitleAndLogoArea>
          <C.TitleProduct>{product.nome}</C.TitleProduct>
          <C.LogoImg src={CompanyLogo}/>
        </C.TitleAndLogoArea>
        <C.InfosAreaDiv>
          <C.SplitedArea>
            <C.FieldAndValueDiv>
              <C.FieldName>Categoria:</C.FieldName>
              <C.SpanValue>{product.categoria}</C.SpanValue>
            </C.FieldAndValueDiv>
            <C.FieldAndValueDiv>
              <C.FieldName>Localização:</C.FieldName>
              <C.SpanValue>{product.localização}</C.SpanValue>
            </C.FieldAndValueDiv>
            <C.FieldAndValueDiv>
              <C.FieldName>SKU:</C.FieldName>
              <C.SpanValue>{product.código_de_identificação}</C.SpanValue>
            </C.FieldAndValueDiv>
            <C.FieldAndValueDiv>
              <C.FieldName>Status:</C.FieldName>
              <C.SpanValue>{product.status}</C.SpanValue>
            </C.FieldAndValueDiv>
            <C.FieldAndValueDiv>
              <C.FieldName>Fornecedor:</C.FieldName>
              <C.SpanValue>{product.fornecedor}</C.SpanValue>
            </C.FieldAndValueDiv>
            <C.FieldAndValueDiv>
              <C.FieldName>Validade:</C.FieldName>
              <C.SpanValue>{product.data_validade}</C.SpanValue>
            </C.FieldAndValueDiv>
            <C.FieldAndValueDiv>
              <C.FieldName>Data de entrada:</C.FieldName>
              <C.SpanValue>{product.data_entrada}</C.SpanValue>
            </C.FieldAndValueDiv>
            <C.FieldAndValueDiv>
              <C.FieldName>Preço de venda:</C.FieldName>
              <C.SpanValue>{product.preço_venda} R$</C.SpanValue>
            </C.FieldAndValueDiv>
          </C.SplitedArea>

          <C.SplitedArea>
          <C.FieldAndValueDiv>
              <C.FieldName>Preço de compra:</C.FieldName>
              <C.SpanValue>{product.preço_compra} R$</C.SpanValue>
            </C.FieldAndValueDiv>
            {!isAttQuantityNeeded ? (
              <>
                <C.FieldAndValueDiv>
                <C.FieldName>Quantidade</C.FieldName>
                <C.SpanValue>{product.quantidade}</C.SpanValue>
                </C.FieldAndValueDiv>
                <C.ControllerSpan 
                  onClick={() => setIsAttQuantityNeeded(true)}
                >
                  Atualizar quantidade
                </C.ControllerSpan>
              </>
            ): (
              <>
                <C.LabelAndInputField>
                  <C.Label>Quantidade</C.Label>
                  <C.Input 
                    type="number" 
                    placeholder={`${product.quantidade}`}
                    onChange={(e) => setInputValues({... inputValues, quantidade: Number(e.target.value)})}
                  />
                </C.LabelAndInputField>
                <C.Label>Motivo da atualização:</C.Label>
                <C.Select 
                  value={inputValues.tipo} 
                  onChange={(e) => setInputValues({...inputValues, tipo:e.target.value })}
                >
                  <C.Option value="reposição">Reposição</C.Option>
                  <C.Option value="venda">Venda</C.Option>
                  <C.Option value="compra">Compra</C.Option>
                  <C.Option value="retirada">Retirada</C.Option>
                </C.Select>
                <C.ControllerSpan onClick={() => setIsAttQuantityNeeded(false)}>Cancelar</C.ControllerSpan>
              </>
            )}
          </C.SplitedArea>
        </C.InfosAreaDiv>
        <C.DefaultButtonsArea>
          {isAttQuantityNeeded && (
            <C.DefaultButton onClick={handleEditQuantity}>Atualizar quantidade</C.DefaultButton>
          )}
          <C.DefaultButton onClick={handleMoreInfoClick}>Editar produto</C.DefaultButton>
          <C.DefaultButton onClick={() => setIsModalProductClosed(true)}>Fechar</C.DefaultButton>
        </C.DefaultButtonsArea>
      </C.ProductContainer>
    </C.Container>
  )
}

export default ProductItemModel;