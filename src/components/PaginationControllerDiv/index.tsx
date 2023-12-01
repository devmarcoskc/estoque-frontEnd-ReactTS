import React from 'react';
import * as C from './styles';
import { ProductType } from '../../types/ProductType';
import { TransactionType } from '../../types/TransactionType';

type Props = {
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  array: ProductType[] | TransactionType[];
}

const PaginationControllerDiv = ({currentPage, setCurrentPage, array}: Props) => {
  return (
    <C.PaginationControllerArea>
      {currentPage > 1 &&
        <C.PaginationSpan onClick={() => setCurrentPage(currentPage - 1)}>
          <C.PaginationIcon name='chevron-back-outline'/>
          Voltar
        </C.PaginationSpan>
      }
      {array.length === 100 && array.length % 100 === 0 &&
        <C.PaginationSpan onClick={() => setCurrentPage(currentPage + 1)}>
          Próximo
          <C.PaginationIcon name='chevron-forward-outline'/>
        </C.PaginationSpan>
      }
    </C.PaginationControllerArea>
  )
}

export default PaginationControllerDiv