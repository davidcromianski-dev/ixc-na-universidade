import { container } from './Core/container.js';
import { TYPES } from './Core/types.js';
import { UserController } from './Controllers/UserController.js';

// ✅ VANTAGEM: Resolução automática de dependências
async function main() {
  try {
    const controller = container.get<UserController>(TYPES.UserController);
    
    // Teste de autenticação
    const isAuthenticated = await controller.authenticateUser('user@example.com', 'password123');
    console.log('[INVERSIFY] Usuário autenticado:', isAuthenticated);
    
  } catch (error) {
    console.error('Erro:', error);
  }
}

main();
