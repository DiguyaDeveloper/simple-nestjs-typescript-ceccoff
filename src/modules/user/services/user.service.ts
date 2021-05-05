import { Injectable } from '@nestjs/common';
import { CreateUserDto } from '../dto/user.dto';
import { User } from './../entities/user.entities';

@Injectable()
export class UserService {
  private readonly user: User;

  create(user: CreateUserDto): User {
    return user;
  }

  findOne(id: number): User {
    return this.user[id];
  }
}
