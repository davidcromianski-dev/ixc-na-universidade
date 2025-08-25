export interface IConnection {
  query(sql: string, params: any[]): Promise<any>;
  close(): Promise<void>;
}
