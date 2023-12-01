import * as C from './styles';
import { TransactionType } from '../../types/TransactionType';
import { Colors } from '../../globalStyles/globalStyles';

type Props = {
  transaction: TransactionType;
  borderBottomIsNeeded: boolean;
}

const TransactionItem = ({transaction, borderBottomIsNeeded}: Props) => {

  return (
    <C.Container style={{borderBottom: borderBottomIsNeeded ? `1px solid ${Colors.primary300}` : 'none'}}>
      <C.RowDiv>
        <C.FieldAndValueDiv>
          <C.FieldNameH2>Nome:</C.FieldNameH2>
          <C.FieldValue>{transaction.nome_produto}</C.FieldValue>
        </C.FieldAndValueDiv>
        <C.FieldAndValueDiv>
          <C.FieldNameH2>Categoria:</C.FieldNameH2>
          <C.FieldValue>{transaction.categoria_produto}</C.FieldValue>
        </C.FieldAndValueDiv>
        <C.FieldAndValueDiv>
          <C.FieldNameH2>Data da transição:</C.FieldNameH2>
          <C.FieldValue>{transaction.data}</C.FieldValue>
        </C.FieldAndValueDiv>
      </C.RowDiv>
      <C.RowDiv>
        <C.FieldAndValueDiv>
          <C.FieldNameH2>Transação:</C.FieldNameH2>
          <C.FieldValue>{transaction.tipo}</C.FieldValue>
        </C.FieldAndValueDiv>
        <C.FieldAndValueDiv>
          <C.FieldNameH2>Quantidade:</C.FieldNameH2>
          <C.FieldValue>{transaction.quantidade}</C.FieldValue>
        </C.FieldAndValueDiv>
        <C.FieldAndValueDiv>
          <C.FieldNameH2>Localização:</C.FieldNameH2>
          <C.FieldValue>{transaction.localização}</C.FieldValue>
        </C.FieldAndValueDiv>
      </C.RowDiv>
    </C.Container>
  )
}

export default TransactionItem