import { Injectable } from '@nestjs/common';

import { UserService } from '@domain/service/user.service';

@Injectable()
export class AuthService {
    constructor(private userService: UserService) {}

    async validateUser(username: string, password: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        if (user && user.password === password) {
            const { password, ...result } = user;
            return result;
        }
        return null;
    }
}
