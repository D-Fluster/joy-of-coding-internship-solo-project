// Page to Edit an Existing To-Do
// APP > [ID] > EDIT > PAGE

// Import the form, which has been extracted for separation of concerns:
import EditForm from "@/app/components/EditForm";

import prisma from "../../../prisma/db";

// Import custom fonts and DaisyUI components:
import { Sacramento, Special_Elite } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export default async function EditTodo({ params }: { params: { id: number } }) {
  // If the URL slug cannot be converted from a string to an integer, redirect to a custom 404 page:
  if (isNaN(params.id))
    // Can use either "isNaN()" or "!Number()" here
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

  return (
    <main>
      <EditForm thisTodo={thisTodo} />
    </main>
  );
}
