import React, {useState, useContext} from 'react';
import * as C from './styles.js';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { FormValues } from '../../types/FormValues.js';
import { createNewUser, loginUser } from '../../utils/apiCalls.js';
import { AuthContext } from '../../contexts/AuthContext.js';
import { useNavigate } from 'react-router-dom';


type Props = {
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  registerIsNeeded: boolean;
  setRegisterIsNeeded: React.Dispatch<React.SetStateAction<boolean>>
}

const Form = ({registerIsNeeded, setRegisterIsNeeded, setIsLoading}: Props) => {
  const [errorMsg, setErrorMsg] = useState<string | null>();
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const authCtx = useContext(AuthContext);
  const navigate = useNavigate();

  const getFormSchema = () => {
    if(registerIsNeeded) {
      return z.object({
        email: z.string().min(6, 'No mínimo 6 caracteres').email('Formato de e-mail inválido'),
        orgao: z.string().min(2, 'No mínimo 2 caracteres')
        .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ0-9'\s]+$/), "Nome inválido"),
        estado: z.string().min(2, 'No mínimo 2 caracteres')
        .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido"),
        cidade: z.string().min(2, 'No mínimo 2 caracteres')
        .regex(new RegExp(/^[A-Za-záàâãéèêíïóôõöúçñÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ'\s]+$/), "Nome inválido"),
        password: z.string().min(5, 'No mínimo 5 caracteres')
      });
    } else {
      return z.object({
        email: z.string().email('Formato de e-mail inválido').min(6, 'No mínimo 6 caracteres'),
        password: z.string().min(5, 'No mínimo 5 caracteres')
      });
    }
  }

  const FormSchema = getFormSchema();

  const {
    register, 
    handleSubmit, 
    formState: {errors} 
  } = useForm<FormValues>({
    resolver: zodResolver(FormSchema)
  });

  const authUser = async (data: FormValues) => {
    setIsLoading(true);

    if(registerIsNeeded) {
      try {
        await createNewUser(data);
        setRegisterIsNeeded(false);
        setIsLoading(false);
      } catch (error:any) {
        alert(error.message);
        setIsLoading(false);
      }
    } else {
      try {
        const response = await loginUser(data);
        authCtx?.login(response.user, response.token);
        navigate('/home');
        setIsLoading(false);
      } catch (error:any) {
        setIsLoading(false);
        if(error.response.data.message) {
          setErrorMsg(error.response.data.message);
        } else {
          alert('Ocorreu um erro na sua autenticação! Tente mais tarde')
        }
      }
    }
  }

  const handleRegisterIsNeeded = () => {
    setErrorMsg(null);
    setRegisterIsNeeded(true);
  }

  return (
    <C.Form onSubmit={handleSubmit(authUser)}>
       {!registerIsNeeded ? (
        <>
          <C.InputContainer>
            <C.Icon name="person-circle-outline"/>
            <C.Input
                type="text"
                placeholder='exemplo@gmail.com'
                {...register('email')}
            />
          </C.InputContainer>
          {errors.email && <C.SpanError>{errors.email.message}</C.SpanError>}
          
          <C.InputContainer>
            <C.Icon name="lock-closed-outline"/>
            <C.Input
              type={showPassword ? 'text' : 'password'}
              placeholder='Digite a senha'
              {...register('password')}
            />
            <C.IconPasswordController onClick={() => setShowPassword(!showPassword)} name={showPassword ? 'eye-off-outline' : "eye-outline"}/>
           </C.InputContainer>
           {errors.password && <C.SpanError>{errors.password.message}</C.SpanError>}
           {errorMsg && (
            <C.SpanError>{errorMsg}</C.SpanError>
           )}

          <C.ButtonsArea>
            <C.Button type="submit">LOGIN</C.Button>
            <C.Button type="button" onClick={handleRegisterIsNeeded}>REGISTRE-SE</C.Button>
          </C.ButtonsArea>
        </>
       ): (
        <>
          <C.InputContainer>
            <C.Icon name="person-circle-outline"/>
            <C.Input
              type="text"
              placeholder='Digite o orgão responsável'
              {...register('orgao')}
            />
          </C.InputContainer>
          {errors.orgao && <C.SpanError>{errors.orgao.message}</C.SpanError>}

          <C.InputContainer>
            <C.Icon name="earth-outline"/>
            <C.Input
              type="text"
              placeholder='Digite seu estado'
              {...register('estado')}
            />
          </C.InputContainer>
          {errors.estado && <C.SpanError>{errors.estado.message}</C.SpanError>}
          
          <C.InputContainer>
            <C.Icon name="location-outline"/>
            <C.Input
              type="text"
              placeholder='Digite sua cidade'
              {...register('cidade')}
            />
          </C.InputContainer>
          {errors.cidade && <C.SpanError>{errors.cidade.message}</C.SpanError>}

          <C.InputContainer>
            <C.Icon name="mail-outline"/>
            <C.Input
              type="text"
              placeholder='Digite seu email'
              {...register('email')}
            />
          </C.InputContainer>
          {errors.email && <C.SpanError>{errors.email.message}</C.SpanError>}

          <C.InputContainer>
            <C.Icon name="lock-closed-outline"/>
            <C.Input
              type="text"
              placeholder='Digite a senha'
              {...register('password')}
            />
          </C.InputContainer>
          {errors.password && <C.SpanError>{errors.password.message}</C.SpanError>}

          <C.ButtonsArea>
            <C.Button type="submit">REGISTRAR</C.Button>
          </C.ButtonsArea>
        </>
       )} 
    </C.Form>
  )
}

export default Form