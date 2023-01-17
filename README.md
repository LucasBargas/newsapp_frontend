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
<img alt="Página inicial" src="https://i.ibb.co/Sr1tGh7/news-home.png">
<img alt="Página para visualizar Notícia" src="https://i.ibb.co/ss9DCtJ/news.png">
<img alt="Página de registre-se" src="https://i.ibb.co/ySCZSgY/news-register.png">
<img alt="Página de login" src="https://i.ibb.co/ZNhDMSk/news-login.png">

#### Páginas que precisam de autenticação
<img alt="Página de Notícias do usuário" src="https://i.ibb.co/NSKvnQ9/news-dashboard.png">
<img alt="Página de cadastro de Notícia" src="https://i.ibb.co/kGj9pV1/news-register-news.png">
<img alt="Página de edição de Notícia" src="https://i.ibb.co/yY6dnQy/news-edit.png">
<img alt="Página de edição do usuário" src="https://i.ibb.co/2PjbhYn/news-edit-user.png">

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
