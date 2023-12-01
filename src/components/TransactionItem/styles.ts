import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  padding: 10px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-top: 1px solid ${Colors.primary300};
  border-left: 1px solid ${Colors.primary300};
  border-right: 1px solid ${Colors.primary300};
`;

export const RowDiv = styled.div`
  display: flex;
  justify-content: space-between;

  @media(max-width: 768px) {
    flex-direction: column;
    width: 100%;
    gap: 10px;
  }
`;

export const FieldAndValueDiv = styled.div`
  display: flex;
  gap:3px;
  align-items: center;
  width: 33.3%;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const ShortFieldAndValueDiv = styled.div`
    display: flex;
    gap:3px;
    align-items: center;
    width: 10%;

    @media(max-width: 768px) {
      width: 100%;
    }
`;

export const FieldNameH2 = styled.h2`
  font-size: 16px;
  color: ${Colors.primary300};
  font-weight: 300;

  @media(max-width: 768px) {
    font-size: 15px;
  }
`;

export const FieldValue = styled.span`
  font-size: 15px;
  color: ${Colors.primary200};
  font-weight: bold;

  @media(max-width: 768px) {
    font-size: 14px;
  }
`;


