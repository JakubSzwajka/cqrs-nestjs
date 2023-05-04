import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { UserRepository } from 'src/users/repositories/user.repository';
import { UserService } from 'src/users/user.service';
import { User } from 'src/users/models/user.model';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(
    private readonly userService: UserService,
    private readonly userRepository: UserRepository,
  ) {}

  async execute(command: CreateUserCommand) {
    const { name, email } = command;

    // we have several options here:
    // 1. we can use the repository directly
    const user = new User(name, email);
    // await this.userRepository.create(user);

    // 2. we can use the service if the logic is more complex
    await this.userService.createNewUser(name, email);

    // 3. we can use the aggregate root if we want to use events
    // and logic is in the aggregate root. Then persist it in the repository
  }
}
