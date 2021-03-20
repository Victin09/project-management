import { Controller, Body, Post, UseGuards } from '@nestjs/common';

import { LoginUserDto } from '@application/dto/auth.dto';
import { AuthService } from '@domain/service/auth.service';
import { LocalAuthGuard } from '@domain/auth/local-auth.guard';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @Post('login')
    async login(@Body() userData: LoginUserDto): Promise<any> {
        return await this.authService.login(userData.username);
    }
}
