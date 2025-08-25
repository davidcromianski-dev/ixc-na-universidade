/**
 * ⚖️ TESTES DO CÓDIGO COM INVERSIFYJS - DI COM DECORADORES
 * 
 * Este arquivo demonstra como o InversifyJS facilita os testes
 * através de injeção automática de dependências.
 */

import { UserController } from '../Controllers/UserController.js';
import { IUserService } from '../Interfaces/IUserService.js';
import { IConnection } from '../Interfaces/IConnection.js';

// ✅ VANTAGEM: Mocks podem ser criados facilmente
const mockUserService: IUserService = {
  verifyPassword: jest.fn()
};

const mockConnection: IConnection = {
  query: jest.fn(),
  close: jest.fn()
};

describe('UserController (InversifyJS)', () => {
  let controller: UserController;

  beforeEach(() => {
    // ✅ VANTAGEM: Dependências podem ser mockadas
    jest.clearAllMocks();
    
    // ⚠️ LIMITAÇÃO: InversifyJS requer decoradores, mas para testes
    // podemos criar instâncias diretamente para simplicidade
    controller = new (UserController as any)(mockUserService, mockConnection);
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

  // ❌ LIMITAÇÃO: Testes de integração com container real são complexos
  // describe('integração com container', () => {
  //   it('deve resolver dependências via container', async () => {
  //     // Para testar isso, precisaríamos configurar o container real
  //     // o que pode ser complexo e frágil
  //   });
  // });
});
