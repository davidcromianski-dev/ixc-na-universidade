# ⭐ Código com Ant-DI - Simples e Leve

Este diretório demonstra o uso do **Ant-DI**, uma biblioteca de injeção de dependências simples e leve.

## 🚀 Vantagens do Ant-DI

### **Simplicidade**
- API simples e intuitiva
- Baixa curva de aprendizado
- Sem decoradores experimentais

### **Leveza**
- Sem dependências externas
- Bundle size mínimo
- Performance otimizada

### **Flexibilidade**
- Registro simples de serviços
- Suporte a singletons
- Fácil de customizar

### **Perfeito para Estudo**
- Código fonte legível
- Conceitos claros
- Ideal para aprender DI

## 🔧 Funcionalidades

### **Registro de Serviços**
```typescript
container.offsetSet('UserService', () => new UserService(), true);
container.offsetSet('Connection', () => new Connection(), true);
```

### **Resolução de Dependências**
```typescript
const service = container.offsetGet('UserService');
```

### **Suporte a Testes**
```typescript
container.offsetSet('UserService', () => mockService, true);
container.offsetUnset('UserService');
```

## 📁 Estrutura Organizada por Domínio

```
src/3_ant-di-code/
├── Controllers/          # Controle de requisições
│   └── UserController.ts # Controller com injeção
├── Services/             # Lógica de negócio
│   └── UserService.ts    # Service implementando interface
├── DataAccess/           # Acesso a dados
│   └── Connection.ts     # Connection configurável
├── Interfaces/           # Contratos e abstrações
│   ├── IUserService.ts   # Interface do UserService
│   └── IConnection.ts    # Interface da Connection
├── Core/                 # Configurações centrais
│   ├── AntDI.ts          # Implementação da biblioteca
│   └── container.ts      # Container configurado
├── index.ts              # Demonstração básica
├── test-example.ts       # Exemplo de testes
└── README.md             # Este arquivo
```

## 🎯 Objetivo

Mostrar como uma solução simples pode ser tão eficaz quanto soluções complexas para casos de uso comuns.

## 💡 Inspiração

Inspirado no Pimple do PHP, o Ant-DI traz simplicidade e eficiência para JavaScript/TypeScript.
