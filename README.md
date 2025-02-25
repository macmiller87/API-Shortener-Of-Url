### 💻 Projeto

<p align="center">
    <img src="screens/logo.png" alt="demonstration"/>
</p>

 - Deafio Backend Tedd'y open finance, fazer um sistema `ENCURTADOR DE URL`.

 - O sistema recebe uma `https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-entenda-o-que-muda/` de entrada e tem que gerar uma saida `http://localhost/aZbKq7`.

 ### 🚀 Technologies

- Nodejs in version v22.14.0 (LTS)
- Postgres 
- Nest
- JsonWebToken
- Docker
- Github Actions

### 🚀 How to create and running the end-points 

#### `User` Module.

#### users: Post - `/users`

- A rota recebe `userName`, `èmail`, `password`, dentro do corpo da requisição.

#### users/userToken: Post - `/users/userToken`

- A rota recebe `èmail`, `password`, dentro do corpo da requisição, o resultado será a geração do `token`.

#### `URL` Module.

#### url/shortenUrl: Post - `/url/shortenUrl`

- A rota deve receber o `originalUrl`, dentro do corpo da requisição, através do `query` o `user_id` do usuário a ser consultado , e o `Token` do mesmo pelo auth `Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados, o resultado será a geração da url encurtada `shorteredUrl`.

#### url/getUrls: Get - `/url/getUrls`

- A rota deve receber através do `query` o `user_id` do usuário a ser consultado , e o `Token` do mesmo pelo auth `Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

#### /url/deleteUrl: Delete - `/url/deleteUrl`

- A rota deve receber através do `query` o `user_id` do usuário a ser consultado , e o `Token` do mesmo pelo auth `Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

## Project setup

```bash
$ yarn install
```

## Para rodar essa aplicação siga os seguintes passos:

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima"`.
- Com o `Nodejs` e o `Yarn` instalados, abra o terminal do `git`, e execute o seguinte comando => `yarn`, para baixar as dependências da aplicação ou `npm install`.
- Para rodar o projeto execute o seguinte comando => `yarn dc:up`, o projeto está FULL `conteinerizado` atráves do `Docker`, com o comando anterior o docker será startado .... assim que finalizar o build está pronta para testar.
- Para testar o funcional da aplicação será necessário instalar o software `Insomnia ou Postman ou ainda a extensão ThunderClient no VsCode` e criar as rotas da aplicação citadas acima.

## Continius deploy `GitHub Actions`

- O projeto está com um script de deploy no `Github Actions`, legal dar uma olhada nos steps.



