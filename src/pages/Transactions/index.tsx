import PaginationContainer from '../../components/PaginationContainer';
import { useTransactionsData } from '../../hooks/useTransactionsData';
import TransactionsList from '../../components/TransactionsList';

const Transactions = () => {
  const { transactions, currentPage, setCurrentPage } = useTransactionsData();

  return (
    <PaginationContainer titleMenu='Histórico de transações:'>
      {transactions.length > 0 ? (
        <TransactionsList transactions={transactions} currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      ): (
        <p>Você não tem nenhuma transação</p>
      )}
    </PaginationContainer>
  )
}

export default Transactions;