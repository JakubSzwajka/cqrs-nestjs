import { QueryHandler, IQueryHandler } from '@nestjs/cqrs';
import { GetUsersQuery } from '../get-users.query';

@QueryHandler(GetUsersQuery)
export class GetUsersHandler implements IQueryHandler<GetUsersQuery> {
  async execute(query: GetUsersQuery) {
    // logic to get users from the database
    console.log('GetUsersHandler.execute()');
    return [];
  }
}
