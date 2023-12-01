import * as C from './styles';
import { useAuth } from '../../hooks/useAuth';
import { Colors } from '../../globalStyles/globalStyles';
import { useIsMobile } from '../../hooks/useIsMobile';
import { useState } from 'react';

type SideBarProps = {
  isEdditing?: boolean;
}

const SideBar = ({isEdditing}: SideBarProps) => {
  const [showSideBar, setShowSideBar] = useState<boolean>(false);

  const { logout } = useAuth();
  const path = location.pathname;
  const { isMobile } = useIsMobile();

  return (
    <>
    <C.SideBar style={isMobile ? {marginLeft: showSideBar ? '0%' : '-70%'} : {marginLeft: '0%'}}>
      <C.NavContainer>
        {isMobile && showSideBar && (
          <C.CloseMenuMobile name='close-outline' onClick={() => setShowSideBar(false)}/>
        )}
        <C.NavTitle>Bem-vindo</C.NavTitle>
        <C.LinkAndIconArea to="/home" style={{color: path === '/home' ? `${Colors.primary400}` : 'white'}}>
          <C.LinkNav>Visão Geral</C.LinkNav>
          <C.Icon name="stats-chart-outline"/>
        </C.LinkAndIconArea>
        <C.LinkAndIconArea to="/addproduct" style={{color: path === '/addproduct' ? `${Colors.primary400}` : 'white'}}>
          <C.LinkNav>{isEdditing ? 'Editar produto' : 'Adicionar produto'}</C.LinkNav>
          <C.Icon name="add-outline"/>
        </C.LinkAndIconArea>
        <C.LinkAndIconArea to="/transactions" style={{color: path === '/transactions' ? `${Colors.primary400}` : 'white'}}>
          <C.LinkNav>Suas transações</C.LinkNav>
          <C.Icon name="reader-outline"/>
        </C.LinkAndIconArea>
        <C.LinkAndIconArea to="/perfil" style={{color: path === '/perfil' ? `${Colors.primary400}` : 'white'}}>
          <C.LinkNav>Perfil</C.LinkNav>
          <C.Icon name="person-circle-outline"/>
        </C.LinkAndIconArea>
        <C.LinkAndIconArea onClick={() => logout()} to="/">
          <C.LinkNav>Sair</C.LinkNav>
          <C.Icon name="log-out-outline"/>
        </C.LinkAndIconArea>
      </C.NavContainer>
    </C.SideBar>

    {isMobile && !showSideBar && (
      <C.MenuMobile name='reorder-three-outline' onClick={() => setShowSideBar(true)}/>
    )}
    </>
  )
}

export default SideBar;