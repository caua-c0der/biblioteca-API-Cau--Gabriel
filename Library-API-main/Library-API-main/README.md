Perfeito 😎
Você quer algo **simples**, **bonito**, **profissional** — sem animações, mas ainda com um toque **nerd e estilizado** (com ícones, emojis e visual limpo de README de dev moderno).

Aqui está um modelo otimizado para **README.md** no GitHub — ele renderiza perfeitamente, sem scripts ou HTML extra.
Você pode **copiar e colar direto** no seu repositório.

---

````md
# 📚 Biblioteca API

> Uma API de gerenciamento de biblioteca escolar construída com **NestJS**, **Prisma** e **MySQL**.  
> Controle de usuários, autenticação JWT, CRUD de livros e fluxo completo de empréstimos.  
> _“Porque até os devs precisam devolver os livros em dia.”_ 👾

---

## 🚀 Tecnologias

- 🧠 **NestJS** — estrutura modular e poderosa para Node.js  
- 🧩 **Prisma ORM** — modelagem e acesso ao banco de dados  
- 🗄️ **MySQL** — armazenamento relacional rápido e confiável  
- 🔐 **JWT** — autenticação e autorização de usuários  

---

## ⚙️ Requisitos

Antes de rodar o projeto, você precisará ter instalado:

- [Node.js 18+](https://nodejs.org/)
- [MySQL 8+](https://www.mysql.com/)
- [Postman](https://www.postman.com/) (opcional, para testes de API)

---

## 🧰 Instalação

```bash
# Clone o repositório
git clone https://github.com/seuusuario/biblioteca-api.git
cd biblioteca-api

# Instale as dependências
npm install
````

Crie um arquivo `.env` na raiz do projeto com:

```env
DATABASE_URL="mysql://root:senha@localhost:3306/biblioteca"
JWT_SECRET="sua_chave_secreta_aqui"
```

Depois rode os comandos do Prisma:

```bash
npx prisma migrate dev
npx prisma generate
```

---

## 💻 Uso

```bash
# Rodar em modo de desenvolvimento
npm run start:dev

# Rodar em modo de produção
npm run start:prod
```

---

## 🔗 Endpoints Principais

### 🧾 Autenticação

* `POST /auth/register` → cria novo usuário
* `POST /auth/login` → autentica e retorna token JWT

### 👥 Usuários

* `GET /users` → lista todos os usuários (restrito)
* `GET /users/:id` → detalhes de um usuário específico

### 📘 Livros

* `GET /books` → lista todos os livros
* `POST /books` → adiciona livro (somente admin)
* `PATCH /books/:id` → atualiza informações
* `DELETE /books/:id` → remove livro

### 📦 Empréstimos

* `POST /loans/borrow` → realiza empréstimo
* `POST /loans/return` → devolve livro

---

## 🧱 Estrutura de Branches

| Tipo         | Descrição                  |
| ------------ | -------------------------- |
| **main**     | Versão estável de produção |
| **develop**  | Versão de desenvolvimento  |
| **feature/** | Novas funcionalidades      |
| **bugfix/**  | Correções de erros         |

---

## 🛰️ Deploy

* **Dev:** `http://localhost:3000`
* **Produção:** *(a configurar)*

---

## 🧠 Créditos

* 👨‍💻 **Autor:** [Seu Nome Aqui]
* 🗂️ **Projeto:** `/var/www/biblioteca-api`
* 💾 **Stack:** NestJS • Prisma • MySQL • JWT

---

> *"Knowledge is power. Use it responsibly."* 🧩

