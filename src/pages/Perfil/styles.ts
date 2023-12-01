import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";
import IonIcon from '@reacticons/ionicons';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 70px;
  flex: 1;
  margin-top: 80px;
`;

export const IconAndTextsDiv = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const Icon = styled(IonIcon)`
  font-size: 25px;
  color: ${Colors.primary200};
`

export const H1 = styled.h1`
  font-size: 20px;
  color: ${Colors.primary200};
`;

export const H2 = styled.h2`
  font-size: 20px;
  color: ${Colors.primary400};
`;

export const SpanMessage = styled.span`
  font-size: 18px;
  color: ${Colors.primary200};
`;