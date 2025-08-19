# 🚗 UniCar API - Sistema de Caronas Universitárias

API desenvolvida em NestJS para gerenciamento de caronas entre universitários.

## 👥 Equipe
**Sprout Unit**: Gabriel Sabino, Bruna Campos, Weslley Gabriel, Nicolas Monteiro

## 🛠️ Tecnologias
- **NestJS** - Framework para API
- **Prisma** - ORM para banco de dados  
- **SQLite** - Banco de dados local
- **TypeScript** - Linguagem

## 🚀 Como configurar o projeto

### Se você está clonando pela primeira vez:

```bash
# 1. Clonar o repositório
git clone https://github.com/SabinoGabriel/SproutUnit.git
cd SproutUnit

# 2. Instalar dependências
npm install

# 3. Configurar o banco de dados
npx prisma migrate dev
npx prisma generate

# 4. Rodar o projeto
npm run start:dev
```

### Comandos úteis:

```bash
# Rodar em desenvolvimento (com reload automático)
npm run start:dev

# Ver o banco de dados no navegador
npx prisma studio

# Reset completo do banco (apaga todos os dados!)
npx prisma migrate reset
```

## 📊 Estrutura do Banco

### Tabela User (Usuários)
- `id` - ID único
- `name` - Nome completo
- `email` - Email institucional (único)
- `phone` - Telefone (opcional)

### Tabela Ride (Caronas)
- `id` - ID único
- `origin` - Local de partida
- `destination` - Local de destino
- `date` - Data e hora da viagem
- `availableSeats` - Vagas disponíveis
- `price` - Preço (opcional)
- `userId` - ID do motorista

## 📋 API Endpoints (Planejados)

```
GET    /users          - Listar usuários
POST   /users          - Criar usuário
PUT    /users/:id      - Atualizar usuário
DELETE /users/:id      - Remover usuário

GET    /rides          - Listar caronas
POST   /rides          - Criar carona
PUT    /rides/:id      - Atualizar carona
DELETE /rides/:id      - Remover carona
```

## 🧪 Como testar

Depois de rodar `npm run start:dev`, a API fica disponível em: `http://localhost:3000`

### Teste básico:
```bash
curl http://localhost:3000
```

### Exemplo de criação de usuário (quando implementado):
```bash
curl -X POST http://localhost:3000/users \
  -H "Content-Type: application/json" \
  -d '{"name": "João Silva", "email": "joao@uni.edu", "phone": "11999999999"}'
```

## 📁 Estrutura do Projeto

```
unicar-api/
├── prisma/
│   ├── schema.prisma    # Definição das tabelas
│   └── dev.db          # Arquivo do banco SQLite
├── src/
│   ├── app.module.ts   # Módulo principal
│   └── main.ts         # Arquivo de entrada
└── README.md
```

## ⚙️ Configuração do VS Code (Recomendado)

Extensões úteis:
- **Prisma** - Syntax highlighting
- **ESLint** - Linting
- **Prettier** - Formatação
- **Thunder Client** - Teste de APIs

## 🔧 Comandos Git para a equipe

```bash
# Sempre antes de começar a trabalhar
git pull origin main

# Criar nova funcionalidade
git checkout -b feature/nome-da-funcionalidade

# Depois de terminar
git add .
git commit -m "Descrição do que fez"
git push origin feature/nome-da-funcionalidade
```

---

*Projeto do Onboarding 2025.2 - Seed a Bit* 🌱