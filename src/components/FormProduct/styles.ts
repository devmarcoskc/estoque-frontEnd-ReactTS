import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Form = styled.form`
  display: flex;
  margin-top: 20px;
  flex-direction: column;
  padding: 15px;
  border-radius: 10px;
  box-shadow: 5px 5px 10px ${Colors.primary300};
  width: 70%;
  border: 1px solid ${Colors.primary300};

  @media(max-width: 768px) {
    width: 100%;
    margin-bottom: 40px;
  }
`;

export const FormInputsContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;

  @media(max-width: 768px) {
    flex-direction: column;
  }
`;

export const ColDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`

export const Label = styled.label`
  font-size: 18px;
  color: ${Colors.primary200};
  font-weight: bold;
`;

export const Input = styled.input`
  outline: 0;
  border: none;
  border-bottom: 1px solid ${Colors.primary300};
  padding: 5px 5px;
  width: 160px;
  border-radius: 5px;
  font-size: 15px;
  color: ${Colors.primary400};
  font-weight: bold;

  &::placeholder {
    color: ${Colors.primary300};
    font-weight: 300;
    font-size: 14px;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const SpanError = styled.span`
  font-size: 13px;
  font-weight: bold;
  color: red;
`

export const ButtonsArea = styled.div`
  display: flex;
  gap: 30px;
  margin-top: 30px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  outline: 0;
  border: none;
  background-color: ${Colors.primary200};
  color: white;
  font-weight: bold;
  font-size: 15px;
  border-radius: 10px;
  transition: all ease .7s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primary400};
  }
`