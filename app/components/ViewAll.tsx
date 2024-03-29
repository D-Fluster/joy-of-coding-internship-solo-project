// Client Component to View All To-Dos:
// // APP > COMPONENTS > ViewAll

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

import { stylizeCategories, stylizeStatuses } from "../definitions/functions";

import PageTitle from "@/app/components/PageTitle";

import Link from "next/link";
import { Sacramento } from "next/font/google";
import { Todo } from "@prisma/client";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

const textLinkStyles = " underline underline-offset-4 decoration-teal-500 ";

interface Props {
  allTodos: Todo[];
}

export default function ViewAll({ allTodos }: Props) {
  const headerClasses =
    " p-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-lg tracking-widest uppercase ";

  const bodyClasses = " p-5 text-center ";

  console.log(allTodos);
  // datetime object
  // one of the built-in sort methods is destructive --> toSorted copies and is not destructive

  return (
    <>
      <div>
        <PageTitle>✨All To-Dos💫</PageTitle>
        <table className="border-purple-500">
          <thead>
            <tr>
              <th className={headerClasses + "max-w-sm w-1/6"}>Status</th>
              <th className={headerClasses + "max-w-md w-1/6"}>Category</th>
              <th className={headerClasses + "max-w-lg w-1/6"}>Title</th>
              <th className={headerClasses + "max-w-xl w-1/4"}>Description</th>
              <th className={headerClasses + "max-w-sm w-1/6"}>Due</th>
              <th className={headerClasses + "max-w-xs w-1/12"}>Actions</th>
            </tr>
          </thead>
          <tbody className="border-x-[5px] border-t-0 border-b-[5px] border-solid border-purple-500 p-5">
            {allTodos.length == 0 ? (
              <td>&emsp;</td>
            ) : (
              allTodos.reverse().map((todo) => (
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

        {allTodos.length == 0 && (
          <p className="mt-7 text-center w-full">
            There are no to-dos yet.&ensp;
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
      </div>
    </>
  );
}
