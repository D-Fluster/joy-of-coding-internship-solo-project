// Client Component to Delete a Single To-Do:
// // APP > COMPONENTS > DeleteOne

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
  deleteThisTodo: Todo;
}

export default function ViewOne({ deleteThisTodo }: Props) {
  const router = useRouter();

  router.push("/todos");

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
  return <></>;
}
