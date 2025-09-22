import { UserService } from '../Services/UserService.js';
import { Connection } from '../DataAccess/Connection.js';

export class UserController {
  private userService: UserService;
  private connection: Connection;

  constructor() {
    // ❌ PROBLEMA: Acoplamento forte - criando instâncias diretamente
    this.userService = new UserService();
    this.connection = new Connection();
  }

  async authenticateUser(email: string, password: string): Promise<boolean> {
    try {
      const user = await this.connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );
      await this.connection.close();

      if (!user) {
        return false;
      }

      return this.userService.verifyPassword(password, user.password);
    } catch (error) {
      console.error('Erro na autenticação:', error);
      return false;
    }
  }
}
