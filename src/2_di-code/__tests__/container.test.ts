/**
 * ⚖️ TESTES DO CONTAINER INVERSIFYJS
 * 
 * Este arquivo demonstra como testar o container de injeção de dependências.
 * Alguns testes podem ser complexos devido à natureza dos decoradores.
 */

import 'reflect-metadata';
import { container } from '../Core/container.js';
import { TYPES } from '../Core/types.js';
import { UserController } from '../Controllers/UserController.js';
import { UserService } from '../Services/UserService.js';
import { Connection } from '../DataAccess/Connection.js';

describe('Container InversifyJS', () => {
  describe('resolução de dependências', () => {
    it('deve resolver UserService', () => {
      const userService = container.get(TYPES.UserService);
      
      expect(userService).toBeInstanceOf(UserService);
    });

    it('deve resolver Connection', () => {
      const connection = container.get(TYPES.Connection);
      
      expect(connection).toBeInstanceOf(Connection);
    });

    it('deve resolver UserController', () => {
      const controller = container.get(TYPES.UserController);
      
      expect(controller).toBeInstanceOf(UserController);
    });

    it('deve retornar a mesma instância para singletons', () => {
      const service1 = container.get(TYPES.UserService);
      const service2 = container.get(TYPES.UserService);
      
      expect(service1).toBe(service2);
    });
  });

  describe('configuração do container', () => {
    it('deve ter todos os tipos registrados', () => {
      expect(container.isBound(TYPES.UserService)).toBe(true);
      expect(container.isBound(TYPES.Connection)).toBe(true);
      expect(container.isBound(TYPES.UserController)).toBe(true);
    });

    it('deve ter tipos únicos', () => {
      const allTypes = Object.values(TYPES);
      const uniqueTypes = new Set(allTypes);
      
      expect(allTypes.length).toBe(uniqueTypes.size);
    });
  });
});
