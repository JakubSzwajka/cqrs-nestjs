import { Controller, Get, Post, Body, Logger, UsePipes } from '@nestjs/common';
import { CommandBus, QueryBus } from '@nestjs/cqrs';
import { CreateUserCommand } from './commands/create-user.command';
import { GetUsersQuery } from './queries/get-users.query';
import { CreateUserDto } from './dto/create-user.dto';
import { ZodValidationPipe } from 'nestjs-zod';

@Controller('users')
export class UserController {
  private readonly logger = new Logger(UserController.name);
  constructor(
    private readonly commandBus: CommandBus,
    private readonly queryBus: QueryBus,
  ) {}

  @Post()
  @UsePipes(ZodValidationPipe)
  async createUser(@Body() createUserDto: CreateUserDto) {
    const { name, email } = createUserDto; // ??? do we have some kind of validation here?
    this.logger.log('We have passed DTO: ', name, email);
    await this.commandBus.execute(new CreateUserCommand(name, email));
  }

  @Get()
  async getUsers() {
    const users = await this.queryBus.execute(new GetUsersQuery());
    return users;
  }
}
