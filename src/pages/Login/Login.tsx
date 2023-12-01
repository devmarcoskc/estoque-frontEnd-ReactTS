import * as C from './styles.ts';
import {useState} from 'react';
import Banner from '../../assets/images/estoque-banner.png'
import CompanyLogo from '../../assets/images/estoquemais.png';
import Form from '../../components/FormAuth';

const Login = () => {
  const [registerIsNeeded, setRegisterIsNeeded] = useState<boolean>(false)

  return (
    <C.Container>
      <C.Section>
        <C.LeftSideContainer>
          <C.CompayLogoArea>
            <C.CompanyLogo src={CompanyLogo}/>
          </C.CompayLogoArea>
          <C.ImageBanner src={Banner}/>
        </C.LeftSideContainer>
        <C.RightSideContainer>
          <C.H1>Bem-vindo!</C.H1>
          {!registerIsNeeded ?  (
            <C.H2>Faça o login para continuar</C.H2>
          ): (
            <C.SpanDivArea>
              <p>Já tem uma conta ?</p>
              <span onClick={() => setRegisterIsNeeded(false)}>Faça seu login aqui</span>
            </C.SpanDivArea>
          )}
          <Form registerIsNeeded={registerIsNeeded} setRegisterIsNeeded={setRegisterIsNeeded}/>
        </C.RightSideContainer>
      </C.Section>
    </C.Container>
  )
}

export default Login;