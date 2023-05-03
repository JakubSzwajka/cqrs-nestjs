import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';

@Injectable()
export class UsersRepository {
  constructor(private readonly prisma: PrismaService) {}

  async create(name: string, email: string) {
    return await this.prisma.user.create({
      data: {
        name,
        email,
      },
    });
  }
}
