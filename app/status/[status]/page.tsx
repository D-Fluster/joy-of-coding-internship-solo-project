///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Pages to View All To-Dos with a Given Status:
// // APP > STATUS > [STATUS] > PAGE (TSX)

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import Prisma and Category model for database query and TypeScript parameter clarification, respectively:
import prisma from "../../../prisma/db";
import { Status } from "@prisma/client";

// Import the custom 404 error and corresponding display component (which has been extracted for separation of concerns -- i.e., to keep server calls for data apart from user inputs):
import Custom404 from "../../not-found";
import ViewStat from "../../components/ViewStat";

// Import custom function to stylize page titles:
import { stylizeStatusTitles } from "../../definitions/functions";

// Export the default function from this component for use throughout the program:
export default async function SortedByStatus({
  params,
}: {
  params: { status: Status };
}) {
  // If the URL slug is not among the enum of Category options, immediately redirect to the custom 404 page:
  if (!(params.status in Status)) return <Custom404 />;

  // Query Prisma to find/"get" details of all records in the databse with the given status:
  let statTodos = await prisma.todo.findMany({
    where: {
      status: params.status,
    },
  });

  // Sort the results of the Prisma query in ascending order starting with the earliest due datetime:
  const statTodosSortedByDueAt = statTodos.sort((a, b) =>
    a.dueAt.toISOString().localeCompare(b.dueAt.toISOString())
  );

  // Stylize the page titles:
  const stylizedStatusTitles = stylizeStatusTitles(params.status);

  // Send the sorted results of the Prisma query as well as the stylized page title to the corresponding client component for on-screen rendering:
  return (
    <main>
      <ViewStat
        statTodos={statTodosSortedByDueAt}
        stylizedStatusTitles={stylizedStatusTitles}
      />
    </main>
  );
}
