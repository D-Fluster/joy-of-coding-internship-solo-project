///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Client Component to Delete an Existing To-Do:
// // APP > COMPONENTS > DeleteOne

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import routing and validation tools:
import { useRouter } from "next/navigation";

// Import Prisma Todo model for TypeScript parameter clarification:
import { Todo } from "@prisma/client";

// Define the "shape" of the parameters/properties imported from the corresponding parent component:
interface Props {
  deleteThisTodo: Todo;
}

// Export the default function from this component for use throughout the program:
export default function DeleteOne({ deleteThisTodo }: Props) {
  // Utilize the "useRouter" hook to reroute users to the "View All To-Dos" page upon successful deletion of the requested to-do based on the ID provided in the URL slug:
  const router = useRouter();
  router.push("/todos");
  return <></>;
}
