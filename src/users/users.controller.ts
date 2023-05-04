import { Controller, Get, Post, Body, Logger } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';
import { CreateUserDto } from './dto/create-user.dto';
import { GetUserDto } from './dto/get-user.dto';
import { ZodSerializerDto } from 'nestjs-zod';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto; // Zod DTO makes sure that the body is valid
    await this.commandBus.execute(new CreateUserCommand(name, email));
  }

  @Get()
  @ZodSerializerDto(GetUserDto)
  async getUsers() {
    const users = await this.queryBus.execute(new GetUsersQuery());
    return users;
  }
}
