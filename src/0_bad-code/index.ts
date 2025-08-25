import { UserController } from './Controllers/UserController.js';

// ❌ PROBLEMA: Uso direto - difícil de testar e mockar
async function main() {
  const controller = new UserController();
  
  try {
    // Teste de autenticação
    const isAuthenticated = await controller.authenticateUser('user@example.com', 'password123');
    console.log('Usuário autenticado:', isAuthenticated);
  } catch (error) {
    console.error('Erro:', error);
  }
}

main();
