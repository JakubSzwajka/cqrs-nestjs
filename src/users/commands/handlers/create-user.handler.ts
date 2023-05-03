import { CommandHandler, ICommandHandler } from '@nestjs/cqrs';
import { CreateUserCommand } from '../create-user.command';
import { PrismaService } from 'src/prisma.service';

@CommandHandler(CreateUserCommand)
export class CreateUserHandler implements ICommandHandler<CreateUserCommand> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(command: CreateUserCommand) {
    const { name, email } = command;
    await this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }
}
