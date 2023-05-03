import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { UserController } from './users.controller';
import { PrismaService } from 'src/prisma.service';
import { UsersService } from './users.service';
import { UsersRepository } from './repositories/users.repository';

@Module({
  imports: [CqrsModule],
  providers: [
    PrismaService,
    UsersService,
    UsersRepository,
    CreateUserHandler,
    GetUsersHandler,
  ],
  controllers: [UserController],
})
export class UsersModule {}
