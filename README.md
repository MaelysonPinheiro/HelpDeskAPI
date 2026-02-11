# HelpDeskAPI (Node.js + Express)

API REST para gerenciamento de tickets (Help Desk). Estruturada com rotas e controllers, retornando JSON.

## ✅ Funcionalidades
- Criar ticket
- Listar tickets
- Buscar ticket por ID
- Atualizar status do ticket
- Deletar ticket

## 🧱 Tecnologias
- Node.js
- Express
- CORS
- Nodemon

## 🔗 Endpoints
### Health check
GET `/health`

### Tickets
- GET `/tickets` — lista todos
- GET `/tickets/:id` — busca por ID
- POST `/tickets` — cria um ticket
- PATCH `/tickets/:id/status` — atualiza status
- DELETE `/tickets/:id` — remove ticket

## 📦 Como rodar
Instalar dependências:
```bash
npm install
