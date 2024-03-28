// Page to View All To-Dos:
// // APP > TODOS > PAGE

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import the display table, which has been extracted for separation of concerns (i.e., to keep server calls for data apart from user inputs):
import ViewAll from "../components/ViewAll";

// Import Prisma and Todo model for database query:
import prisma from "../../prisma/db";
import { Todo } from "@prisma/client";

export default async function TodosTodos() {
  // Query Prisma for all records in the databse, then reverse the order so the most recently added will appear at the top of the table:
  const allTodos: Todo[] = (await prisma.todo.findMany()).reverse();

  // Send the results of the query to the client component for on-screen rendering:
  return (
    <main>
      <ViewAll allTodos={allTodos} />
    </main>
  );
}
