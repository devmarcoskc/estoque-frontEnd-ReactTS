import axios from "axios";
import { FormValues } from "../types/FormValues";
import { ProductFormType } from "../types/ProductType";

const api = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL
});

export const createNewUser = async (data:FormValues) => {
  try {
    const response = await api.post('/auth/register', data);
    return response.data;
  } catch (error) {
    throw new Error('Ocorreu um erro ao tentar cadastrar');
  }
};

export const loginUser = async (data:FormValues) => {
  const response = await api.post('/auth/login', data);
  return response.data;
};

export const getProducts = async (orgaoId:string, token:string, page: number) => {
  try {
    const response = await api.get(`/products/${orgaoId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }, params: {
        page
      }});

    return response.data;
  } catch (error:any) {
    throw new Error('Ocorreu um erro em buscar seus produtos')
  }
};

export const createNewProduct = async (token: string, product: ProductFormType) => {
  try {
    const response = await api.post('products', product, {headers: {
      Authorization: `Bearer ${token}`
    }});

    return response.data;
  } catch (error:any) {
    throw new Error('Ocorreu um erro em adicionar o produto')
  }
}

export const editProduct = async (id: string, token: string, product: ProductFormType) => {
  try {
    const response = await api.patch(`/products/${id}`, product, {headers: {
      Authorization: `Bearer ${token}`
    }});

    return response.data;
  } catch (error:any) {
    throw new Error('Ocorreu um erro em editar o produto')
  }
}

export const getTransactions = async (orgaoId:string, token: string, page: number) => {
  try {
    const response = await api.get(`/transactions/${orgaoId}`, {
      headers: {
        Authorization: `Bearer ${token}`
      }, params: {
        page
      }
    });

    return response.data;
  } catch (error:any) {
    throw new Error('Ocorreu um erro em buscar suas transações')
  }
};

export const deleteProduct = async (productId:string, token:string, orgaoId:string) => {
  try {
    const response = await api.delete(`/products/${productId}/${orgaoId}`, {headers: {
      Authorization: `Bearer ${token}`
    }});

    return response.data;
  } catch (error:any) {
    throw new Error('Ocorreu um erro ao deletar o produto');
  }
}