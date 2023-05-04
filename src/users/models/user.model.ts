import { AggregateRoot } from '@nestjs/cqrs';

export class User extends AggregateRoot {
  constructor(private name: string, private email: string) {
    super();
  }
}
