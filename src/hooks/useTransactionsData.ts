import { useEffect, useState } from "react";
import { TransactionType } from "../types/TransactionType";
import { getTransactions } from "../utils/apiCalls";
import { useAuth } from "./useAuth";

export const useTransactionsData = () => {
  const [transactions, setTransactions] = useState<TransactionType[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);

  const {token, orgaoId} = useAuth();

  const getAllTransactions = async (currentPage: number) => {
    try {
      const response:TransactionType[] = await getTransactions(orgaoId, token, currentPage);
      setTransactions(response);
    } catch (error:any) {
      alert(error.message);
    }
  }

  useEffect(() => {
    getAllTransactions(currentPage);
  }, [setTransactions, currentPage]);

  return {transactions, getAllTransactions, currentPage, setCurrentPage};
}