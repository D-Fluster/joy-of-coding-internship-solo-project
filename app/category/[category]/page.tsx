import Link from "next/link";
import prisma from "../../../prisma/db";
import { Sacramento, Special_Elite, Truculenta } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export default async function SortedTodos({
  params,
}: {
  params: { category: string };
}) {
  // const category = params.category;

  const sortedTodos = await prisma.todo.findMany({
    where: {
      category: params.category,
    },
  });

  const headerClasses =
    " p-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-lg tracking-widest uppercase ";

  const bodyClasses = " p-5 text-center ";

  return (
    <>
      <div className="items-center place-items-center">
        <h1
          className={
            "pt-10 pb-7 text-purple-700 text-7xl text-center " +
            sacramento.className
          }
        >
          ✨{params.category.toLowerCase()} To-Dos💫
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
            {sortedTodos.reverse().map((todo) => (
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
                  <Link href={`/`} className="mr-5">
                    🗑️
                  </Link>
                  &nbsp;
                  <Link href="/">✅</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {/* <div className="p-20 items-center place-items-center snap-center place-content-center self-center origin-center object-center justify-center content-center bg-center justify-self-center">
          <Link
            href="/todos"
            className="btn btn-secondary self-center pl-7 pr-7 uppercase"
          >
            <span className={specialElite.className}>Back to All To-Dos</span>
          </Link>
        </div> */}
      </div>
    </>
  );
}

/* FROM NEXT.JS DASHBOARD APP:
export default async function Page({ params }: { params: { id: string } }) {
  const id = params.id;

  const [invoice, customers] = await Promise.all([
    fetchInvoiceById(id),
    fetchCustomers(),
  ]);
*/
