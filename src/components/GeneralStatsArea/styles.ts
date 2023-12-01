import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex: 1;
  justify-content: flex-end;
  align-items: center;
`;

export const TitleAndValue = styled.div`
  display: flex;
  gap: 3px;
  padding: 5px 15px;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${Colors.primary300};
  color: white;
  font-size: 16px;
  border-radius: 5px;
  transition: all ease .7s;
`;

export const H2 = styled.h2`
  font-size: 15px;
  color: ${Colors.primary300};
`;

export const SpanValue = styled.span`
  font-size: 16px;
  color: ${Colors.primary400};
  font-weight: bold;
`