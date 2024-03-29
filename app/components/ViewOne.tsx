// Client Component to View a Single To-Do:
// // APP > COMPONENTS > ViewOne

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

import Link from "next/link";

// Import cusom Google Fonts for titles and buttons:
import { Sacramento, Special_Elite } from "next/font/google";
import { Todo } from "@prisma/client";

import Custom404 from "./Custom404";
import { stylizeCategories, stylizeStatuses } from "../definitions/functions";
import PageTitle from "@/app/components/PageTitle";

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

interface Props {
  thisTodo: Todo;
}

export default function ViewOne({ thisTodo }: Props) {
  // If the URL slug cannot be converted from a string to an integer, redirect to a custom 404 page:
  if (!Number(thisTodo.id)) return <Custom404 />;

  // If there is no to-do in the database with the given ID, redirect to a custom 404 page:
  if (!thisTodo) return <Custom404 />;

  const headerClasses =
    " p-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-center text-xl tracking-widest uppercase w-1/4 ";

  const bodyClasses = " text-lg ";

  const actionClasses =
    " p-5 rounded-full bg-purple-700 text-fuchsia-500 font-black text-center text-lg tracking-widest uppercase underline underline-offset-4 decoration-fuchsia-300";

  // Display details of the requested to-do based on the ID provided in the URL slug:
  return (
    <div>
      <PageTitle>✨To-Do #{thisTodo.id}💫</PageTitle>
      <table>
        <tbody>
          <tr>
            <th className={headerClasses}>Status</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              <Link href={`/status/${thisTodo.status}`}>
                {stylizeStatuses(thisTodo.status)}
              </Link>
            </td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Category</th>
            <td></td>
            <td className={bodyClasses}>
              <Link href={`/category/${thisTodo.category}`}>
                {stylizeCategories(thisTodo.category)}
              </Link>
            </td>
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
          <tr>&emsp;</tr>
          <tr>
            <th className={actionClasses}>
              <Link href={`/${thisTodo.id}/edit`}>Edit</Link>
            </th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              <Link href={`/${thisTodo.id}/edit`}>
                <td>✏️</td>
              </Link>
            </td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={actionClasses}>
              <Link href={`/${thisTodo.id}/delete`}>Delete</Link>
            </th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              <Link href={`/${thisTodo.id}/delete`}>
                <td>🗑️</td>
              </Link>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
