## Projeto NewsLBS
O projeto **NewsLBS** foi desenvolvido por mim, Lucas Bargas, com base em um layout que encontrei na web. Este projeto tem como objetivo simular um portal de notícias, porém com um visual mais simples.

### Link para visualizar o projeto
<https://news-lbs.vercel.app/>

### Principais recursos do App
* Registo, login e logout de usuário;
* Edição de usuário, somente autenticado;
* Registro, edição e exclusão de Notícia, somente autenticado;
* A edição ou exclusão só pode ser feita por quem postou a notícia.

### Tecnologias utilizadas
<table>
  <tr>
    <td>Reactjs</td>
    <td>Styled Components</td>
    <td>Axios</td>
    <td>React icons</td>
    <td>Events</td>
  </tr>
  <tr>
    <td>18.2</td>
    <td>5.3</td>
    <td>1.1</td>
    <td>4.4</td>
    <td>3.3</td>
  <tr>
</table>

### Outros recursos utilizados
* Hooks e Context API.

### Prints do App (Versão Desktop)
#### Páginas que não precisam de autenticação
<img alt="Página inicial" src="https://user-images.githubusercontent.com/76006347/212975542-293543fe-6c55-4c73-a05d-88c5605117b8.png">
<img alt="Página para visualizar Notícia" src="https://user-images.githubusercontent.com/76006347/212975962-f610e0ae-5105-4ae9-9186-d3c1a8e9ea8e.png">
<img alt="Página de registre-se" src="https://user-images.githubusercontent.com/76006347/212976331-bb246b67-5327-4f46-b561-d3bf7daaab43.png">
<img alt="Página de login" src="https://user-images.githubusercontent.com/76006347/212976885-5b2c7fd7-150f-4244-be32-2048bb8356f0.png">

#### Páginas que precisam de autenticação
<img alt="Página de Notícias do usuário" src="https://user-images.githubusercontent.com/76006347/212977431-44d5ba83-7e2c-4ea7-bf43-1a6445c41247.png">
<img alt="Página de cadastro de Notícia" src="https://user-images.githubusercontent.com/76006347/212977843-1f248ee5-0418-43f8-a124-e9ff29b82df8.png">
<img alt="Página de edição de Notícia" src="https://user-images.githubusercontent.com/76006347/212978224-999f7b51-2b85-4194-9049-5f5bc3c16815.png">
<img alt="Página de edição do usuário" src="https://user-images.githubusercontent.com/76006347/212978598-0886232f-99e0-4eb5-8032-b8fbf711fa95.png">

### Como executar este Frontend

#### Pré-requisitos
* Possuir o Nodejs instalado;
* Estar com o backend em execução (link do repositório do mesmo no final do readme).

#### Clone o repositório
```bash
git clone https://github.com/LucasBargas/newslbs_frontend.git
```

#### Entre na pasta
```bash
cd newslbs_frontend
```

#### Instale as dependências
```bash
npm install
```

#### Configure as variáveis de ambiente
```bash
# Crie um arquivo .env.local e passe os valores
REACT_APP_API=http://localhost:5000
```

#### Execute o App
```bash
npm start
```

# Autor
Lucas Bargas da Silva
</br>
<https://projetoslucasbargas.vercel.app/>
</br>
<https://www.linkedin.com/in/lucas-bargas/>

Gostaria de ver o repositório do Backend deste app?
[Clique aqui](https://github.com/LucasBargas/newslbs_backend)
