import { createZodDto } from 'nestjs-zod';
import { z } from 'nestjs-zod/z';

const UserSchema = z.object({
  email: z.string().email(),
});

export class GetUserDto extends createZodDto(UserSchema) {}
