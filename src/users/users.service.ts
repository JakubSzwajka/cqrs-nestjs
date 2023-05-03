import { Injectable } from '@nestjs/common';
import { UsersRepository } from './repositories/users.repository';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UsersRepository) {}

  async createNewUser(name: string, email: string) {
    return await this.usersRepository.create(name, email);
  }
}
