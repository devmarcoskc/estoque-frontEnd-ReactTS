import { ReactNode } from 'react';
import * as C from './styles';
import SideBar from '../SideBar';
import CompanyLogo from '../../assets/images/estoquemais.png';

type Props = {
  children: ReactNode;
  titleMenu: string;
  isEdditing?: boolean;
}

const PaginationContainer = ({children, titleMenu, isEdditing}: Props) => {
  return (
    <C.Container>
      <SideBar isEdditing={isEdditing}/>
      <C.Section>
        <C.SectionContainer>
          <C.SectionMenu>
            <C.TitlePageMenu>{titleMenu}</C.TitlePageMenu>
            <C.CompanyLogoImg src={CompanyLogo}/>
          </C.SectionMenu>
          {children}
        </C.SectionContainer>
      </C.Section>
    </C.Container>
  )
}

export default PaginationContainer