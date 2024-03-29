// Client Component to View All To-Dos in a Category:
// // APP > COMPONENTS > ViewCat

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

import Link from "next/link";

///////// Import to resolve TypeScript error in Prisma call (because "params.category" is of type "string", while the database's "Category" is of type "enum | undefined"):
import { Todo } from "@prisma/client";

import PageTitle from "@/app/components/PageTitle";

// Import cusom Google Font for titles:
import { Sacramento } from "next/font/google";

// Title font:
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

import {
  stylizeStatusTitles,
  stylizeCategories,
} from "../definitions/functions";

// DKF DO THIS THROUGHOUT FOR DRYNESSS OMGGGG
import { textLinkStyles } from "../definitions/constants";

interface Props {
  sortedTodos: Todo[];
  stylizedStatusTitles: string;
}

export default function ViewCat({ sortedTodos, stylizedStatusTitles }: Props) {
  const headerClasses =
    " p-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-lg tracking-widest uppercase ";

  const bodyClasses = " p-5 text-center ";

  return (
    <>
      <PageTitle>{stylizedStatusTitles}To-Dos💫</PageTitle>
      <table className="border-purple-500 w-full">
        <thead>
          <tr>
            <th className={headerClasses + "max-w-sm w-1/6"}>Category</th>
            <th className={headerClasses + "max-w-lg w-1/4"}>Title</th>
            <th className={headerClasses + "max-w-xl w-1/4"}>Description</th>
            <th className={headerClasses + "max-w-sm w-1/6"}>Due</th>
            <th className={headerClasses + "max-w-md w-1/6"}>Actions</th>
          </tr>
        </thead>
        <tbody className="border-x-[5px] border-t-0 border-b-[5px] border-solid border-purple-500 p-5">
          {sortedTodos.length == 0 ? (
            <td>&emsp;</td>
          ) : (
            sortedTodos.reverse().map((todo) => (
              <tr
                key={todo.id}
                className="border-4 border-t-0 border-double border-purple-500 p-5 m-5"
              >
                <td className={bodyClasses}>
                  <Link href={`/category/${todo.category}`}>
                    {stylizeCategories(todo.category)}
                  </Link>
                </td>
                <td className={"font-bold " + bodyClasses}>
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

      {sortedTodos.length == 0 && (
        <p className="mt-7 text-center w-full">
          There are no to-dos with this status yet.&ensp;
          <Link
            href="/add"
            className="underline underline-offset-4 decoration-teal-500"
          >
            Create one now
            <em>
              <strong>!</strong>
            </em>
          </Link>
        </p>
      )}
    </>
  );
}
