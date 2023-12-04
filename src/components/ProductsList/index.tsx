import * as C from './styles';
import ProductItem from '../ProductItem';
import ProductFilter from '../ProductFilter';
import React, { useState } from 'react';
import { FiltersType } from '../../types/FiltersType';
import PieChart from '../PieChart';
import GeneralStats from '../GeneralStatsArea';
import { ProductType } from '../../types/ProductType';
import PaginationControllerDiv from '../PaginationControllerDiv';

type Props = {
  products: ProductType[];
  setProducts: React.Dispatch<React.SetStateAction<ProductType[]>>;
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const ProductsList = ({products, setProducts, currentPage, setCurrentPage}: Props) => {
  const [filters, setFilters] = useState<FiltersType>({
    nome: '',
    código_de_identificação: '',
    localização: '',
    data_entrada: ''
  });
  
  const ProductsToRender = products.filter((product) => {
    return product.nome.toLowerCase().includes(filters.nome?.toLowerCase() || '')
  }).filter((product) => {
    return product.código_de_identificação.toLowerCase().includes(filters.código_de_identificação?.toLowerCase() || '')
  }).filter((product) => {
    return product.localização.toLowerCase().includes(filters.localização?.toLowerCase() || '');
  }).filter((product) => {
    return product.data_entrada.includes(filters.data_entrada || '')
  });

  return (
    <C.Container>
      <C.Title>Seus produtos em estoque:</C.Title>
      <C.ListProductsMenuDiv>
        <ProductFilter filters={filters} setFilters={setFilters}/>
        <GeneralStats products={ProductsToRender} isTransactions={false}/>
      </C.ListProductsMenuDiv>
      <C.ProductsListArea>
        {ProductsToRender?.map((product, key) => (
          <ProductItem 
            key={product.nome} 
            product={product}
            setProducts={setProducts}
            borderBottomIsNeeded={ProductsToRender?.length === key+1 ? false : true}
          />
        ))}
      </C.ProductsListArea>
      <PaginationControllerDiv 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        array={products}
      />
      {/* 
      <C.PaginationControllerArea>
        {currentPage > 1 &&
          <C.PaginationSpan onClick={() => setCurrentPage(currentPage - 1)}>
            <C.PaginationIcon name='chevron-back-outline'/>
            Voltar
          </C.PaginationSpan>
        }
        {products.length === 100 && products.length % 100 === 0 &&
          <C.PaginationSpan onClick={() => setCurrentPage(currentPage + 1)}>
            Próximo
            <C.PaginationIcon name='chevron-forward-outline'/>
          </C.PaginationSpan>
        }
      </C.PaginationControllerArea>
      */}
      <PieChart products={ProductsToRender}/>
    </C.Container>
  )
}

export default ProductsList