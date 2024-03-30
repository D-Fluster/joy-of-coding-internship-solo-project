///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Page to Delete an Existing To-Do:
// // APP > [ID] > DELETE > DELETE-CONFIRM > PAGE (TSX)

// NOTE: The extra pathway is purposeful to prevent accidental deletion upon URL browsing, as there is currently no confirmation modal in place and navigating to this page will automatically delete the given to-do if it exists

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import Prisma for database query:
import prisma from "../../../../prisma/db";

// Import the custom 404 error and corresponding client component (which has been extracted for separation of concerns -- i.e., to keep server calls for data apart from user inputs):
import Custom404 from "../../../not-found";
import DeleteOne from "../../../components/DeleteOne";

// Export the default function from this component for use throughout the program:
export default async function DeleteTodo({
  params,
}: {
  params: { id: number };
}) {
  // If the URL slug cannot be converted from a string to an integer, immediately redirect to the custom 404 page:
  if (isNaN(params.id)) return <Custom404 />;

  // Query Prisma to locate and delete the requested to-do based on the ID provided in the URL slug:
  const deleteThisTodo = await prisma.todo.delete({
    where: {
      id: Number(params.id),
    },
  });

  // If there is no to-do in the database with the given ID, redirect to the custom 404 page:
  if (!deleteThisTodo) return <Custom404 />;

  // Otherwise, send the results of the query to the corresponding client component for processing:
  return (
    <main>
      <DeleteOne deleteThisTodo={deleteThisTodo} />
    </main>
  );
}
