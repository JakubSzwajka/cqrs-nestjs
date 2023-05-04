import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { UserController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { UserService } from './user.service';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [CqrsModule],
  providers: [
    PrismaService,
    UserService,
    UserRepository,
    CreateUserHandler,
    GetUsersHandler,
  ],
  controllers: [UserController],
})
export class UsersModule {}
