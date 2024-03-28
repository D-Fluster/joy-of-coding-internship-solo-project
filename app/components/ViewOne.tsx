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

// import DELETE from "../../app/definitions/functions"

import { DELETE } from "../api/todos/[id]/route";

///// Import all tools necessary for routing and validation:
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

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

  // const separatorClasses = " min-h-10 ";

  // const router = useRouter();

  // const [error, setError] = useState("");

  // const deleteOnClick = DELETE(async ({params}: {thisTodo.id}) => {
  //   console.log(thisTodo.id);
  //   try {
  //     await axios.delete(`/api/todos/${thisTodo.id}`);
  //     router.push("/todos");
  //   } catch (error) {
  //     console.error(error);
  //     setError("OOPS! An unexpected error occurred. Please try again.");
  //   }
  // });

  // const router = useRouter();

  // const [error, setError] = useState("");

  // const deleteOnClick = DELETE((thisTodo.id) => {
  //   console.log(thisTodo.id);
  //   try {
  //     await axios.delete(`/api/todos/${thisTodo.id}`);
  //     router.push("/todos");
  //   } catch (error) {
  //     console.error(error);
  //     setError("OOPS! An unexpected error occurred. Please try again.");
  //   }
  // });

  /*
onClick={(thisTodo.id) => (DELETE(thisTodo.id))

const onSubmit = handleSubmit(async (newData) => {
    console.log(newData);
    try {
      console.log(newData);
      setSubmitting(true);
      await axios.put(`/api/todos/${thisTodo.id}`, newData);
      router.push(`/${id}`);
    } catch (error) {
      console.error(error);
      setSubmitting(false);
      setError("OOPS! An unexpected error occurred. Please try again.");
    }
  });
  */

  // Display details of the requested to-do based on the ID provided in the URL slug:
  return (
    <div>
      <h1
        className={
          "pt-14 pb-12 text-purple-700 text-7xl text-center " +
          sacramento.className
        }
      >
        ✨To-Do #{thisTodo.id}💫
      </h1>
      <table>
        <tbody>
          <tr>
            <th className={headerClasses}>Status</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>{stylizeStatuses(thisTodo.status)}</td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={headerClasses}>Category</th>
            <td></td>
            <td className={bodyClasses}>
              {stylizeCategories(thisTodo.category)}
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
            <th className={actionClasses}>Edit</th>
            <td>&emsp;</td>
            <td className={bodyClasses}>
              <Link href={`/${thisTodo.id}/edit`}>
                <td>✏️</td>
              </Link>
            </td>
          </tr>
          <tr>&emsp;</tr>
          <tr>
            <th className={actionClasses}>Delete</th>
            <td>&emsp;</td>
            <td
              className={bodyClasses}
              // onClick={() => deleteOnClick(thisTodo.id)}
            >
              🗑️
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
