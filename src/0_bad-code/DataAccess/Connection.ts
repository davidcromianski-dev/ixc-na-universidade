export class Connection {
  private isConnected: boolean = false;

  constructor() {
    this.connect();
  }

  private async connect(): Promise<void> {
    console.log('Conectando ao banco de dados...');
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
