<p align="center">
    <img src="screens/logo.png" alt="demonstration"/>
</p>


##### EN

### 💻 Project

 - Backend challenge from Teddy's Open Finnance, make a `Shortered Of URL`
 
 - The sistem recieve a `https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-entenda-o-que-muda/` of the imput, and needs to generate an output `http://localhost/aZbKq7`.

 ### 🚀 Technologies

- Nodejs na version v22.14.0 (LTS)
- Typescript
- Postgres 
- Nest
- Prisma
- JsonWebToken
- Docker
- Github Actions

### 🚀 How to create and running the endpoints 

#### `User` Module.

#### /users: Post - `/users`

- The end-point recieve `userName`, `èmail`, `password`, inside of de the requisitation body, for register a user.

#### /users/userToken: Post - `/users/userToken`

- The end-point recieve, `email`, `password`, inside of de the requisitation body, as a result have a `token`.

#### `URL` Module.

#### /url/shortenUrl: Post - `/url/shortenUrl`

- The end-point must recieve the parameter `originalUrl`, inside of requisitation body, through of `query` the `user_id` to going to consulted and `Token` the same through auth `Bearer`, this request only to happen, if two parameters passes before were going to validated, the result wil be the shortered of the URL `shorteredUrl`.

#### /url/getUrls: Get - `/url/getUrls`

- The end-point must recieve through `query` the `user_id` of the user to be consulted, and `token` of the same through auth `Bearer`, this request only to happen if two parameters passes before were going to validated.

#### /url/updateUrl: Put - `/url/updateUrl`

- The end-point must recieve the parameter `id` and `originalUrl`, inside of requisitation body, and through `query` the `user_id` of the user to be consulted, and `token` of the same through auth `Bearer`, this request only to happen if two parameters passes before were going to validated.

#### /url/deleteUrl: Delete - `/url/deleteUrl`

- The end-point must recieve the parameter `id`, inside of requisitation body, and through `query` the `user_id` of the user to be consulted, and `token` of the same through auth `Bearer`, this request only to happen if two parameters passes before were going to validated.

## Setup Project

## For running this project follow the next steps:

#### Arquivo `.env.example`

- Before all edit th file `.env.example` to `.env`, and fill in all the envioroment variables of the project.
- Copy the repository Url at `CODE `menu.
- With git installed, execute the follow command => `git clone "Aqui vai a url copiada acima";
-  With `Nodejs` and `Yarn` or `Npm` intalled, open git terminal, and execute the follow command `yarn` ou `npm install`, for update the application dependencies.
- For running the project, execute the follow command => `yarn dc:up`, the project it's Full containeraized through `Docker`, 
with the before command, docker will be started .... as soon as finished th build, it's ready to test.
- For stop the application and clean docker containers, execute the follow commad `yarn dc:down`.
- For test the project funtionalities it will be necessary to install some kind of softwares such as `Insomnia ou Postman ou ainda a extensão ThunderClient no VsCode` and create the application end-point mentioned above.

## Continuous deployment `GitHub Actions`

- The application have a `Github Actions`, it's interresting check out the steps.








##### Pt-br

### 💻 Projeto

 - Deafio Backend Teddy's open finance, fazer um sistema `ENCURTADOR DE URL`.

 - O sistema recebe uma `https://teddy360.com.br/material/marco-legal-das-garantias-sancionado-entenda-o-que-muda/` de entrada e tem que gerar uma saida `http://localhost/aZbKq7`.

 ### 🚀 Tecnologias

- Nodejs na version v22.14.0 (LTS)
- Typescript
- Postgres 
- Nest
- Prisma
- JsonWebToken
- Docker
- Github Actions

### 🚀 Como criar e rodar os endpoints da aplicação 

#### `User` Module.

#### /users: Post - `/users`

- O end-point recebe `userName`, `èmail`, `password`, dentro do corpo da requisição, para cadastro do usuário

#### /users/userToken: Post - `/users/userToken`

- O end-point recebe `èmail`, `password`, dentro do corpo da requisição, o resultado será a geração do `token`.

#### `URL` Module.

#### /url/shortenUrl: Post - `/url/shortenUrl`

- O end-point deve receber o parâmetro `originalUrl`, dentro do corpo da requisição, através do `query` o `user_id` do usuário a ser consultado e o `Token` do mesmo pelo auth `Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados, o resultado será a geração da url encurtada `shorteredUrl`.

#### /url/getUrls: Get - `/url/getUrls`

- O end-point deve receber através do `query` o `user_id` do usuário a ser consultado e o `Token` do mesmo pelo auth `Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

#### /url/updateUrl: Put - `/url/updateUrl`

- O end-point deve receber o parâmetro `originalUrl` e `id`, dentro do corpo da requisição, através do parâmetro `query` o `user_id` do usuário a ser consultado, e o `Token` do mesmo pelo auth `Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

#### /url/deleteUrl: Delete - `/url/deleteUrl`

- O end-point deve receber o parâmetro `id`, dentro do corpo da requisição, através do parâmetro `query` o `user_id` do usuário a ser consultado , e o `Token` do mesmo pelo auth `Bearer`, essa consulta só pode acontecer caso os dois parâmetros passados anteriormente sejam válidados.

## Setup do Projeto

## Para rodar essa aplicação siga os seguintes passos:

#### Arquivo `.env.example`

- Antes de tudo editar o arquivo `.env.example` para `.env`, e preencher todas as variaveis de ambiente do projeto.

- Copie a url do repositório na aba `CODE`.
- Com o git instalado, execute o seguinte comando => `git clone "Aqui vai a url copiada acima"`.
- Com o `Nodejs` e o `Yarn` ou `Npm` instalados, abra o terminal do `git`, e execute o seguinte comando => `yarn` ou `npm install`, para baixar as dependências da aplicação.
- Para rodar o projeto execute o seguinte comando => `yarn dc:up`, o projeto está FULL `conteinerizado` atráves do `Docker`, com o comando anterior o docker será startado .... assim que finalizar o build está pronta para testar.
- Para dar stop no projeto e limpar o docker execute o seguinte comando `yarn dc:down`.
- Para testar o funcional da aplicação será necessário instalar o software `Insomnia ou Postman ou ainda a extensão ThunderClient no VsCode` e criar as rotas da aplicação citadas acima.

## deploy contínuo `GitHub Actions`

- O projeto está com um script de deploy no `Github Actions`, interresante dar uma olhada nos steps.



