import styled from 'styled-components';
import { Colors } from '../../globalStyles/globalStyles';

export const Container = styled.div`
  height: 100vh;
  with: 100%;
  display: flex;
`;

export const Section = styled.section`
  max-height: 100vh;
  flex: 1;
  overflow-y: scroll;
`;

export const SectionContainer = styled.div`
  width: 90%;
  height: auto;
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const SectionMenu = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 40px;

  @media(max-width: 768px) {
    width: 100%;
  }
`;

export const CompanyLogoImg = styled.img`
  @media(max-width: 768px) {
    scale: 0.7
  }
`;

export const TitlePageMenu = styled.h1`
  font-size: 23px;
  font-weight: bold;
  color: ${Colors.primary200};

  @media(max-width: 768px) {
    font-size: 17px;
  }
`;

export const ButtonLogout = styled.button``