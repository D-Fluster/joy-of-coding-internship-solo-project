///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Client Component to View a Single To-Do:
// // APP > COMPONENTS > ViewOne

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import component for optimized links in NextJS:
import Link from "next/link";

// Import custom components and functions used for stylization:
import PageTitle from "@/app/components/PageTitle";
import { stylizeCategories, stylizeStatuses } from "../definitions/functions";

// Import Prisma Todo model for TypeScript parameter clarification:
import { Todo } from "@prisma/client";

// Define the "shape" of the parameters/properties imported from the corresponding parent component:
interface Props {
  thisTodo: Todo;
}

// Export the default function from this component for use throughout the program:
export default function ViewOne({ thisTodo }: Props) {
  // Define constants for stylization:
  const headerClasses =
    " mb-3 px-10 py-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-center text-xl tracking-widest uppercase ";

  const bodyClasses = " text-lg text-center ";

  const actionClasses =
    " mb-3 px-10 py-5 rounded-full bg-purple-700 text-fuchsia-500 font-black text-center text-lg tracking-widest uppercase underline underline-offset-4 decoration-fuchsia-300";

  // Display details of the requested to-do based on the ID provided in the URL slug:
  return (
    <div className="items-center place-items-center">
      <PageTitle>✨To-Do #{thisTodo.id}💫</PageTitle>

      {/* Flex container for "Status" & "Category" headings & content: */}
      <div className="flex justify-evenly text-center mb-14">
        <div className="mr-3 w-full">
          <p className={headerClasses + " mr-3 w-full"}>Status</p>
          <Link href={`/status/${thisTodo.status}`} className={bodyClasses}>
            {stylizeStatuses(thisTodo.status)}
          </Link>
        </div>
        <div className="ml-3 w-full">
          <p className={headerClasses}>Category</p>
          <Link href={`/status/${thisTodo.category}`} className={bodyClasses}>
            {stylizeCategories(thisTodo.category)}
          </Link>
        </div>
      </div>

      {/* Container for "Title" headings & content: */}
      <div className="justify-center text-center mb-16 w-full">
        <p className={headerClasses + " min-w-xl"}>Title</p>
        <p className={bodyClasses + " font-bold text-neutral"}>
          {thisTodo.title}
        </p>
      </div>

      {/* Container for "Description" headings & content: */}
      <div className="justify-center text-center mb-10 w-full">
        <p className={headerClasses + " min-w-xl"}>Description</p>
        <p className={bodyClasses + " text-neutral"}>{thisTodo.description}</p>
      </div>

      {/* Flex container for date headings & content: */}
      <div className="flex justify-evenly text-center mb-10 mt-16">
        <div className="mb-3 ml-3 mr-3 ">
          <p className={headerClasses}>Added</p>
          <p className={bodyClasses}>{thisTodo.createdAt.toLocaleString()}</p>
        </div>
        <div className="mb-3 mr-4">
          <p className={headerClasses}>Due</p>
          <p className={bodyClasses + " font-black text-neutral"}>
            {thisTodo.dueAt.toLocaleString()}
          </p>
        </div>
        <div className=" mb-3 ml-6">
          <p className={headerClasses}>Updated</p>
          <p className={bodyClasses}>{thisTodo.createdAt.toLocaleString()}</p>
        </div>
      </div>

      {/* Flex container for "Edit" & "Delete" headings & actions:
      // NOTE: The links around the delete actions are slightly less generous to prevent accidental clicking */}
      <div className="flex justify-evenly text-center mb-10">
        <div className="mr-3">
          <Link href={`/${thisTodo.id}/edit`}>
            <p className={actionClasses + " mb-3 px-14"}>Edit</p>
            <p>✏️</p>
          </Link>
        </div>
        <div className="ml-3">
          <p className={actionClasses + " mb-3"}>
            <Link href={`/${thisTodo.id}/delete/confirm-delete`}>Delete</Link>
          </p>
          <p className="text-center">
            <Link href={`/${thisTodo.id}/delete/confirm-delete`}>🗑️</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
