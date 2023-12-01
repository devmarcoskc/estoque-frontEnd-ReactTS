import * as C from './styles';
import { FiltersType } from '../../types/FiltersType';

type Props = {
  filters: FiltersType;
  setFilters: React.Dispatch<React.SetStateAction<FiltersType>>
}

const ProductFilter = ({setFilters, filters}: Props) => {

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
        placeholder='Código SKU'
        value={filters.código_de_identificação}
        onChange={(e) => setFilters({...filters, código_de_identificação: e.target.value})}
      />
      <C.InputFilters 
        type="text" 
        placeholder='Localização'
        value={filters.localização}
        onChange={(e) => setFilters({...filters, localização: e.target.value})}
      />
      <C.InputFilters 
        type="text" 
        placeholder='Data entrada'
        value={filters.data_entrada}
        onChange={(e) => setFilters({...filters, data_entrada: e.target.value})}
      />
    </C.Container>
  )
}

export default ProductFilter;