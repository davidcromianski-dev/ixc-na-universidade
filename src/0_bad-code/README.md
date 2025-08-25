# ❌ Código Ruim - Sem Injeção de Dependências

Este diretório demonstra os **problemas** de um código fortemente acoplado.

## 🚨 Problemas Identificados

### 1. **Acoplamento Forte**
- `UserController` cria instâncias de `UserService` e `Connection` diretamente
- Dependências hardcoded no construtor
- Impossível substituir implementações


### 2. **Dificuldade para Testar**
- Impossível usar mocks
- Dependências não podem ser substituídas
- Testes dependem de implementações reais

## 📁 Estrutura Organizada por Domínio

```
src/0_bad-code/
├── Controllers/          # Controle de requisições
│   └── UserController.ts # Controller acoplado
├── Services/             # Lógica de negócio
│   └── UserService.ts    # Service com implementação simples
├── DataAccess/           # Acesso a dados
│   └── Connection.ts     # Conexão simulada com banco
├── index.ts              # Demonstração dos problemas
└── README.md             # Este arquivo
```

## 🎯 Objetivo

Mostrar como **NÃO** fazer injeção de dependências e os problemas que isso causa.
