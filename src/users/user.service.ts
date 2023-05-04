import { Injectable } from '@nestjs/common';
import { User } from './models/user.model';

@Injectable()
export class UserService {
  async createNewUser(name: string, email: string): Promise<User> {
    return new User(name, email);
  }
}
