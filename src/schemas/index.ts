import { z } from 'zod';

export const todoSchema = z.object({
  todoName: z.string().min(1, 'Todo name is required'),
  todoDescription: z.string().min(1, 'Todo description is required'),
  status: z.boolean().default(false),
});
