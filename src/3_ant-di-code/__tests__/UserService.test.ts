/**
 * ⭐ TESTES DO USERSERVICE COM ANT-DI
 * 
 * Este arquivo demonstra como testar o UserService com Ant-DI.
 */

import { UserService } from '../Services/UserService.js';

describe('UserService (Ant-DI)', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('verifyPassword', () => {
    it('deve retornar true para senhas iguais', () => {
      const result = userService.verifyPassword('password123', 'password123');
      expect(result).toBe(true);
    });

    it('deve retornar false para senhas diferentes', () => {
      const result = userService.verifyPassword('password123', 'different');
      expect(result).toBe(false);
    });

    it('deve retornar false para senha vazia', () => {
      const result = userService.verifyPassword('', 'password123');
      expect(result).toBe(false);
    });

    it('deve retornar false para senha armazenada vazia', () => {
      const result = userService.verifyPassword('password123', '');
      expect(result).toBe(false);
    });

    it('deve retornar false para ambas as senhas vazias', () => {
      const result = userService.verifyPassword('', '');
      expect(result).toBe(false);
    });
  });

  // ✅ VANTAGEM: Testes unitários isolados
  describe('isolamento', () => {
    it('não deve depender de estado externo', () => {
      // ✅ VANTAGEM: O service é stateless e pode ser testado isoladamente
      const service1 = new UserService();
      const service2 = new UserService();

      const result1 = service1.verifyPassword('test', 'test');
      const result2 = service2.verifyPassword('test', 'test');

      expect(result1).toBe(result2);
    });
  });
});
