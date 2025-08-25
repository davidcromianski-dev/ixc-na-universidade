import { IConnection } from '../Interfaces/IConnection.js';

export class Connection implements IConnection {
  private isConnected: boolean = false;
  private config: any;

  constructor(config?: any) {
    this.config = config || { host: 'localhost', port: 3306 };
    this.connect();
  }

  private async connect(): Promise<void> {
    console.log(`Conectando ao banco em ${this.config.host}:${this.config.port}...`);
    this.isConnected = true;
  }

  async query(sql: string, params: any[]): Promise<any> {
    if (!this.isConnected) {
      throw new Error('Não conectado ao banco de dados');
    }

    return { id: 1, email: 'user@example.com', password: 'password123' };
  }

  async close(): Promise<void> {
    this.isConnected = false;
    console.log('Conexão fechada');
  }
}
