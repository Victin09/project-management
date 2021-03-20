import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { User } from '@domain/interface/user.interface';
import { CreateUserDto } from '@application/dto/user.dto';
import { UserRepository } from '@infraestructure/repository/user.repository';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async list(): Promise<User[]> {
        return this.userRepository.list();
    }

    async findByUsername(username: string): Promise<User> {
        return this.userRepository.findByUsername(username);
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const hashedPassword = await bcrypt.hash(createUserDto.password, 10);
        return this.userRepository.create(createUserDto, hashedPassword);
    }
}
