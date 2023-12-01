import styled from "styled-components";

import { Colors } from "../../globalStyles/globalStyles";
import IonIcon from '@reacticons/ionicons';

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  width: auto;
  margin:10px 0px;

  @media(max-width: 768px) {
    flex-direction: column;
    gap: 5px;
    align-items: flex-start;
    width: 100%;
  }
`;

export const Label = styled.label`
  font-size: 16px;
  font-weight: bold;
  color: ${Colors.primary300};
`;

export const InputFilters = styled.input`
  border: none;
  padding: 5px;
  border-radius: 5px;
  outline: 0;
  width: 160px;
  color: white;
  background-color: ${Colors.primary200};

  &::placeholder {
    color: white;
  }

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const FilterIntroDiv = styled.div`
  padding: 5px 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  background-color: ${Colors.primary300};
  color: white;
  font-size: 16px;
  border-radius: 5px;
  transition: all ease .7s;
`;

export const SearchIcon = styled(IonIcon)`
  font-size: 15px;
  color: white;
`