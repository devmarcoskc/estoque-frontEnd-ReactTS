import ProductsList from '../../components/ProductsList';

import PaginationContainer from '../../components/PaginationContainer';
import { useProductData } from '../../hooks/useProductData';

const Home = () => {
  const {products, setProducts, currentPage, setCurrentPage} = useProductData();

  return (
    <PaginationContainer titleMenu='Estatísticas Gerais'>
      {products.length > 0 ? (
        <ProductsList 
          products={products} 
          setProducts={setProducts}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      ): (
        <p>Você não possui nenhum produto!</p>
      )}      
    </PaginationContainer>
  )
}

export default Home;