# ⚖️ Código com InversifyJS - DI com Decoradores

Este diretório demonstra o uso do **InversifyJS**, uma biblioteca robusta de injeção de dependências.

## 🚀 Vantagens do InversifyJS

### **Injeção Automática**
- Decorators `@injectable()` e `@inject()`
- Resolução automática de dependências
- Container centralizado para gerenciamento

### **Sistema de Tipos Robusto**
- Symbols para identificação de serviços
- Type safety com TypeScript
- Interfaces bem definidas

### **Funcionalidades Avançadas**
- Suporte a singletons
- Factory patterns
- Lazy loading
- Circular dependency resolution

### **Integração com Frameworks**
- Angular (DI nativo)
- Express.js
- NestJS

## ⚠️ Limitações e Desvantagens

### **Decoradores Experimentais**
- `experimentalDecorators` e `emitDecoratorMetadata` necessários
- Pode não funcionar em todos os ambientes
- Dependência de `reflect-metadata`

### **Curva de Aprendizado**
- Conceitos avançados de DI
- Configuração complexa
- Muitas opções podem confundir iniciantes

### **Bundle Size**
- Biblioteca maior
- Mais dependências
- Pode impactar performance em aplicações pequenas

## 📁 Estrutura Organizada por Domínio

```
src/2_di-code/
├── Controllers/          # Controle de requisições
│   └── UserController.ts # Controller com decoradores
├── Services/             # Lógica de negócio
│   └── UserService.ts    # Service com decoradores
├── DataAccess/           # Acesso a dados
│   └── Connection.ts     # Connection com decoradores
├── Interfaces/           # Contratos e abstrações
│   ├── IUserService.ts   # Interface do UserService
│   └── IConnection.ts    # Interface da Connection
├── Core/                 # Configurações centrais
│   ├── types.ts          # Symbols para identificação
│   └── container.ts      # Container do InversifyJS
├── index.ts              # Demonstração do InversifyJS
└── README.md             # Este arquivo
```

## 🎯 Objetivo

Mostrar como uma biblioteca robusta resolve problemas complexos, mas pode ser excessiva para casos simples.
