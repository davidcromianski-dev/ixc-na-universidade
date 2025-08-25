/**
 * ✅ TESTES DO CÓDIGO MELHORADO - INJEÇÃO DE DEPENDÊNCIAS
 * 
 * Este arquivo demonstra como a injeção de dependências via construtor
 * torna os testes muito mais fáceis e controláveis.
 */

import { UserController } from '../Controllers/UserController.js';
import { UserService } from '../Services/UserService.js';
import { Connection } from '../DataAccess/Connection.js';

// ✅ VANTAGEM: Mocks podem ser criados facilmente
const mockUserService = {
  verifyPassword: jest.fn()
};

const mockConnection = {
  query: jest.fn(),
  close: jest.fn()
};

describe('UserController (Código Melhorado)', () => {
  let controller: UserController;

  beforeEach(() => {
    // ✅ VANTAGEM: Dependências podem ser mockadas
    jest.clearAllMocks();
    controller = new UserController(mockUserService as any, mockConnection as any);
  });

  describe('authenticateUser', () => {
    it('deve autenticar usuário com credenciais válidas', async () => {
      // ✅ VANTAGEM: Comportamento controlado via mocks
      const mockUser = { id: 1, email: 'user@example.com', password: 'hashed_password' };
      (mockConnection.query as jest.Mock).mockResolvedValue(mockUser);
      (mockUserService.verifyPassword as jest.Mock).mockReturnValue(true);

      const result = await controller.authenticateUser('user@example.com', 'password123');

      expect(result).toBe(true);
      expect(mockConnection.query).toHaveBeenCalledWith(
        'SELECT * FROM users WHERE email = ?',
        ['user@example.com']
      );
      expect(mockUserService.verifyPassword).toHaveBeenCalledWith('password123', 'hashed_password');
    });

    it('deve retornar false quando usuário não é encontrado', async () => {
      // ✅ VANTAGEM: Cenário de erro facilmente testável
      (mockConnection.query as jest.Mock).mockResolvedValue(null);

      const result = await controller.authenticateUser('invalid@email.com', 'password123');

      expect(result).toBe(false);
      expect(mockConnection.query).toHaveBeenCalledWith(
        'SELECT * FROM users WHERE email = ?',
        ['invalid@email.com']
      );
      expect(mockUserService.verifyPassword).not.toHaveBeenCalled();
    });

    it('deve retornar false quando verificação de senha falha', async () => {
      // ✅ VANTAGEM: Cenário de falha facilmente testável
      const mockUser = { id: 1, email: 'user@example.com', password: 'hashed_password' };
      (mockConnection.query as jest.Mock).mockResolvedValue(mockUser);
      (mockUserService.verifyPassword as jest.Mock).mockReturnValue(false);

      const result = await controller.authenticateUser('user@example.com', 'wrongpassword');

      expect(result).toBe(false);
      expect(mockUserService.verifyPassword).toHaveBeenCalledWith('wrongpassword', 'hashed_password');
    });
  });

  // ✅ VANTAGEM: Testes isolados e controláveis
  describe('isolamento de responsabilidades', () => {
    it('não deve fazer queries diretas no banco', async () => {
      // ✅ VANTAGEM: Podemos verificar que o controller não acessa o banco diretamente
      const mockUser = { id: 1, email: 'user@example.com', password: 'hashed_password' };
      (mockConnection.query as jest.Mock).mockResolvedValue(mockUser);
      (mockUserService.verifyPassword as jest.Mock).mockReturnValue(true);

      await controller.authenticateUser('user@example.com', 'password123');

      // ✅ VANTAGEM: Verificamos que apenas os métodos esperados são chamados
      expect(mockConnection.query).toHaveBeenCalledTimes(1);
      expect(mockUserService.verifyPassword).toHaveBeenCalledTimes(1);
    });
  });
});
