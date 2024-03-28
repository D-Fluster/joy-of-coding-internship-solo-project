// Page to View a Single To-Do:
// APP > [ID] > PAGE

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import the custom 404 error and display table (which has been extracted for separation of concerns -- i.e., to keep server calls for data apart from user inputs):
import Custom404 from "../components/Custom404";
import ViewOne from "../components/ViewOne";

// Import Prisma and Todo model for database query:
import prisma from "../../prisma/db";

export default async function ViewTodo({ params }: { params: { id: number } }) {
  // If the URL slug cannot be converted from a string to an integer, redirect to a custom 404 page:
  if (isNaN(params.id)) return <Custom404 />;

  // Utilize Prisma to find/"get" details of the requested to-do based on the ID provided in the URL slug:
  const thisTodo = await prisma.todo.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // If there is no to-do in the database with the given ID, redirect to a custom 404 page:
  if (!thisTodo) return <Custom404 />;

  // Send the results of the query to the client component for on-screen rendering:
  return (
    <main>
      <ViewOne thisTodo={thisTodo} />
    </main>
  );
}
