import { Controller, Get, Post, Body } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UserController {
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto;
    await this.commandBus.execute(new CreateUserCommand(name, email));
  }

  @Get()
  async getUsers() {
    const users = await this.queryBus.execute(new GetUsersQuery());
    return users;
  }
}
