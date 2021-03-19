import { Controller, Request, Post, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';

import { UserService } from '@domain/service/user.service';
import { User } from '@domain/interface/user.interface';
import { CreateUserDto } from '@application/dto/user.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(AuthGuard('local'))
    @Post('login')
    async login(@Request() req) {
        return req.user;
    }
}
