import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";
import IonIcon from '@reacticons/ionicons';


export const Form = styled.form`
  height: auto;
  width: 60%;
  margin-top: 10px;

  @media(max-width: 768px) {
    width: 80%;
  }
`;

export const InputContainer = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  gap: 10px;
  align-items: center;
  margin-top: 15px;
  border: 1px solid ${Colors.primary200};
`;

export const Icon = styled(IonIcon)`
  font-size: 23px;
  margin-left: 15px;
  color: ${Colors.primary200}
`;

export const Input = styled.input`
  width: 80%;
  outline: 0;
  border: none;
  color: ${Colors.primary200};
  font-weight: bold;

  &::placeholder {
    color: ${Colors.primary200};
    font-weight: bold;
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
  margin-top: 40px;

  @media(max-width: 768px) {
    gap: 10px;
    width: 100%;
    justify-content: center;
    margin-top: 20px;
  }
`

export const Button = styled.button`
  padding: 10px 25px;
  border-radius: 10px;
  background-color: ${Colors.primary200};
  font-size: 15px;
  font-weight: bold;
  color: white;
  outline: 0;
  border: none;
  opacity: 0.85;
  cursor: pointer;
  transition: all ease .7s;

  &:hover {
    opacity: 1;
  }
`;