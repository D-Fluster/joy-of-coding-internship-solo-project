// Page to Edit an Existing To-Do:
// // APP > [ID] > EDIT > PAGE

//// Import the form, which has been extracted for separation of concerns:
import Custom404 from "../../components/Custom404";
import EditForm from "@/app/components/EditForm";

// Import Prisma for database query:
import prisma from "../../../prisma/db";

// Import custom fonts and DaisyUI components:
import { Sacramento, Special_Elite } from "next/font/google";

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

export default async function EditTodo({ params }: { params: { id: number } }) {
  // If the URL slug cannot be converted from a string to an integer, redirect to a custom 404 page:
  if (isNaN(params.id)) return <Custom404 />;

  // Utilize Prisma to find/"get" details of the requested to-do based on the ID provided in the URL slug:
  const thisTodo = await prisma.todo.findUnique({
    where: {
      id: Number(params.id),
    },
  });

  // If there is no to-do in the database with the given ID, redirect to a custom 404 page:
  if (!thisTodo) return <Custom404 />;

  return (
    <main>
      <EditForm thisTodo={thisTodo} />
    </main>
  );
}
