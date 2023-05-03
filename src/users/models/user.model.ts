import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  constructor(private id: string, private email: string) {
    super();
  }
}
