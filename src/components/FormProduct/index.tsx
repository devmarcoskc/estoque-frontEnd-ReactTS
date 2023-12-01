import * as C from './styles';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { ProductFormType, ProductType } from '../../types/ProductType';
import { useEffect } from 'react';
import { useCreateProduct } from '../../hooks/useCreateProduct';
import { useAuth } from '../../hooks/useAuth';
import { useEditProduct } from '../../hooks/useEditProduct';

type Props = {
  isEdditing: boolean;
  product: ProductType | null;
  setIsEdditing: React.Dispatch<React.SetStateAction<boolean>>
}

const FormSchema = z.object({
  nome: z.string().min(2, 'No mínimo 2 caracteres'),
  código_de_identificação: z.string().min(4, 'No mínimo 4 caracteres'),
  categoria: z.string().min(3, 'No mínimo 3 caracteres').regex(new RegExp(/^\p{L}+$/u), 'Digite algo válido'),
  localização: z.string().min(1, 'No mínimo 1 caractere'),
  status: z.string().min(2, 'No mínimo 2 caracteres'),
  data_validade: z.string().regex(new RegExp(/^\d{2}\/\d{2}\/\d{4}$/), 'Data inválida'),
  quantidade: z.string().min(1, 'Digite alguma quantidade').transform((value) => Number(value)),
  fornecedor: z.string().min(2, 'No mínimo 2 caracteres'),
  data_entrada: z.string().regex(new RegExp(/^\d{2}\/\d{2}\/\d{4}$/), 'Data inválida'),
  preço_compra: z.string().min(1, 'Digite algum preço').transform((value) => Number(value)),
  preço_venda: z.string().min(1, 'Digite algum preço').transform((value) => Number(value)),
});

const FormProduct = ({isEdditing, product, setIsEdditing}: Props) => {
  const {user} = useAuth();
  const {createProduct} = useCreateProduct();
  const {updateProduct} = useEditProduct();

  const { 
    register, 
    handleSubmit, 
    formState: {errors},
    setValue,
    reset
  } = useForm<ProductFormType>({
    resolver: zodResolver(FormSchema)
  });

  useEffect(() => {
    if(product) {
      Object.entries(product).forEach(([key, value]) => {
        if (key === 'quantidade' || key === 'preço_compra' || key === 'preço_venda') {
          setValue(key as keyof ProductFormType, String(value));
        } else {
          setValue(key as keyof ProductFormType, value);
        }
      });
    }
  }, [product]);

  const productHandler = async (data: ProductFormType) => {
    data.orgãoId = user?._id;

    if(!isEdditing) {
      try {
        await createProduct(data);
        handleResetForm();
      } catch (error:any) {
        alert(error.message);
        handleResetForm();
      }
    } else {
      data._id = product?._id;

      try {
        await updateProduct(data);
        handleResetForm();
      } catch (error: any) {
        alert(error.message)
      }
    }
  }

  const handleResetForm = () => {
    setIsEdditing(false);
    reset();
  }

  return (
    <C.Form onSubmit={handleSubmit(productHandler)}>
      <C.FormInputsContainer>
        <C.ColDiv>
          <C.Label>Nome do Produto:</C.Label>
          <C.Input type="text" placeholder='Digite o nome' {...register('nome')}/>
          {errors.nome && <C.SpanError>{errors.nome.message}</C.SpanError>}

          <C.Label>Código de identificação:</C.Label>
          <C.Input type="text" placeholder='Código SKU' {...register('código_de_identificação')}/>
          {errors.código_de_identificação && <C.SpanError>{errors.código_de_identificação.message}</C.SpanError>}

          <C.Label>Categoria:</C.Label>
          <C.Input type="text" placeholder='Alguma categoria' {...register('categoria')}/>
          {errors.categoria && <C.SpanError>{errors.categoria.message}</C.SpanError>}

          <C.Label>Localização:</C.Label>
          <C.Input type="text" placeholder='Digite a localização' {...register('localização')}/>
          {errors.localização && <C.SpanError>{errors.localização.message}</C.SpanError>}
        </C.ColDiv>
        <C.ColDiv>
          <C.Label>Status:</C.Label>
          <C.Input type="text" placeholder='Qual o status atual' {...register('status')}/>
          {errors.status && <C.SpanError>{errors.status.message}</C.SpanError>}

          <C.Label>Data de validade:</C.Label>
          <C.Input type="text" placeholder='dia/mês/ano' {...register('data_validade')}/>
          {errors.data_validade && <C.SpanError>{errors.data_validade.message}</C.SpanError>}

          {!isEdditing && 
            <>
              <C.Label>Quantidade</C.Label>
              <C.Input type="number" placeholder='0' {...register('quantidade')}/>
              {errors.quantidade && <C.SpanError>{errors.quantidade.message}</C.SpanError>}
            </>
          }

          <C.Label>Fornecedor</C.Label>
          <C.Input type="text" placeholder='Digite o fornecedor' {...register('fornecedor')}/>
          {errors.fornecedor && <C.SpanError>{errors.fornecedor.message}</C.SpanError>}
        </C.ColDiv>
        <C.ColDiv>
          <C.Label>Data de entrada:</C.Label>
          <C.Input type="text" placeholder='dia/mês/ano' {...register('data_entrada')}/>
          {errors.data_entrada && <C.SpanError>{errors.data_entrada.message}</C.SpanError>}

          <C.Label>Preço de compra:</C.Label>
          <C.Input type="number" placeholder='0,00 R$' {...register('preço_compra')}/>
          {errors.preço_compra && <C.SpanError>{errors.preço_compra.message}</C.SpanError>}

          <C.Label>Preço da venda:</C.Label>
          <C.Input type="number" placeholder='0,00 R$' {...register('preço_venda')}/>
          {errors.preço_venda && <C.SpanError>{errors.preço_venda.message}</C.SpanError>}
        </C.ColDiv>
      </C.FormInputsContainer>
      <C.ButtonsArea>
        {!isEdditing ? (
          <>
            <C.Button type="submit">Adicionar</C.Button>
            <C.Button type="button" onClick={handleResetForm}>Resetar</C.Button>
          </>
        ): (
          <>
            <C.Button type="submit">Editar</C.Button>
            <C.Button type="submit" onClick={handleResetForm}>Adicionar novo produto</C.Button>
          </>
        )}

      </C.ButtonsArea>
    </C.Form>
  )
}

export default FormProduct