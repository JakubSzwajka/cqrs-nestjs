import { Module } from '@nestjs/common';
import { CqrsModule } from '@nestjs/cqrs';
import { CreateUserHandler } from './commands/handlers/create-user.handler';
import { GetUsersHandler } from './queries/handlers/get-users.handler';
import { UserController } from './user.controller';
import { PrismaService } from 'src/prisma.service';

@Module({
  imports: [CqrsModule],
  providers: [PrismaService, CreateUserHandler, GetUsersHandler],
  controllers: [UserController],
})
export class UsersModule {}
