import { container } from './Core/container.js';
import { UserController } from './Controllers/UserController.js';

async function main() {
  try {
    const controller = container.get(UserController);
    
    const isAuthenticated = await controller.authenticateUser('user@example.com', 'password123');
    console.log('[Ant DI] Usuário autenticado:', isAuthenticated);    
  } catch (error) {
    console.error('Erro:', error);
  }
}

main();