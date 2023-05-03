export class NewUserCreatedEvent {
  constructor(public readonly id: string, public readonly email: string) {}
}
