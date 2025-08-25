export interface IUserService {
  verifyPassword(inputPassword: string, storedPassword: string): boolean;
}
