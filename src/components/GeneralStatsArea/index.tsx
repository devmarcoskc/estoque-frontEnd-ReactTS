import * as C from './styles';
import { ProductType } from '../../types/ProductType';
import { sumProducts } from '../../utils/sumProducts';

type Props = {
  products?: ProductType[]; 
  isTransactions: boolean;
  transactionsLength?: number;
}

const GeneralStats = ({products, isTransactions, transactionsLength}: Props) => {
  return (
    <C.Container>
      <C.TitleAndValue>
        {isTransactions ? (
          <>
            Transações:
          </>
        ): (
          <>
            Quantidade total de produtos:
          </>
        )}
        {isTransactions && (
          <C.SpanValue>{transactionsLength}</C.SpanValue>
        )}
        {!isTransactions && products &&
          <C.SpanValue>
            {sumProducts(products)}
          </C.SpanValue>
        }
      </C.TitleAndValue>
    </C.Container>
  )
}

export default GeneralStats