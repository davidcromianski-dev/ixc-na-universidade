import { IUserService } from "../Interfaces/IUserService";

export class UserRestrictedByDateService implements IUserService {
    verifyPassword(inputPassword: string, storedPassword: string): boolean {
        if (this.isRestrictedByDate()) {
            return false;
        }

        if (!inputPassword || !storedPassword) {
            return false;
        }
        return inputPassword === storedPassword;
    }

    private isRestrictedByDate(): boolean {
        const now = new Date();
        const hour = now.getHours();
        return hour >= 18 || hour <= 8;
    }
}