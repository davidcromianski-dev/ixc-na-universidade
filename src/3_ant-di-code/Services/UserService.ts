import { IUserService } from '../Interfaces/IUserService.js';

export class UserService implements IUserService {
  verifyPassword(inputPassword: string, storedPassword: string): boolean {
    if (!inputPassword || !storedPassword) {
      return false;
    }

    return inputPassword === storedPassword;
  }
}
