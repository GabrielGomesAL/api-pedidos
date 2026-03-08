# API de Gerenciamento de Pedidos

Esta é uma API REST desenvolvida em **Node.js** utilizando **Express** e **MongoDB**, com o objetivo de gerenciar pedidos.  
A API permite **criar, consultar, listar, atualizar e deletar pedidos**.

## Tecnologias utilizadas

- Node.js
- Express
- MongoDB
- Mongoose
- Postman (para testes)

---

# Estrutura do Projeto
api-pedidos
│
├ models
│ └ Order.js
│
├ routes
│ └ orderRoutes.js
│
├ controllers
│
├ server.js
├ package.json
├ .env
└ README.md

---

# Instalação

Clone o repositório:

git clone https://github.com/GabrielGomesAL/api-pedidos.git


Entre na pasta do projeto:
cd api-pedidos

Instale as dependências:

Instale as dependências:


npm install


---

# Configuração do Banco

Crie um arquivo `.env` na raiz do projeto com o seguinte conteúdo:


MONGO_URL=sua_string_de_conexao_mongodb


Exemplo:


MONGO_URL=mongodb+srv://usuario:senha@cluster.mongodb.net/pedidos


---

# Executar o projeto

Inicie o servidor com o comando:


node server.js


O servidor será iniciado em:


http://localhost:3000


---

# Endpoints da API

## Criar pedido

POST


/order


Body de exemplo:


{
"numeroPedido": "v10089015vdb-01",
"valorTotal": 10000,
"dataCriacao": "2023-07-19T12:24:11.5299601+00:00",
"items": [
{
"idItem": "2434",
"quantidadeItem": 1,
"valorItem": 1000
}
]
}


---

## Buscar pedido por ID

GET


/order/:id


Exemplo:


/order/v10089015vdb-01


---

## Listar todos pedidos

GET


/order/list


---

## Atualizar pedido

PUT


/order/:id


Exemplo de body:


{
"value": 20000
}


---

## Deletar pedido

DELETE


/order/:id


---

# Estrutura do Pedido no Banco


{
"orderId": "v10089015vdb-01",
"value": 10000,
"creationDate": "2023-07-19T12:24:11.529Z",
"items": [
{
"productId": 2434,
"quantity": 1,
"price": 1000
}
]
}


---

# Testes

Os endpoints podem ser testados utilizando ferramentas como:

- Postman
- Insomnia
- Thunder Client

---

# Autor

Gabriel Gomes Almeida

LinkedIn:

https://www.linkedin.com/in/gabriel-gomes-almeida/

✅ Depois disso só faça:

git add .
git commit -m "Adicionando README"
git push



