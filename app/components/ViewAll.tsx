///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Client Component to View All To-Dos:
// // APP > COMPONENTS > ViewAll (TSX)

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import component for optimized links in NextJS:
import Link from "next/link";

// Import custom components, constants, and functions used for stylization:
import PageTitle from "@/app/components/PageTitle";
import { stylizeCategories, stylizeStatuses } from "../definitions/functions";
import {
  bodyClasses,
  headerClasses,
  textLinkStyles,
} from "../definitions/constants";

// Import Prisma Todo model for TypeScript parameter clarification:
import { Todo } from "@prisma/client";

// Define the "shape" of the parameters/properties imported from the corresponding parent component:
interface Props {
  allTodos: Todo[];
}

// Export the default function from this component for use throughout the program:
export default function ViewAll({ allTodos }: Props) {
  return (
    <>
      <div>
        <PageTitle>✨All To-Dos💫</PageTitle>

        {/* Table to display all to-dos: */}
        <table className="border-purple-500">
          {/* Table headers: */}
          <thead>
            <tr>
              <th className={headerClasses + "max-w-sm w-1/6"}>Status</th>
              <th className={headerClasses + "max-w-md w-1/6"}>Category</th>
              <th className={headerClasses + "max-w-lg w-1/6"}>Title</th>
              <th className={headerClasses + "max-w-xl w-1/4"}>Description</th>
              <th className={headerClasses + "max-w-sm w-1/6"}>
                Due&nbsp;<span className="text-xl">&#x25B2;</span>
              </th>
              <th className={headerClasses + "max-w-xs w-1/12"}>Actions</th>
            </tr>
          </thead>

          {/* Table contents: */}
          <tbody className="border-x-[5px] border-t-0 border-b-[5px] border-solid border-purple-500 p-5">
            {/* If there is nothing to display, render an empty table with minimal styling; otherwise render the requested contents: */}
            {allTodos.length == 0 ? (
              <td className="h-14">&emsp;</td>
            ) : (
              allTodos.map((todo) => (
                <tr
                  key={todo.id}
                  className="border-4 border-t-0 border-double border-purple-500 p-5 m-5"
                >
                  <td className={bodyClasses}>
                    <Link href={`/status/${todo.status}`}>
                      {stylizeStatuses(todo.status)}
                    </Link>
                  </td>
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
        {allTodos.length == 0 && (
          <p className="mt-7 text-center w-full">
            You haven&rsquo;t added any to-dos yet.&ensp;
            <Link href="/add" className={textLinkStyles}>
              Create one now
              <em>
                <span className="font-black">!</span>
              </em>
            </Link>
          </p>
        )}
      </div>
    </>
  );
}
