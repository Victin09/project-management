import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from '@domain/service/user.service';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
    constructor(private userService: UserService, private jwtService: JwtService) {}

    async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.userService.findByUsername(username);
        const samePassword = await bcrypt.compare(pass, user.password);
        if (user && samePassword) {
            const { ...result } = user;
            return result;
        }
        return null;
    }

    async login(username: string) {
        const payload = { username: username };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
