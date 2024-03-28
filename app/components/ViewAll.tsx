// Client Component to View All To-Dos
// APP > COMPONENTS > ViewAll

// DKF CONSIDER USING SWAP FOR "DONE"? -- OR MAYBE A TOGGLE!
// See: https://daisyui.com/components/swap/
// And: https://daisyui.com/components/toggle/

"use client";

export const dynamic = "force-dynamic";

import Link from "next/link";
import prisma from "../../prisma/db";
import { Sacramento } from "next/font/google";
import { Todo } from "@prisma/client";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

export const getAllTodos = async () => {
  try {
    const response = await prisma.todo.findMany();
    const data = response;
    console.log("inside function:", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const allTodos: Todo[] = await getAllTodos().then();
console.log(allTodos);

export default function TodosTodos() {
  // Can try creating the row as a child component -- in the mapping, call that component and pass it the data for each row

  // const getAllTodos = async () => {
  //   try {
  //     const response = await axios.get("/api/todos");
  //     const data = response.data;
  //     console.log("inside function:", data);
  //     return data;
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // Related to how the promises are gettin resolved, likely
  // The "await" tells it to stop before it resolves the promise

  // .json() is for fetch function -- fetch receives a large object we want to use as a JSON object -- i.e., "this response is going to be a JSON file"
  // whereas in Axios, every call creates the JSON part for me -- so instead using "response.data" to remove headers & other info from response

  // const response = await axios.get("/api/todos")
  // Result of "get" function will be a HUGE object, but what I'm interested in is the JSON object with all my to-dos

  // DON'T FOREGT YOUR RETURN STATEMETNS DANIIIII
  // Can create a custom async function inside here and return the details inside this client component

  // const allTodos = await prisma.todo.findMany();

  // const deleteTodo = async (id) =>
  //   await prisma.todo.delete({
  //     where: {
  //       id: id,
  //     },
  //   });

  // const deleteTodo = await (id) => {

  // allTodos.forEach((todo) => {
  //   if (todo.category == "NONE") {
  //     const category = "🚫Uncategorized";
  //   }
  // });

  // // Update styling of categories for display in the table
  // // What's a DRYer way to do this?
  // if (todo.category == "NONE") {
  //   todo.category = "🚫Uncategorized";
  // }
  // if (params.category == "HOME") {
  //   params.category = "🏠Home";
  // }
  // if (params.category == "PERSONAL") {
  //   params.category = "💆Personal";
  // }
  // if (params.category == "SCHOOL") {
  //   params.category = "📚School";
  // }
  // if (params.category == "SOCIAL") {
  //   params.category = "👯Social";
  // }
  // if (params.category == "WORK") {
  //   params.category = "🏢Work";
  // }

  const headerClasses =
    " p-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-lg tracking-widest uppercase ";

  const bodyClasses = " p-5 text-center ";

  return (
    <>
      <div>
        <h1
          className={
            "pt-10 pb-7 text-purple-700 text-7xl text-center " +
            sacramento.className
          }
        >
          ✨All To-Dos💫
        </h1>
        <table className="border-purple-500">
          <thead>
            <tr>
              <th className={headerClasses + "max-w-xs w-1/12"}>Status</th>
              <th className={headerClasses + "max-w-xs w-1/12"}>Category</th>
              <th className={headerClasses + "max-w-lg w-1/6"}>Title</th>
              <th className={headerClasses + "max-w-xl w-1/3"}>Description</th>
              <th className={headerClasses + "max-w-sm w-1/6"}>Due</th>
              <th className={headerClasses + "max-w-md w-1/6"}>Actions</th>
            </tr>
          </thead>
          <tbody className="border-x-[5px] border-t-0 border-b-[5px] border-solid border-purple-500 p-5">
            {allTodos?.reverse().map((todo) => (
              <tr
                key={todo.id}
                className="border-4 border-t-0 border-double border-purple-500 p-5 m-5"
              >
                <td className={bodyClasses}>{todo.status.toLowerCase()}</td>
                <td className={bodyClasses}>
                  <Link href={`/category/${todo.category}`}>
                    {todo.category.toLowerCase()}
                  </Link>
                </td>
                <td className={"font-bold " + bodyClasses}>
                  <Link href={`/${todo.id}`}>{todo.title}</Link>
                </td>
                <td className={bodyClasses}>{todo.description}</td>
                <td className={bodyClasses}>
                  {todo.dueAt.toLocaleDateString()}
                  <br />
                  {todo.dueAt.toLocaleTimeString()}
                </td>
                <td className={bodyClasses}>
                  <Link href={`/${todo.id}/edit`} className="mr-5">
                    ✏️
                  </Link>
                  &nbsp;
                  {/* <button onClick={() => deleteTodo(todo.id)} className="mr-5">
                    🗑️
                  </button> */}
                  {/* But how to pass the ID to the function to delete the specific to-do we want -- if inside a mapping function, can pass todo.id */}
                  &nbsp;
                  {/* <button onClick={() => console.log("first")} className="mr-5">
                    🗑️
                  </button> */}
                  &nbsp;
                  <Link href="/">✅</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <p>
          {allTodos.map((item) => (
            <p key={item.id}>{item.title}</p>
          ))}
        </p>
        <Link href="/" className="text-5xl">
          Home
        </Link> */}
      </div>
    </>
  );
}
