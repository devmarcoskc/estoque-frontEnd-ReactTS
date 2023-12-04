import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0px;
  margin-top: 10px;
`;

export const ListProductsMenuDiv = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 10px;

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
  }
`
export const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin: 10px 0px;
  color: ${Colors.primary200};
`;

export const ProductsListArea = styled.div`
  display: flex;
  flex-direction: column;
  max-height: 60vh;
  width: 100%;
  overflow-y: scroll;
  border:1px solid ${Colors.primary200};
`;