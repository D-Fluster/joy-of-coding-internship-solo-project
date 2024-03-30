///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Define and export Zod validation schemas for use throughout the program:
// // APP > ValidationSchemas (TS)

// NOTE: Because of the way deletions are handled  
//While these are fully functional per Postman, currently only "PUT" is actually utilized in this program

// Import validation tools:
import { z } from "zod";

// Validation for adding new to-dos to the database:
export const createTodoSchema = z.object({
  title: z.string().min(1, "Please give this to-do a short title.").max(255),
  description: z.string().min(1, "Please give this to-do a description."),
  dueAt: z.string().nonempty("Please give this to-do a due date.").transform((str) => new Date(str)),
  category: z.enum(["NONE", "HOME", "PERSONAL", "SCHOOL", "SOCIAL", "WORK"]).optional()
});

// Validation for updating existing to-dos in the database:
export const editTodoSchema = z.object({
  title: z.string().min(1, "Please give this to-do a short title.").max(255),
  description: z.string().min(1, "Please give this to-do a description."),
  dueAt: z.string().nonempty("Please give this to-do a due date.").transform((str) => new Date(str)),
  category: z.enum(["NONE", "HOME", "PERSONAL", "SCHOOL", "SOCIAL", "WORK"]).optional(),
  status: z.enum(["TO_DO", "DONE"]).optional(),
});

// Validation for deleting an existing to-do from the database:
export const deleteTodoSchema = z.object({
  id: z.number().min(1, "Please enter a valid to-do ID.")
});
