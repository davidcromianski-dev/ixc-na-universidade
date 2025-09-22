import { IUserService } from '../Interfaces/IUserService.js';
import { IConnection } from '../Interfaces/IConnection.js';

export class UserController {
  private userService: IUserService;
  private connection: IConnection;

  constructor(userService: IUserService, connection: IConnection) {
    this.userService = userService;
    this.connection = connection;
  }

  async authenticateUser(email: string, password: string): Promise<boolean> {
    try {
      const user = await this.connection.query(
        'SELECT * FROM users WHERE email = ?',
        [email]
      );

      if (!user) {
        return false;
      }

      return this.userService.verifyPassword(password, user.password);
    } catch (error) {
      console.error('Erro na autenticação:', error);
      return false;
    }
  }

  async getUserById(id: number): Promise<any> {
    try {
      const user = await this.connection.query(
        'SELECT * FROM users WHERE id = ?',
        [id]
      );
      return user;
    } catch (error) {
      console.error('Erro ao buscar usuário:', error);
      return null;
    }
  }
}
