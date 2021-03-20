import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';

import { UserService } from '@domain/service/user.service';
import { User } from '@domain/interface/user.interface';
import { CreateUserDto } from '@application/dto/user.dto';
import { JwtAuthGuard } from '@domain/auth/jwt-auth';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @UseGuards(JwtAuthGuard)
    @Get('list')
    async list(): Promise<User[]> {
        return await this.userService.list();
    }

    @UseGuards(JwtAuthGuard)
    @Post('create')
    async create(@Body() userDto: CreateUserDto): Promise<User> {
        return await this.userService.create(userDto);
    }
}
