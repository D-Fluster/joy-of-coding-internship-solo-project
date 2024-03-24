import { z } from "zod";

export const createTodoSchema = z.object({
  title: z.string().min(1, "Please give this to-do a short title.").max(255),
  description: z.string().min(1, "Please give this to-do a description."),
  category: z.enum(["NONE", "HOME", "PERSONAL", "SCHOOL", "SOCIAL", "WORK"]).optional(),
  dueAt: z.string().transform((str) => new Date(str)).optional()
});


  // dueAt doesn't work with "z.coerce.date()" or "z.string().datetime().optional()" -- even with ".datetime({ offset: true })" -- because the returned value is [YYYY]-[MM]-[DD]T[HH:mm], which doesn't conform to any ISO datetimes for Zod
  // See: https://zod.dev/?id=dates
  // and: https://zod.dev/?id=iso-datetimes

// z.string().transform((value) => new Date(value)).transform((newValue) => new String(newValue.toISOString()))
// Error (Unhandled Runtime Error): RangeError: Invalid time value                             ^

// const datetimeLocalInput = document.querySelector('input[type="datetime-local"]');
// const datetimeLocalValue = datetimeLocalInput.value;

// // Parse the value into a Date object.
// const date = new Date(datetimeLocalValue);

// // Convert the Date object to an ISO datetime string.
// const isoDatetime = date.toISOString();