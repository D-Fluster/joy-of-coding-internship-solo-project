// Page to View a Single To-Do:
// APP > [ID] > PAGE

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import the custom 404 error and display table (which has been extracted for separation of concerns -- i.e., to keep server calls for data apart from user inputs):
import Custom404 from "../../components/Custom404";
import DeleteOne from "../../components/DeleteOne";

// Import Prisma and Todo model for database query:
import prisma from "../../../prisma/db";

export default async function DeleteTodo({
  params,
}: {
  params: { id: number };
}) {
  const deleteThisTodo = await prisma.todo.delete({
    where: {
      id: Number(params.id),
    },
  });

  ///// Send the results of the query to the client component for on-screen rendering:
  return (
    <main>
      <DeleteOne deleteThisTodo={deleteThisTodo} />
    </main>
  );
}
