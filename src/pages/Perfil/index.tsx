import * as C from './styles';
import PaginationContainer from "../../components/PaginationContainer"
import { useAuth } from '../../hooks/useAuth';

const Perfil = () => {
  const {user} = useAuth();

  return (
    <PaginationContainer titleMenu="Seus dados do perfil">
      <C.Container>
        <C.IconAndTextsDiv>
          <C.Icon name="person-circle-outline"/>
          <C.H1>Órgão responsável:</C.H1>
          <C.H2>{user?.orgao}</C.H2>
        </C.IconAndTextsDiv>
        <C.IconAndTextsDiv>
          <C.Icon name="location-outline"/>
          <C.H1>Cidade de atuação:</C.H1>
          <C.H2>{user?.cidade}</C.H2>
        </C.IconAndTextsDiv>
        <C.IconAndTextsDiv>
          <C.Icon name="location-outline"/>
          <C.H1>Estado de atuação:</C.H1>
          <C.H2>{user?.estado}</C.H2>
        </C.IconAndTextsDiv>
        <C.SpanMessage>Muito obrigado por escolher a nossa plataforma! Em breve novas funcionalidades.</C.SpanMessage>
      </C.Container>
    </PaginationContainer>
  )
}

export default Perfil;