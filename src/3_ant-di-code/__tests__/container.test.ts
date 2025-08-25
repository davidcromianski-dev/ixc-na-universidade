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
      const userService = container.offsetGet('UserService');
      expect(userService).toBeInstanceOf(UserService);
    });

    it('deve resolver Connection', () => {
      const connection = container.offsetGet('Connection');
      expect(connection).toBeInstanceOf(Connection);
    });

    it('deve resolver UserController', () => {
      const userController = container.offsetGet('UserController');
      expect(userController).toBeInstanceOf(UserController);
    });

    it('deve retornar a mesma instância para singletons', () => {
      const service1 = container.offsetGet('UserService');
      const service2 = container.offsetGet('UserService');
      
      expect(service1).toBe(service2);
    });
  });

  describe('configuração do container', () => {
    it('deve ter todos os tipos registrados', () => {
      expect(container.offsetExists('UserService')).toBe(true);
      expect(container.offsetExists('Connection')).toBe(true);
      expect(container.offsetExists('UserController')).toBe(true);
    });
  });
});
