import { z } from 'nestjs-zod/z';
import { createZodDto } from 'nestjs-zod';

const CreateUserSchema = z.object({
  name: z.string(),
  email: z.string().email(),
});

export class CreateUserDto extends createZodDto(CreateUserSchema) {}
