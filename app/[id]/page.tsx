import Link from "next/link";

// Import Prisma for database query:
import prisma from "../../prisma/db";

// Import cusom Google Fonts for titles and buttons:
import { Sacramento, Special_Elite, Truculenta } from "next/font/google";

// Title font:
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

// Button font:
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export default async function ViewTodo({ params }: { params: { id: number } }) {
  // If the URL slug cannot be converted from a string to an integer, redirect to a custom 404 page:
  if (!Number(params.id))
    return (
      <>
        <h1
          className={
            "pt-10 pb-5 text-purple-700 text-7xl text-center " +
            sacramento.className
          }
        >
          ✨Error: 404💫
        </h1>
        <div
          className={
            "pt-10 pb-5 text-5xl text-center " + specialElite.className
          }
        >
          <p className="mb-5">
            ⚠️&nbsp;
            <strong>
              OOPS<em>!</em>
            </strong>
            &nbsp;⚠️
          </p>
          <p>The page you requested doesn&rsquo;t seem to exist</p>
        </div>
      </>
    );

  // Utilize Prisma to find/"get" details of the requested to-do based on the ID provided in the URL slug:
  const thisTodo = await prisma.todo.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // If there is no to-do in the database with the given ID, redirect to a custom 404 page:
  if (!thisTodo)
    return (
      <>
        <h1
          className={
            "pt-10 pb-5 text-purple-700 text-7xl text-center " +
            sacramento.className
          }
        >
          ✨Error: 404💫
        </h1>
        <div
          className={
            "pt-10 pb-5 text-5xl text-center " + specialElite.className
          }
        >
          <p className="mb-5">
            ⚠️&nbsp;
            <strong>
              OOPS<em>!</em>
            </strong>
            &nbsp;⚠️
          </p>
          <p>The page you requested doesn&rsquo;t seem to exist</p>
        </div>
      </>
    );

  const headerClasses =
    " p-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-center text-lg tracking-widest uppercase w-1/4 ";

  const bodyClasses = " ";

  const actionClasses = " w-1/3 ";

  // const separatorClasses = " min-h-10 ";

  // Display details of the requested to-do based on the ID provided in the URL slug:
  return (
    <div>
      <h1
        className={
          "pt-14 pb-12 text-purple-700 text-7xl text-center " +
          sacramento.className
        }
      >
        ✨To-Do #{params.id}💫
      </h1>
      <table>
        <tbody>
          <tr>
            <th className={headerClasses}>Status</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>{thisTodo.status.toLowerCase()}</td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Category</th>
            <td></td>
            <td className={bodyClasses}>{thisTodo.category.toLowerCase()}</td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Title</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              <strong>{thisTodo.title}</strong>
            </td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Description</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>{thisTodo.description}</td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Due Date</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              {thisTodo.dueAt.toLocaleDateString()}
            </td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Due Time</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              {thisTodo.dueAt.toLocaleTimeString()}
            </td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Added</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              {thisTodo.createdAt.toLocaleString()}
            </td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Last Updated</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              {thisTodo.createdAt.toLocaleString()}
            </td>
          </tr>
        </tbody>
      </table>
      <table className="mt-14 min-w-full text-center">
        <thead>
          <tr>
            <Link href={`/${thisTodo.id}/edit`}>
              <th className={headerClasses + actionClasses}>Edit</th>
            </Link>
            <th>&emsp;</th>
            <Link href={`/`}>
              <th className={headerClasses + actionClasses}>Delete</th>
            </Link>
            <th>&emsp;</th>
            <Link href={`/`}>
              <th className={headerClasses + actionClasses}>Toggle Complete</th>{" "}
            </Link>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <Link href={`/${thisTodo.id}/edit`}>
              <td>✏️</td>
            </Link>
            <td>&emsp;</td>
            <Link href={`/`}>
              <td>🗑️</td>
            </Link>
            <td>&emsp;</td>
            <Link href={`/`}>
              <td>✅</td>
            </Link>
          </tr>
        </thead>
      </table>
    </div>
  );
}

/*
// // How to send users to 404 page for non-Int IDs?
// if (!params.id) return "Nothing to see here!";

  <tr>
    <th className={headerClasses}>Header</th>
    <td>&emsp;</td>
    <td className={bodyClasses}>Details {thisTodo.description}</td>
  </tr>
  <tr>&emsp;</tr>

  <ul>
    <li>Status: {thisTodo.status.toLowerCase()}</li>
    <li>Category: {thisTodo.category.toLowerCase()}</li>
    <li>Title: {thisTodo.title}</li>
    <li>Description: {thisTodo.description}</li>
    <li>Due Date: {thisTodo.dueAt.toLocaleDateString()}</li>
    <li>Due Time: {thisTodo.dueAt.toLocaleTimeString()}</li>
    <li>Added: {thisTodo.createdAt.toLocaleString()}</li>
    <li>Last Updated: {thisTodo.createdAt.toLocaleString()}</li>
  </ul>
*/

/*
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
*/
