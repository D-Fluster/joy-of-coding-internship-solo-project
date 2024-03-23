import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "Please give this to-do a short title.").max(255),
  description: z.string().min(1, "Please give this to-do a description."),
});