import { injectable } from 'inversify';
import { IUserService } from '../Interfaces/IUserService.js';

@injectable()
export class UserService implements IUserService {
  verifyPassword(inputPassword: string, storedPassword: string): boolean {
    if (!inputPassword || !storedPassword) {
      return false;
    }

    return inputPassword === storedPassword;
  }
}

export { IUserService };
