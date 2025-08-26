/**
 * ⭐ TESTES DO CONTAINER ANT-DI
 * 
 * Este arquivo demonstra como testar o container do Ant-DI.
 * Os testes são mais simples que os do InversifyJS.
 */

import { container } from '../Core/container.js';
import { UserController } from '../Controllers/UserController.js';
import { UserService } from '../Services/UserService.js';
import { Connection } from '../DataAccess/Connection.js';

describe('Container Ant-DI', () => {
  describe('resolução de dependências', () => {
    it('deve resolver UserService', () => {
      const userService = container.get('UserService');
      expect(userService).toBeInstanceOf(UserService);
    });

    it('deve resolver Connection', () => {
      const connection = container.get('Connection');
      expect(connection).toBeInstanceOf(Connection);
    });

    it('deve resolver UserController', () => {
      console.log(container);
      const userController = container.get('UserController');
      expect(userController).toBeInstanceOf(UserController);
    });
  });

  describe('configuração do container', () => {
    it('deve ter todos os tipos registrados', () => {
      expect(container.has('UserService')).toBe(true);
      expect(container.has('Connection')).toBe(true);
      expect(container.has('UserController')).toBe(true);
    });
  });
});
