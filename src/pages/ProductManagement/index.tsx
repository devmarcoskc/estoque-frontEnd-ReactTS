import {useEffect} from 'react';
import PaginationContainer from '../../components/PaginationContainer';
import FormProduct from '../../components/FormProduct';
import { useLocation } from 'react-router-dom';
import { useState } from 'react';

const ProductManagement = () => {
  const [isEdditing, setIsEdditing] = useState<boolean>(false);

  const location = useLocation();
  const { product } = location.state || {product: null}

  useEffect(() => {
    if( product !== null) {
      setIsEdditing(true);
    } else {
      setIsEdditing(false);
    }
  }, [product]);

  return (
    <PaginationContainer 
      titleMenu={isEdditing ? 'Edite o produto:' : 'Adiocione o produto:'} 
      isEdditing={isEdditing}
    >
      <FormProduct 
        isEdditing={isEdditing} 
        product={product} 
        setIsEdditing={setIsEdditing}
      />
    </PaginationContainer>
  )
}

export default ProductManagement