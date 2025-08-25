import { inject, injectable } from 'inversify';
import { TYPES } from '../Core/types.js';
import { IUserService } from '../Interfaces/IUserService.js';
import { IConnection } from '../Interfaces/IConnection.js';

@injectable()
export class UserController {
  private userService: IUserService;
  private connection: IConnection;

  constructor(
    @inject(TYPES.UserService) userService: IUserService,
    @inject(TYPES.Connection) connection: IConnection
  ) {
    // ✅ VANTAGEM: Injeção automática via decoradores
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
}
