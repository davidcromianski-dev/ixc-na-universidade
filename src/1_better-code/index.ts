import { UserController } from './Controllers/UserController.js';
import { UserService } from './Services/UserService.js';
import { Connection } from './DataAccess/Connection.js';

// ✅ MELHORIA: Instanciação explícita - mais fácil de testar
async function main() {
  const userService = new UserService();
  const connection = new Connection({ host: 'localhost', port: 3306 });
  const controller = new UserController(userService, connection);
  
  try {
    // Teste de autenticação
    const isAuthenticated = await controller.authenticateUser('user@example.com', 'password123');
    console.log('Usuário autenticado:', isAuthenticated);    
  } catch (error) {
    console.error('Erro:', error);
  } finally {
    await connection.close();
  }
}

main();
