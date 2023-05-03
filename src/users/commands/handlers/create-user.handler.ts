import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UsersService } from 'src/users/users.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly usersService: UsersService) {}

  async execute(command: CreateUserCommand) {
    const { name, email } = command;
    await this.usersService.createNewUser(name, email);
  }
}
