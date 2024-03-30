///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Client Component to View All To-Dos with a Given Status:
// // APP > COMPONENTS > ViewStat (TSX)

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import component for optimized links in NextJS:
import Link from "next/link";

// Import custom components, constants, and functions used for stylization:
import PageTitle from "@/app/components/PageTitle";
import { stylizeCategories } from "../definitions/functions";
import {
  bodyClasses,
  headerClasses,
  textLinkStyles,
} from "../definitions/constants";

// Import Prisma Todo model for TypeScript parameter clarification:
import { Todo } from "@prisma/client";

// Define the "shape" of the parameters/properties imported from the corresponding parent component:
interface Props {
  statTodos: Todo[];
  stylizedStatusTitles: string;
}

// Export the default function from this component for use throughout the program:
export default function ViewCat({ statTodos, stylizedStatusTitles }: Props) {
  return (
    <>
      <PageTitle>{stylizedStatusTitles}To-Dos💫</PageTitle>

      {/* Table to display to-dos filtered by status: */}
      <table className="border-purple-500 w-full">
        {/* Table headers: */}
        <thead>
          <tr>
            <th className={headerClasses + "max-w-sm w-1/6"}>Category</th>
            <th className={headerClasses + "max-w-lg w-1/4"}>Title</th>
            <th className={headerClasses + "max-w-xl w-1/4"}>Description</th>
            <th className={headerClasses + "max-w-sm w-1/6"}>
              Due&nbsp;<span className="text-xl">&#x25B2;</span>
            </th>
            <th className={headerClasses + "max-w-md w-1/6"}>Actions</th>
          </tr>
        </thead>

        {/* Table contents: */}
        <tbody className="border-x-[5px] border-t-0 border-b-[5px] border-solid border-purple-500 p-5">
          {/* If there is nothing to display, render an empty table with minimal styling; otherwise render the requested contents: */}
          {statTodos.length == 0 ? (
            <td className="h-14">&emsp;</td>
          ) : (
            statTodos.map((todo) => (
              <tr
                key={todo.id}
                className="border-4 border-t-0 border-double border-purple-500 p-5 m-5"
              >
                <td className={bodyClasses}>
                  <Link href={`/category/${todo.category}`}>
                    {stylizeCategories(todo.category)}
                  </Link>
                </td>
                <td className={bodyClasses}>
                  <Link href={`/${todo.id}`} className={textLinkStyles}>
                    {todo.title}
                  </Link>
                </td>
                <td className={bodyClasses}>{todo.description}</td>
                <td className={bodyClasses}>
                  {todo.dueAt.toLocaleDateString()}
                  <br />
                  {todo.dueAt.toLocaleTimeString()}
                </td>
                <td className={bodyClasses}>
                  <Link href={`/${todo.id}`} className="mr-3">
                    👀
                  </Link>
                  &nbsp;
                  <Link href={`/${todo.id}/edit`}>✏️</Link>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      {/* If there is nothing to display, render a prompt for the user to add a new to-do: */}
      {statTodos.length == 0 && (
        <p className="mt-7 text-center w-full">
          There are no to-dos with this status yet.&ensp;
          <Link href="/add" className={textLinkStyles}>
            Create one now
            <em>
              <span className="font-black">!</span>
            </em>
          </Link>
        </p>
      )}
    </>
  );
}
