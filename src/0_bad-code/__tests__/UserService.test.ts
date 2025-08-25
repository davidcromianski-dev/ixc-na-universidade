/**
 * ❌ TESTES DO CÓDIGO RUIM - PROBLEMAS DE ACOPLAMENTO
 * 
 * Este arquivo demonstra os problemas de testabilidade do UserService.
 * Embora seja possível testar a lógica básica, há limitações.
 */

import { UserService } from '../Services/UserService.js';

describe('UserService (Código Ruim)', () => {
  let userService: UserService;

  beforeEach(() => {
    userService = new UserService();
  });

  describe('verifyPassword', () => {
    it('deve retornar true para senhas iguais', () => {
      // ✅ TESTE POSSÍVEL: Lógica básica pode ser testada
      const result = userService.verifyPassword('password123', 'password123');
      expect(result).toBe(true);
    });

    it('deve retornar false para senhas diferentes', () => {
      // ✅ TESTE POSSÍVEL: Lógica básica pode ser testada
      const result = userService.verifyPassword('password123', 'different');
      expect(result).toBe(false);
    });

    it('deve retornar false para senha vazia', () => {
      // ✅ TESTE POSSÍVEL: Lógica básica pode ser testada
      const result = userService.verifyPassword('', 'password123');
      expect(result).toBe(false);
    });

    it('deve retornar false para senha armazenada vazia', () => {
      // ✅ TESTE POSSÍVEL: Lógica básica pode ser testada
      const result = userService.verifyPassword('password123', '');
      expect(result).toBe(false);
    });

    // ❌ LIMITAÇÃO: Não é possível testar cenários de hash real
    // it('deve funcionar com senhas hasheadas', () => {
    //   // Em produção, as senhas seriam hasheadas
    //   // Mas não é possível testar isso aqui
    // });
  });

  // ❌ PROBLEMA: Método hashPassword não existe mais após refatoração
  // describe('hashPassword', () => {
  //   it('deve hashar senha corretamente', () => {
  //     // Este teste não é mais aplicável
  //   });
  // });
});
