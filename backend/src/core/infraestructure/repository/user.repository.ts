import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';

import { USER_MODEL_PROVIDER } from '@constants/app.constants';
import { User } from '@domain/interface/user.interface';
import { CreateUserDto } from '@application/dto/user.dto';

@Injectable()
export class UserRepository {
    constructor(@Inject(USER_MODEL_PROVIDER) private readonly userRepository: Repository<User>) {}

    async list(): Promise<User[]> {
        return this.userRepository.find();
    }

    async findByUsername(username: string): Promise<User> {
        return await this.userRepository.findOne({ where: { username: username } });
    }

    async create(createUserDto: CreateUserDto, hashedPassword: string): Promise<User> {
        const newUser = this.userRepository.create({ ...createUserDto, password: hashedPassword });
        await this.userRepository.save(newUser);
        return newUser;
    }
}
