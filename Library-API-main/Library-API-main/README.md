---

#Biblioteca API 

API de biblioteca escolar desenvolvida com **NestJS**, **Prisma** e **MySQL**.
Possui autenticação JWT, controle de papéis de usuário, CRUD de livros e fluxo de empréstimo/devolução.

---

## Getting Started

Essas instruções irão ajudá-lo a obter uma cópia do projeto e executá-lo localmente para desenvolvimento e testes.
Veja a seção de **Deployment** para notas sobre como implantar o sistema em produção.

---

### Prerequisites

Antes de começar, instale ou tenha configurado os seguintes itens:

* [Node.js 18+](https://nodejs.org/)
* [MySQL 8+](https://www.mysql.com/)
* [Postman](https://www.postman.com/)

---

### Installation

Passo a passo para configurar o ambiente de desenvolvimento:

```bash
# Clone o repositório
git clone https://github.com/seuusuario/biblioteca-api.git
cd biblioteca-api

# Instale as dependências
npm install
```

Crie o arquivo **`.env`** na raiz do projeto:

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

## Usage

Comandos úteis para desenvolvimento e execução do projeto:

```bash
# Rodar em modo de desenvolvimento
npm run start:dev

# Rodar em modo de produção
npm run start:prod
```

### Endpoints principais

#### Autenticação

* `POST /auth/register` → cria usuário
* `POST /auth/login` → login e retorna token JWT

#### Usuários

* `GET /users` → lista usuários (restrito)
* `GET /users/:id` → detalhes de um usuário

#### Livros

* `GET /books` → lista livros
* `POST /books` → cria livro (admin)
* `PATCH /books/:id` → atualiza livro
* `DELETE /books/:id` → remove livro

#### Empréstimos

* `POST /loans/borrow` → faz empréstimo
* `POST /loans/return` → devolve livro

---

## Deployment

Informações sobre como colocar o sistema em produção.

### Server

* **Live:** —
* **Release:** —
* **Development:** localhost:3000

### Branches

* **main:** código de produção estável
* **develop:** versão em desenvolvimento
* **feature/**: novas funcionalidades
* **bugfix/**: correções de erros

---

## Additional Documentation and Acknowledgments

* **Project folder on server:** `/var/www/biblioteca-api`
* **Confluence link:** (adicionar link)
* **Asana board:** (adicionar link)
* **Autor:** [Seu Nome]
* **Tecnologias:** NestJS • Prisma • MySQL • JWT

---

