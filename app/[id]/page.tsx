///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Page to View a Single Existing To-Do:
// // APP > [ID] > PAGE (TSX)

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import the custom 404 error and corresponding display component (which has been extracted for separation of concerns -- i.e., to keep server calls for data apart from user inputs):
import Custom404 from "../not-found";
import ViewOne from "../components/ViewOne";

// Import Prisma for database query:
import prisma from "../../prisma/db";

// Export the default function from this component for use throughout the program:
export default async function ViewTodo({ params }: { params: { id: number } }) {
  // If the URL slug cannot be converted from a string to an integer, immediately redirect to the custom 404 page:
  if (isNaN(params.id)) return <Custom404 />;

  // Query Prisma to find/"get" details of the requested to-do based on the ID provided in the URL slug:
  const thisTodo = await prisma.todo.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // If there is no to-do in the database with the given ID, redirect to the custom 404 page:
  if (!thisTodo) return <Custom404 />;

  // Otherwise, send the results of the Prisma query to the corresponding client component for on-screen rendering:
  return (
    <main>
      <ViewOne thisTodo={thisTodo} />
    </main>
  );
}
