import React from 'react'
import * as C from './styles';
import { FiltersType } from '../../types/FiltersType'

type Props = {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>;
}

const TransactionsFilter = ({filters, setFilters}: Props) => {
  return (
    <C.Container>
      <C.FilterIntroDiv>
        Filtre por
        <C.SearchIcon name="arrow-forward-outline"/>
      </C.FilterIntroDiv>
      <C.InputFilters 
        type="text" 
        placeholder='Digite o nome'
        value={filters.nome}
        onChange={(e) => setFilters({...filters, nome: e.target.value})}
      />
      <C.InputFilters 
        type="text" 
        placeholder='Tipo de transação'
        value={filters.tipo}
        onChange={(e) => setFilters({...filters, tipo: e.target.value})}
      />
      <C.InputFilters 
        type="text" 
        placeholder='Localização do produto'
        value={filters.localização}
        onChange={(e) => setFilters({...filters, localização: e.target.value})}
      />
      <C.InputFilters 
        type="text" 
        placeholder='Data feita: dia/mês/ano'
        value={filters.data_entrada}
        onChange={(e) => setFilters({...filters, data_entrada: e.target.value})}
      />
    </C.Container>
  )
}

export default TransactionsFilter