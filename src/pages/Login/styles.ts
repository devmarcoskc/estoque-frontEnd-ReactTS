import styled from "styled-components";
import { Colors } from "../../globalStyles/globalStyles";

export const Container = styled.div`
  height: 100vh;
  width: 100%;

  @media(max-width: 768px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const SpanWarning = styled.span`
  font-size: 14px;
  color: ${Colors.primary300};
  max-width: 60%;
  margin-top: 10px;
`

export const Section = styled.section`
  height: 90vh;
  width: 80%;
  margin: auto;
  display: flex;

  @media(max-width: 768px) {
    flex-direction: column;
    width: 90%;
    height: auto;
    gap: 50px;
  }
`;

export const LeftSideContainer = styled.div`
  height: 100%;
  width: 55%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 768px) {
    width: 100%;
    align-items: center;
  }
`;

export const CompayLogoArea = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;

  @media(max-width: 768px) {
    justify-content: center;
  }
`

export const CompanyLogo = styled.img`
  margin-bottom: 10px;

  @media(max-width: 768px) {
    width: 150px;
    height: 35px;
  }
`

export const ImageBanner = styled.img`
  height: 350px;
  width: 550px;
  border-radius: 15px;

  @media(max-width: 768px) {
    width: 270px;
    height: 200px;
  }
`;

export const RightSideContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media(max-width: 768px) {
    width: 100%;
    height: auto;
    justify-content: start;
    align-items: center;
  }
`;

export const H1 = styled.h1`
  font-size: 22px;
  color: ${Colors.primary300};
  font-weight: bold;
`;

export const H2 = styled.h2`
  font-size: 16px;
  font-weight: 300;
  color: ${Colors.primary200};
`;

export const SpanDivArea = styled.div`
  display: flex;
  gap: 10px;

  p {
    font-size: 15px;
    color: ${Colors.primary200};
  }

  span {
    font-size: 15px;
    font-weight: bold;
    color: ${Colors.primary300};
    text-decoration: underline;
    cursor: pointer;
  }
`;