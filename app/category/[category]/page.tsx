///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Pages to View All To-Dos with a Given Category:
// // APP > CATEGORY > [CATEGORY] > PAGE (TSX)

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import Prisma and Category model for database query and TypeScript parameter clarification, respectively:
import prisma from "../../../prisma/db";
import { Category } from "@prisma/client";

// Import the custom 404 error and corresponding display component (which has been extracted for separation of concerns -- i.e., to keep server calls for data apart from user inputs):
import Custom404 from "../../not-found";
import ViewCat from "../../components/ViewCat";

// Import custom function to stylize page titles:
import { stylizeCategoryTitles } from "@/app/definitions/functions";

/*
  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/todos", data);
      router.push("/todos");
    } catch (error) {
      setSubmitting(false);
      setError("OOPS! An unexpected error occurred. Please try again.");
    }
  });
*/

// Export the default function from this component for use throughout the program:
export default async function SortedByCategory({
  params,
}: {
  params: { category: Category };
}) {
  // If the URL slug is not among the enum of Category options, immediately redirect to the custom 404 page:
  if (!(params.category in Category)) return <Custom404 />;

  // Query Prisma to find/"get" details of all records in the databse with the given category:
  let catTodos = await prisma.todo.findMany({
    where: {
      category: params.category,
    },
  });

  // Sort the results of the Prisma query in ascending order starting with the earliest due date-time:
  const catTodosSortedByDueAt = catTodos.sort((a, b) =>
    a.dueAt.toISOString().localeCompare(b.dueAt.toISOString())
  );

  // Stylize the page titles:
  const stylizedCategoryTitles = stylizeCategoryTitles(params.category);

  // Send the sorted results of the Prisma query as well as the stylized page title to the corresponding client component for on-screen rendering:
  return (
    <main>
      <ViewCat
        catTodos={catTodosSortedByDueAt}
        stylizedCategoryTitles={stylizedCategoryTitles}
      />
    </main>
  );
}
