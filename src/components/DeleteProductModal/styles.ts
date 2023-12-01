import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(192, 192, 192, 0.5);
`;

export const MessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 15px;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 30%;
  height: 30%;
  background-color: white;
`;

export const WarningMessage = styled.span`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.primary200};
`;

export const ButtonsArea = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  outline: 0;
  border: none;
  background-color: ${Colors.primary200};
  padding: 10px;
  color: white;
  width: 100px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 10px;
  transition: all ease .7s;
  cursor: pointer;

  &:hover {
    background-color: ${Colors.primary400};
  }
`