import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";
import IonIcon from '@reacticons/ionicons';

export const PaginationControllerArea = styled.div`
  display: flex;
  width: 100%;
  gap: 10px;
  margin-top: 5px;
  justify-content: flex-end;
`;

export const PaginationSpan= styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  gap: 3px;
  font-size: 17px;
  color: ${Colors.primary300};
`;

export const PaginationIcon = styled(IonIcon)`
  font-size: 17px;
  color: ${Colors.primary300};
`