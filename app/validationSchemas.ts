import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "Please give this to-do a short title.").max(255),
  description: z.string().min(1, "Please give this to-do a description."),
  dueAt: z.string().nonempty("Please give this to-do a due date.").transform((str) => new Date(str)),
  category: z.enum(["NONE", "HOME", "PERSONAL", "SCHOOL", "SOCIAL", "WORK"]).optional()
});

export const editTodoSchema = z.object({
  id: z.string(),
  title: z.string().min(1, "Please give this to-do a short title.").max(255),
  description: z.string().min(1, "Please give this to-do a description."),
  dueAt: z.string().nonempty("Please give this to-do a due date.").transform((str) => new Date(str)),
  category: z.enum(["NONE", "HOME", "PERSONAL", "SCHOOL", "SOCIAL", "WORK"]).optional(),
  status: z.enum(["TO_DO", "DONE"]).optional(),
});


export const deleteTodoSchema = z.object({
  id: z.number().min(1, "Please enter a valid to-do ID.")
});
