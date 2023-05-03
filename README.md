# Nest.js CQRS Example with Prisma

This project demonstrates how to implement the CQRS pattern in a Nest.js application using Prisma for database access.


## Requirements
- Node.js 18.x or later
- Yarn package manager
- A supported database (e.g., PostgreSQL, MySQL, SQLite)

## Setup

1. Install dependencies:
```
yarn install
```

2. Set up the database:

Update the datasource block in the prisma/schema.prisma file with the appropriate database provider and connection string.

3. Run the database migration:
```
yarn prisma migrate dev --name init
```

4. Start the Nest.js application:

```
yarn start
```


## Usage

The application provides two endpoints:

1. Create a user:
```bash
curl -X POST -H "Content-Type: application/json" -d '{"name": "John Doe", "email": "john.doe@example.com"}' http://localhost:3000/users
```
Replace "John Doe" and "john.doe@example.com" with the desired name and email, respectively.

2. Get users:
Visit `http://localhost:3000/users` in your browser or use cURL:

```bash
curl -X GET http://localhost:3000/users
```
You can adapt the README to your specific requirements, but this should give you a good starting point.
