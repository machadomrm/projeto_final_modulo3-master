# API Onepiece - NodeJs

<img src="https://www.pngitem.com/pimgs/m/622-6228786_one-piece-anime-banner-hd-png-download.png" />

> API criada para estudar conceitos de back-end, utilizando a linguagem de programação JavaScript e o banco de dados MongoDB. Nessa API eu crio um CRUD completo de personagens Onepiece.

Para utilizar o projeto faça o dowload do arquivo zip, ou faça o clone em seu computador utilizando o Git. Execute o comando `npm i` dentro da pasta do projeto em seu computador(a pasta que contém o arquivo package.json), para baixar as dependencias do projeto.

## Executando o projeto

*Essa API utiliza o mongodb como banco de dados e o mongoose como ODM, então antes de testar a API certifique se você possui o MongoDb instalado em seu computador(https://www.mongodb.com/try/download/community).*

Além disso, você precisa criar o arquivo .env com a url do seu banco, *utilize o arquivo .env.exemple para criar o seu*. Esse é um exemplo de string de conexão com o banco de dados: mongodb://localhost:27017/db_onepiece.

Agora você pode executar o projeto: 
* Para executar o projeto com o nodemon, digite no terminal: 
```bash
npm run dev
```
* Para executar o projeto com o node, digite no terminal: 
```bash
npm start
```
## Testando a API

Você pode utilizar as ferramentas:

* Postman
* Insomnia
* Thunder Client (plugin no vsCode)

Exemplos de URLs: 
* Essa é a URL de teste padrão: http://localhost:3000/personagens
* Para buscar por ID, Editar ou Apagar, insira o ID na URL: http://localhost:3000/personagens
* Para fazer uma busca com query string, esse é um exemplo de URL: http://localhost:3000/filter?ocupacao=comandante

> Nesse site você consegue encontrar informações de personagens para testar os end-points: https://onepiece.fandom.com/pt/wiki/Piratas_do_Barba_Branca

Essa é a estrutura JSON para fazer o POST e o PUT:

```json
{
    "nome": "Portgas D. Ace (Ace o Punhos de Fogo)",
      "ocupacao": "ex-comandante da 2ª divisão dos Piratas do Barba Branca",
      "frutadodiabo": "Mera Mera no Mi (Fruta do Fogo)",
      "poder": "Chama de Fogo",
      "imagemUrl": "https://uploads.spiritfanfiction.com/fanfics/historias/202010/izuku-d-ace--o-punho-de-fogo-20871150-291020200820.png"
}
```

Obrigado por testar e utilizar minha API, volte sempre!