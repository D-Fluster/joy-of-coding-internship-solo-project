// Pages to View All To-Dos in a Category
// APP > CATEGORY > [CATEGORY] > PAGE

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import the display table, which has been extracted for separation of concerns (i.e., to keep server calls for data apart from user inputs):
import ViewCat from "../../components/ViewCat";

// Import Prisma and Todo model for database query:
import prisma from "../../../prisma/db";
import { Category } from "@prisma/client";
import { stylizeCategoryTitles } from "@/app/definitions/functions";

export default async function SortedTodosByCategory({
  params,
}: {
  params: { category: Category };
}) {
  // Query Prisma for all records in the databse of the given category, then reverse the order so the most recently added will appear at the top of the table:
  let sortedTodos = await prisma.todo.findMany({
    where: {
      category: params.category,
    },
  });

  const stylizedCategoryTitles = stylizeCategoryTitles(params.category);

  // Send the results of the query to the client component for on-screen rendering:
  return (
    <main>
      <ViewCat
        sortedTodos={sortedTodos}
        stylizedCategoryTitles={stylizedCategoryTitles}
      />
    </main>
  );
}
