import { Container } from '@davidcromianski-dev/ant-di';
import { UserController } from '../Controllers/UserController.js';
import { UserService } from '../Services/UserService.js';
import { Connection } from '../DataAccess/Connection.js';

const container = new Container();

// ✅ VANTAGEM: Registro simples e legível
container.set('Connection', () => new Connection({ host: 'localhost', port: 3306 }), true);
container.set('UserService', () => new UserService());
container.bind(UserController, [UserService, Connection]);

export { container };