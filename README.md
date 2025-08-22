# 🚗 UniCar API - Sistema de Caronas Universitárias

API desenvolvida em NestJS para gerenciamento de caronas entre universitários.

## 👥 Equipe
Sprout Unit: Gabriel Sabino, Bruna Campos, Weslley Gabriel, Nicolas Monteiro

## 🛠️ Tecnologias
- NestJS (Framework para API)
- Prisma (ORM para banco de dados)
- SQLite (Banco de dados local)
- TypeScript (Linguagem)

## 🚀 Como configurar o projeto

1. **Clone o repositório**
   ```bash
   git clone https://github.com/SabinoGabriel/UniCar.git
   cd UniCar
   ```

2. **Instale as dependências**
   ```bash
   npm install
   ```

3. **Configure o banco de dados**
   - Crie o arquivo `.env` na raiz do projeto:
     ```
     DATABASE_URL="file:./prisma/dev.db"
     ```
   - Execute as migrações e gere o client Prisma:
     ```bash
     npx prisma migrate dev
     npx prisma generate
     ```

4. **Inicie o projeto**
   ```bash
   npm run start:dev
   ```

## 📊 Estrutura do Banco

**Tabela User (Usuários)**
- id: ID único
- name: Nome completo
- email: Email institucional (único)
- phone: Telefone (opcional)

**Tabela Ride (Caronas)**
- id: ID único
- origin: Local de partida
- destination: Local de destino
- date: Data e hora da viagem
- availableSeats: Vagas disponíveis
- price: Preço (opcional)
- userId: ID do motorista

## 📋 API Endpoints

### Usuários

- `GET /user`  
  Lista todos os usuários.

- `GET /user/:id`  
  Busca usuário por ID.

- `POST /user`  
  Cria um novo usuário.  
  **Exemplo:**
  ```json
  {
    "name": "Alice",
    "email": "alice@example.com"
  }
  ```

- `PATCH /user/:id`  
  Atualiza dados do usuário.  
  **Exemplo:**
  ```json
  {
    "name": "Alice M.",
    "email": "alice.m@example.com"
  }
  ```

- `DELETE /user/:id`  
  Remove usuário.

---

### Caronas

- `GET /ride`  
  Lista todas as caronas.

- `GET /ride/:id`  
  Busca carona por ID.

- `POST /ride`  
  Cria uma nova carona.  
  **Exemplo:**
  ```json
  {
    "origin": "São Paulo",
    "destination": "Rio",
    "date": "2025-08-22T12:00:00.000Z",
    "availableSeats": 3,
    "userId": 1
  }
  ```

- `PATCH /ride/:id`  
  Atualiza dados da carona.  
  **Exemplo:**
  ```json
  {
    "availableSeats": 2
  }
  ```

- `DELETE /ride/:id`  
  Remove carona.

---

## 🧪 Como testar

Após rodar `npm run start:dev`, a API estará disponível em:  
`http://localhost:3000`

Você pode testar os endpoints usando Postman, Thunder Client ou comandos `curl`.

## 📁 Estrutura do Projeto

```
UniCar/
├── prisma/
│   ├── schema.prisma
│   └── dev.db
├── src/
│   ├── app.module.ts
│   ├── main.ts
│   ├── user/
│   └── ride/
└── README.md
```

## ⚙️ Configuração do VS Code (Recomendado)

Extensões úteis:
- Prisma
- ESLint
- Prettier
- Thunder Client

## 🔧 Comandos Git para a equipe

- Antes de começar a trabalhar:
  ```bash
  git pull origin main
  ```
- Criar nova funcionalidade:
  ```bash
  git checkout -b feature/nome-da-funcionalidade
  ```
- Depois de terminar:
  ```bash
  git add .
  git commit -m "Descrição do que fez"
  git push origin feature/nome-da-funcionalidade
  ```

---

Projeto do Onboarding 2025.2 - Seed a Bit 🌱
