import { container } from './Core/container.js';
import { UserController } from './Controllers/UserController.js';

// 🚀 Ant-DI: Simples, leve e sem dependências externas
async function main() {
  try {
    const controller = container.get(UserController);
    
    // Teste de autenticação
    const isAuthenticated = await controller.authenticateUser('user@example.com', 'password123');
    console.log('Usuário autenticado:', isAuthenticated);    
  } catch (error) {
    console.error('Erro:', error);
  }
}

main();
