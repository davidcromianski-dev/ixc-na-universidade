import { UserController } from './Controllers/UserController.js';
import { UserService } from './Services/UserService.js';
// import { UserRestrictedByDateService } from './Services/UserRestrictedByDateService.js';
import { Connection } from './DataAccess/Connection.js';

// ✅ MELHORIA: Instanciação explícita - mais fácil de testar
async function main() {
  const userService = new UserService();
  // const userRestrictedByDateService = new UserRestrictedByDateService();
  const connection = new Connection({ host: 'localhost', port: 3306 });
  const controller = new UserController(c, connection);
  
  try {
    // Teste de autenticação
    const isAuthenticated = await controller.authenticateUser('user@example.com', 'password123');
    console.log('[BETTER CODE] Usuário autenticado:', isAuthenticated);    
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    await connection.close();
  }
}

main();
