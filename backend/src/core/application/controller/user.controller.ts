import { Body, Controller, Get, Post } from '@nestjs/common';

import { UserService } from '@domain/service/user.service';
import { User } from '@domain/interface/user.interface';
import { CreateUserDto } from '@application/dto/user.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get('list')
    async list(): Promise<User[]> {
        return await this.userService.list();
    }

    @Post('create')
    async create(@Body() userDto: CreateUserDto): Promise<User> {
        return await this.userService.create(userDto);
    }
}
