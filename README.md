# HelpDeskAPI

API REST para gerenciamento de tickets de suporte (Help Desk), construída com Node.js e Express. Este projeto foi desenvolvido como parte do meu portfólio backend para demonstrar a criação de APIs REST estruturadas.

---

## Funcionalidades

* Criar tickets
* Listar tickets
* Buscar ticket por ID
* Atualizar status do ticket
* Deletar ticket
* Persistência em arquivo JSON
* Endpoint de health check

---

## Tecnologias

* Node.js
* Express
* CORS
* Nodemon
* File System (JSON persistence)

---

## Estrutura do projeto

HelpDeskAPI
│
├── data
│   └── tickets.json
│
├── src
│   ├── controllers
│   │   └── ticketController.js
│   │
│   ├── routes
│   │   └── tickets.js
│   │
│   └── server.js
│
├── package.json
└── README.md

---

## Endpoints

Health check
GET /health

Listar tickets
GET /tickets

Buscar ticket por ID
GET /tickets/:id

Criar ticket
POST /tickets

Body:
{
"title": "Erro no sistema",
"description": "Usuário não consegue acessar"
}

Atualizar status do ticket
PATCH /tickets/:id/status

Body:
{
"status": "in_progress"
}

Status possíveis:
open
in_progress
closed

Deletar ticket
DELETE /tickets/:id

---

## Como rodar o projeto

Instalar dependências:
npm install

Rodar em desenvolvimento:
npm run dev

Rodar em produção:
npm start

Servidor local:
http://localhost:3000

---

## Exemplo usando curl

curl -X POST http://localhost:3000/tickets 
-H "Content-Type: application/json" 
-d '{"title":"Erro login","description":"Usuário não consegue acessar"}'

---

## Sobre o projeto

Este projeto foi criado para praticar:

* criação de APIs REST
* organização em controllers e routes
* persistência de dados sem banco
* estrutura de backend Node.js
* manipulação de arquivos com fs/promises

---

## Autor

Maelyson Machado Pinheiro
