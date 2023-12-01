import React, {useState} from 'react'
import * as C from './styles';
import { FiltersType } from '../../types/FiltersType';
import { TransactionType } from '../../types/TransactionType'
import TransactionsFilter from '../TransactionFilter';
import TransactionItem from '../TransactionItem';
import PaginationControllerDiv from '../PaginationControllerDiv';
import GeneralStats from '../GeneralStatsArea';

type Props = {
  transactions: TransactionType[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
}

const TransactionsList = ({transactions, currentPage, setCurrentPage}: Props) => {
  const [filters, setFilters] = useState<FiltersType>({
    nome: '',
    tipo: '',
    localização: '',
    data_entrada: ''
  });
    
  const TransactionsToRender = transactions?.filter((transaction) => {
    return transaction.nome_produto.includes(filters.nome?.toLowerCase() || '')
  }).filter((transaction) => {
    return transaction.tipo.includes(filters.tipo || '')
  }).filter((transaction) => {
    return transaction.localização.toLowerCase().includes(filters.localização?.toLowerCase() || '');
  }).filter((transaction) => {
    return transaction.data.includes(filters.data_entrada || '')
  });

  return (
    <C.PageContainer>
      <C.MenuDivArea>
        <TransactionsFilter filters={filters} setFilters={setFilters}/>
        <GeneralStats isTransactions={true} transactionsLength={TransactionsToRender.length}/>
      </C.MenuDivArea>
      {TransactionsToRender?.map((transaction: TransactionType, index: number) => (
        <TransactionItem 
          borderBottomIsNeeded={TransactionsToRender.length === index+1 ? true : false}
          key={transaction._id} 
          transaction={transaction}
        />
      ))}
      <PaginationControllerDiv 
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        array={transactions}
      />
  </C.PageContainer>
  )
}

export default TransactionsList;