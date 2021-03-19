import { Injectable } from '@nestjs/common';

import { UserRepository } from '@infraestructure/repository/user.repository';
import { User } from '@domain/interface/user.interface';
import { CreateUserDto } from '@application/dto/user.dto';

@Injectable()
export class UserService {
    constructor(private readonly userRepository: UserRepository) {}

    async list(): Promise<User[]> {
        return await this.userRepository.list();
    }

    async findByUsername(username: string): Promise<User> {
        return await this.userRepository.findByUsername(username);
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        return await this.userRepository.create(createUserDto);
    }
}
