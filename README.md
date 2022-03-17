# Encurtador URL :link:

Projeto realizado para atender os requisitos do bootcamp da **Eduzz** oferecido pela **Digital Innovation One**.

### Instalação :cd:

Para instalar e rodar o Encurtador de URL é necessário seguir os seguintes passos:

1. Acesse o link do repositório no Github, [Encurtador de URL](https://github.com/paulomellodev/url_shortener);

2. Copie o link (aconselhável utilizar o SSH) para clonar o repositório para sua máquina:

   1. ```terminal
      $ git clone git@github.com:paulomellodev/url_shortener.git
      ```

3. Após baixar o repositório, entre na pasta:

   1. ```terminal
      $ cd url_shortener
      ```

4. Para instalar todas as dependências necessárias, basta rodar o comando abaixo:

   1. ```terminal
      $ yarn
      ```

5. Renomeie o arquivo `.env.example` para `.env` e altere as variáveis de ambiente que constam no arquivo de acordo com sua configuração:

   1. ```terminal
        PORT="Número da porta"
        DATABASE_URL="URL do Database"
        API_URL="URL da API, a porta da API deve ser a mesma da variável 'PORT'"
      ```

6. Estamos utilizando o MongoDB, sendo assim, será necessário alguma familiaridade com este banco de dados.

7. A partir daqui, seu projeto está pronto para rodar.

### Utilizando o projeto :computer:

Para rodar a aplicação, é necessário utilizar o comando:

```terminal
    $ yarn dev
```

A aplicação rodará na rota: http://localhost:PORT/

### Endpoints da aplicação

Para testar a aplicação, é necessário utilizar um API Client, como o Insomnia, Thunder Client ou similares.

#### POST /shorten

Criará e retornará a url encurtada

1. Reponse: status code -> 201

   Exemplo do Retorno da API com dados:

   ```json
   {
     "_id": "623360eff383d2cf8c2d30c8",
     "hash": "yhq31_MLs",
     "originalURL": "https://github.com/paulomellodev/url_shortener",
     "shortUrl": "http://localhost:3000/yhq31_MLs",
     "__v": 0
   }
   ```

2. Reponse: status code -> 401 (Forbidden)

   Exemplo do Retorno da API com dados:

   ```json
   {
     "_id": "623360eff383d2cf8c2d30c8",
     "hash": "yhq31_MLs",
     "originalURL": "https://github.com/paulomellodev/url_shortener",
     "shortUrl": "http://localhost:3000/yhq31_MLs",
     "__v": 0
   }
   ```

#### GET /<str:hash>/

Redirecionará para a página original caso o **HASH** fornecido seja encontrada.

1. Response: status code -> 302
   Exemplo da rota - **/623360eff383d2cf8c2d30c8**:

2. Response: status code -> 404 (Not Found)
   Exemplo da rota - **/623360eff3c8**:

```json
{ "error": "URL not found" }
```

### Tecnologias utilizadas :wrench:

- NodeJS
- MongoDB
- Typescript
- Express
