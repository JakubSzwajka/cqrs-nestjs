import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from '../get-users.query';
import { PrismaService } from 'src/prisma.service';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  constructor(private readonly prisma: PrismaService) {}

  async execute(query: GetUsersQuery) {
    const users = await this.prisma.user.findMany();
    return users;
  }
}
