import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  height: 100vh;
  width: 100%;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  top: 0;
  left: 0;
  background-color: rgba(192, 192, 192, 0.5);
`;

export const ProductContainer = styled.div`
  height: 60%;
  padding: 15px;
  width: 45%;
  display: flex;
  flex-direction: column;
  gap: 10px;
  border-radius: 10px;
  background-color: rgba(255, 255, 255, 0.95);
`;

export const TitleAndLogoArea = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const LogoImg = styled.img`
  scale: 0.9;
`

export const InfosAreaDiv = styled.div`
  display: flex;
  width: 100%;
`;

export const SplitedArea = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 50%;
`

export const TitleProduct = styled.h1`
  font-size: 20px;
  color: ${Colors.primary200};
`;

export const FieldAndValueDiv = styled.div`
  display: flex;
  gap: 3px;
`;

export const FieldName = styled.h2`
  font-size: 16px;
  color: ${Colors.primary200};
  font-weight: 500;
`;

export const SpanValue = styled.span`
  font-size: 17px;
  color: ${Colors.primary400};
  font-weight: 500;
`;

export const AttQuantitySpan = styled.button`
  padding: 5px;
  width: 170px;
  border-radius: 10px;
  outline: 0;
  border: none;
  background-color: ${Colors.primary300};
  color: white;
  font-size: 15px;
  transition: all ease .7s;

  &:hover {
    background-color: ${Colors.primary200};
  }
`;

export const LabelAndInputField = styled.div`
  display: flex;
  gap: 3px;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 17px;
  font-weight: bold;
  color: ${Colors.primary300};
`;

export const Input = styled.input`
  padding: 5px;
  width: 60px;
  font-size: 16px;
  color: ${Colors.primary200};
  font-weight: bold;
  outline: 0;
  border: none;
  border-bottom: 1px solid ${Colors.primary300};

  &::placeholder {
    color: ${Colors.primary200};
  }
`;

export const Select = styled.select`
  padding: 3px;
  outline: 0;
  max-width: 110px;
  border: 1px solid ${Colors.primary300};
`;

export const Option = styled.option`
  color: ${Colors.primary200};
  font-weight: bold;
`;

export const ControllerSpan = styled.span`
  font-size: 17px;
  color: ${Colors.primary400};
  text-decoration: underline;
  transition: all ease .7s;
  cursor: pointer;
  width: 100%;
`

export const DefaultButtonsArea = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  gap: 20px;
`

export const DefaultButton = styled.button`
  outline: 0;
  border: none;
  background-color: ${Colors.primary200};
  padding: 10px;
  width: 30%;
  font-size: 15px;
  color: white;
  cursor: pointer;
  transition: all ease .7s;
  border-radius: 10px;

  &:hover {
    background-color: ${Colors.primary400};
  }
`