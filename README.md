# Desacoplando o seu JavaScript: Injeção de Dependências na Prática com ant-di

**Tempo estimado:** 25min + 5min para perguntas

## 🚀 Como Executar os Exemplos

### Pré-requisitos
- Node.js 18+ 
- npm ou yarn

### Configuração do GitHub Packages

1. Crie um arquivo `.npmrc` na raiz do projeto com o seguinte conteúdo:

```bash
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
@davidcromianski-dev:registry=https://npm.pkg.github.com
```

2. Substitua `YOUR_GITHUB_TOKEN` pelo token de acesso gerado no GitHub.

### Instalação
```bash
npm install
```

### Execução
```bash
# Compilar o projeto
npm run build

# Executar todos os exemplos
npm start

# Executar testes
npm test
```

## 🏗️ Estrutura do Projeto Organizada por Domínio

```
src/
├── 0_bad-code/          # ❌ Código acoplado (problemas)
│   ├── Controllers/      # Controle de requisições
│   ├── Services/         # Lógica de negócio
│   └── DataAccess/       # Acesso a dados
├── 1_better-code/        # ✅ DI manual via construtor
│   ├── Controllers/      # Controle de requisições
│   ├── Services/         # Lógica de negócio
│   ├── DataAccess/       # Acesso a dados
│   └── Interfaces/       # Contratos e abstrações
├── 2_di-code/            # ⚖️ InversifyJS com decoradores
│   ├── Controllers/      # Controle de requisições
│   ├── Services/         # Lógica de negócio
│   ├── DataAccess/       # Acesso a dados
│   ├── Interfaces/       # Contratos e abstrações
│   └── Core/             # Configurações centrais
├── 3_ant-di-code/        # ⭐ Ant-DI simples e leve
│   ├── Controllers/      # Controle de requisições
│   ├── Services/         # Lógica de negócio
│   ├── DataAccess/       # Acesso a dados
│   ├── Interfaces/       # Contratos e abstrações
│   └── Core/             # Configurações centrais
└── index.ts              # 🚀 Execução de todos os exemplos
```

### 📁 Organização por Domínio

- **`Controllers/`** - Controle de requisições e coordenação
- **`Services/`** - Lógica de negócio e regras
- **`DataAccess/`** - Acesso a dados e persistência
- **`Interfaces/`** - Contratos e abstrações
- **`Core/`** - Configurações centrais e containers

Cada diretório contém exemplos completos e READMEs explicativos para facilitar o entendimento da evolução do código, agora organizados de forma mais profissional e escalável.
