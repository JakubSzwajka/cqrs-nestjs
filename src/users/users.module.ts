import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { UserController } from './user.controller';

@Module({
  imports: [CqrsModule],
  providers: [CreateUserHandler, GetUsersHandler],
  controllers: [UserController],
})
export class UsersModule {}
