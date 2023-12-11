# Estoque+
## Sobre o projeto:
Estoque+ é uma plataforma de gerenciamento de estoque para pequenas empresas. As funcionalidades do sistema tem como objetivo facilitar o controle, organização e otimização do inventário de uma empresa. Link do projeto: https://estoquemais.onrender.com/
## Funcionalidades:
   - Sistema de autenticação:![Captura de tela 2023-12-11 145315](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/cc71fae9-48d5-448b-88e1-95f3a001fbde)
   - Listagem dos produtos em estoque com filtros dinâmicos, facilitando a consulta:![image](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/274d10e1-4575-4bbe-a118-7db79d75b500) ![image](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/1e177a1d-57d5-45ac-bd9c-4b5d8335933e)
   - Listagem de todas as transações feitas com filtros dinâmicos:![image](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/8df86dc7-a1dd-45f9-83ef-59e8ba35c85f)
   - Possibilidade de atualizar a quantidade do produto: ![image](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/158ca5cd-78e7-4469-8a30-728e96480180)
   - Adicionar e editar um produto: ![image](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/a406fc18-7b4f-4435-a201-b6c10c8ab57a)
![image](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/0884425b-ecd0-4ec0-b405-06bda16c0f47)
   - Possibilidade de remover um produto do estoque: ![image](https://github.com/devmarcoskc/estoque-frontEnd-ReactTS/assets/118542843/57cdda0e-156f-421f-b75d-80774d50effd)
## Instalação:
Para executar o projeto siga os seguintes passos:
   1. Clone os dois repositórios em suas respectivas pastas: back end e front end:
      
      1.1 Front End: `https://github.com/devmarcoskc/estoque-frontEnd-ReactTS`

      1.2 Back End: `https://github.com/devmarcoskc/estoque-backEnd-NodeTS`
   3. Instale as dependências em ambos:

      `npm install`
   4. Crie um banco de dados usando MongoDB:

      https://www.mongodb.com/atlas/database
      
   5. No seu Back End crie um arquivo de ambiente ".env" e adicione as seguintes variáveis:

      JWT_SECRET = 'adicione uma senha forte aqui'
      
      MONGO_URL = 'adicione aqui a URL do seu banco de dados criado'
      
      PORT = 'escolha uma porta para rodar o seu server'.
   6. No seu Front End crie um arquivo de ambiente ".env" e adicione a seguinte variável:

      `VITE_BASE_URL = 'http://localhost:SUA PORTA ESCOLHIDA AQUI'`
   7. Para rodar o projeto no back end e front end, digite no terminal:

      `npm run dev`

      
