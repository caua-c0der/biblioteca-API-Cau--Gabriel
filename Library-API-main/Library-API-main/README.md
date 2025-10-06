# 📚 Biblioteca API DDD

API de biblioteca escolar desenvolvida com **NestJS**, **Prisma** e **MySQL**.  
Possui autenticação JWT, controle de papéis de usuário, CRUD de livros e fluxo de empréstimo/devolução.  

---

##  Requisitos

- [Node.js 18+](https://nodejs.org/)  
- [MySQL 8+](https://www.mysql.com/)  
- [Postman](https://www.postman.com/)  

## Configuração

Crie um arquivo **`.env`** na raiz com as variáveis:

```env
DATABASE_URL="mysql://root:senha@localhost:3306/biblioteca"
JWT_SECRET="chave_secreta"
```

Depois rode os comandos do Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

---

##  Como rodar

```bash
# Modo desenvolvimento
npm run start:dev
```

---

##  Endpoints principais

### Autenticação
- `POST /auth/register` → cria usuário  
- `POST /auth/login` → login e retorna token JWT  

### Usuários
- `GET /users` → lista usuários (restrito)  
- `GET /users/:id` → detalhes de um usuário  

### Livros
- `GET /books` → lista livros  
- `POST /books` → cria livro (admin)  
- `PATCH /books/:id` → atualiza livro  
- `DELETE /books/:id` → remove livro  

### Empréstimos
- `POST /loans/borrow` → faz empréstimo  
- `POST /loans/return` → devolve livro  

---





