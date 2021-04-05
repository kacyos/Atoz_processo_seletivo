# Desafio vaga de desenvolvedor frontend Jr. na Atoz

Olá! Primeiramente parabéns por chegar até aqui!
Nessa próxima etapa vamos colocar mais a mão na massa mesmo! 
É um desafio simples, então vamos a ele!

## Sobre o desafio

Você deverá desenvolver um formuário que simula entrada de usuários e checa se as entradas estão corretas ou não,
apresentando o erro ao usuário ou apresentando uma mensagem de "envio feito com sucesso" depois das checagens dos campos.
O formulário precisa obrigatoriamente ser RESPONSIVO. Para isso, peço que em telas grandes tenham 2 colunas de campos que se transforma em 1 em telas menores (mobile ou tablet). 


## Sobre a instalação

Dê fork com o git nesse repositório, clone em uma pasta local e rode o comando

### `npm install`

Após a instalação de todas as dependências você pode rodar o projeto usando o comando

### `npm start`

Depois disso é só codar :)

## Requisitos do formulário

Os inputs do usuário são os seguintes:

-Nome: deve checar se é uma string e deve conter no mínimo 6 caracteres. É obrigatório para o usuário

-Email: deve checar se é um email. É obrigatório para o usuário

-Celular: deve checar se é um número de celular (do Brasil). Não é obrigatório para o usuário

-Senha: deve conter no mínimo 8 caracteres e que não existam símbolos, apenas letras (maiusculas ou minúsculas). É obrigatório para o usuário

-Confirmação de senha: deve ser igual a senha. É obrigatório para o usuário

Caso algum desses requisitos não esteja correto, o usuário tem que ser apresentado ao problema e ser impedido de continuar com o envio do formulário.


## Informações extras

Esse desafio foi criado usando create-react-app.
A biblioteca para os componentes que sugiro é a @coreui/react e já esta instalada no projeto. Isso facilitará seu tempo de desenvolvimento além de ajudar - e muito - na responsividade.
As bibliotecas para validação que sugiro são o "formik" em conjunto com o "yup". Ambos também já estão instalados no projeto. 

## Documentações

https://github.com/jquense/yup - Yup

https://github.com/coreui/coreui-react - CoreUI

https://formik.org/docs/overview - Formik

https://pt-br.reactjs.org/docs/getting-started.html - React

