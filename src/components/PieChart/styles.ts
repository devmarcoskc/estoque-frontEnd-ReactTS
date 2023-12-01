import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  height: 50vh;
  width: 100%;
  margin-top: 10px;
`;

export const H1 = styled.h1`
  font-size: 20px;
  color: ${Colors.primary200};
`