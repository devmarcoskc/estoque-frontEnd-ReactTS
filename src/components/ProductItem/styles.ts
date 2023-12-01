import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  gap: 10px;
  border-bottom: 1px solid ${Colors.primary300};
  padding: 10px;
`;

export const MainInfosArea = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  gap: 10px;
  
  @media(max-width: 768px) {
    flex-direction: column;
  }
`

export const RowDiv = styled.div`
  display: flex;
  width: 100%;

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const NamedAndValueDiv = styled.div`
  display: flex;
  gap:3px;
  align-items: center;
  width: 35%;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const SKUAndValueDiv = styled.div`
  display: flex;
  gap:3px;
  align-items: center;
  width: 20%;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FieldAndValueDiv = styled.div`
  display: flex;
  gap:3px;
  align-items: center;
  width: 20%;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const ShortFieldDiv = styled.div`
  display: flex;
  gap:3px;
  align-items: center;
  width: 15%;

  @media(max-width: 768px) {
    width: 100%;
  }
`

export const FieldNameH2 = styled.h2`
  font-size: 17px;
  color: ${Colors.primary300};
  font-weight:300;

  @media(max-width: 768px) {
    font-size: 15px;
  }
`;

export const FieldValue = styled.span`
  font-size: 16px;
  color: ${Colors.primary200};
  font-weight: bold;

  @media(max-width: 768px) {
    font-size: 15px;
  }
`;

export const ButtonsArea = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  flex: 1;
  margin-top: 5px;
  margin-bottom: 10px;
`;

export const Button = styled.button`
  outline: 0;
  border: none;
  border-radius: 5px;
  padding: 7px;
  font-size: 14px;
  background-color: ${Colors.primary300};
  color: white;
  font-weight: bold;
  transition: all ease .7s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primary200};
  }
`;

export const ControllSpan = styled.span`
  font-size: 15px;
  color: ${Colors.primary300};
  font-weight: bold;
  text-decoration: underline;
  transition: all ease .7s;
  cursor: pointer;

  &:hover {
    color: ${Colors.primary200};
  }
`;

export const LineDiv = styled.div`
  height: 1px;
  margin-top: 10px;
  width: 100%;
  background-color: ${Colors.primary200};
`