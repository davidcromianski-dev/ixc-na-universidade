import { UserController } from './Controllers/UserController.js';

async function main() {
  const controller = new UserController();
  
  try {
    const isAuthenticated = await controller.authenticateUser('user@example.com', 'password123');
    console.log('[BAD CODE] Usuário autenticado:', isAuthenticated);
  } catch (error) {
    console.error('Erro:', error);
  }
}

main();
