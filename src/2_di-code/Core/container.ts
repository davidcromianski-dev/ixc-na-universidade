import 'reflect-metadata';
import { Container } from 'inversify';
import { TYPES } from './types.js';
import { IUserService, UserService } from '../Services/UserService.js';
import { IConnection, Connection } from '../DataAccess/Connection.js';
import { UserController } from '../Controllers/UserController.js';

const container = new Container();

// ✅ VANTAGEM: Registro centralizado de dependências
container.bind<IUserService>(TYPES.UserService).to(UserService).inSingletonScope();
container.bind<IConnection>(TYPES.Connection).to(Connection).inSingletonScope();
container.bind<UserController>(TYPES.UserController).to(UserController).inSingletonScope();

export { container };
