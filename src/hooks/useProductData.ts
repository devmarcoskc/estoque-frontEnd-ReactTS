import { useEffect, useState } from 'react';
import { getProducts } from '../utils/apiCalls';
import { ProductType } from '../types/ProductType';
import { useAuth } from './useAuth';

export const useProductData = () => {
    const [products, setProducts] = useState<ProductType[]>([]);
    const [currentPage, setCurrentPage] = useState<number>(1);

    const {orgaoId, token} = useAuth();

    const getAllProducts = async (currentPage: number) => {
        try {
          const response:ProductType[] = await getProducts(orgaoId, token, currentPage);
          setProducts(response);
        } catch (error:any) {
          alert(error.message);
        }
    }
    
    useEffect(() => {
        getAllProducts(currentPage);
    }, [setProducts, currentPage]);

    return { products, setProducts, currentPage, setCurrentPage };
}