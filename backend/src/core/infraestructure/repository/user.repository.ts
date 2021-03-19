import { Inject, Injectable } from '@nestjs/common';
import { Model } from 'mongoose';

import { User } from '@domain/interface/user.interface';
import { CreateUserDto } from '@application/dto/user.dto';
import { USER_MODEL_PROVIDER } from '@constants/app.constants';

@Injectable()
export class UserRepository {
    constructor(@Inject(USER_MODEL_PROVIDER) private readonly userModel: Model<User>) {}

    async list(): Promise<User[]> {
        return this.userModel.find();
    }

    async findByUsername(username: string): Promise<User> {
        return this.userModel.findOne({ username: username });
    }

    async create(createUserDto: CreateUserDto): Promise<User> {
        const createdUser = new this.userModel(createUserDto);
        return createdUser.save();
    }
}
