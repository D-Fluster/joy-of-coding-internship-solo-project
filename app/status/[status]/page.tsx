// Pages to View All To-Dos in a Status
// APP > STATUS > [STATUS] > PAGE

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import the display table, which has been extracted for separation of concerns (i.e., to keep server calls for data apart from user inputs):
import ViewStat from "../../components/ViewStat";

// Import Prisma and Todo model for database query:
import prisma from "../../../prisma/db";
import { Status } from "@prisma/client";
import { stylizeStatusTitles } from "../../definitions/functions";

export default async function SortedTodosByStatus({
  params,
}: {
  params: { status: Status };
}) {
  // Query Prisma for all records in the databse of the given status, then reverse the order so the most recently added will appear at the top of the table:
  let sortedTodos = await prisma.todo.findMany({
    where: {
      status: params.status,
    },
  });

  const stylizedStatusTitles = stylizeStatusTitles(params.status);

  // Send the results of the query to the client component for on-screen rendering:
  return (
    <main>
      <ViewStat
        sortedTodos={sortedTodos}
        stylizedStatusTitles={stylizedStatusTitles}
      />
    </main>
  );
}
