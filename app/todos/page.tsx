///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Page to View All To-Dos:
// // APP > TODOS > PAGE (TSX)

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import Prisma and Todo model for database query and TypeScript parameter clarification, respectively:
import prisma from "../../prisma/db";
import { Todo } from "@prisma/client";

// Import the corresponding display component (which has been extracted for separation of concerns -- i.e., to keep server calls for data apart from user inputs):
import ViewAll from "../components/ViewAll";

// Export the default function from this component for use throughout the program:
export default async function TodosTodos() {
  // Query Prisma to find/"get" details of all records in the database:
  const allTodos: Todo[] = await prisma.todo.findMany(); //.reverse();

  // Sort the results of the Prisma query in ascending order starting with the earliest due date-time:
  const sortedByDueAt = allTodos.sort((a, b) =>
    a.dueAt.toISOString().localeCompare(b.dueAt.toISOString())
  );

  // Send the sorted results of the Prisma query to the corresponding client component for on-screen rendering:
  return (
    <main>
      <ViewAll allTodos={sortedByDueAt} />
    </main>
  );
}
