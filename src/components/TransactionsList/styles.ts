import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  height: auto;
  margin-bottom: 50px;
`;

export const MenuDivArea = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
  height: auto;
  align-items: center;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0px;
    margin-bottom: 15px;
  }
`

export const FiltersArea = styled.div`
  display: flex;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: ${Colors.primary300};
  margin-bottom: 20px;
`;
