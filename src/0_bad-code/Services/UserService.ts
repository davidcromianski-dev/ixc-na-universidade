export class UserService {
  verifyPassword(inputPassword: string, storedPassword: string): boolean {
    if (!inputPassword || !storedPassword) {
      return false;
    }

    return inputPassword === storedPassword;
  }
}
