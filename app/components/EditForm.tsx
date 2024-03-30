///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Client Component to Edit an Existing To-Do:
// // APP > COMPONENTS > EditForm

// Make this form a client component because it will take user input:
"use client";

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = "force-dynamic";

// Import routing and validation tools:
import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { editTodoSchema } from "@/app/validationSchemas";

// Import Prisma Todo model for TypeScript parameter clarification:
import { Todo } from "@prisma/client";

// Import custom and DaisyUI components to render page titles, error messages, and the form itself:
import PageTitle from "@/app/components/PageTitle";
import { Alert, Form } from "react-daisyui";

// Import Google font for the submit button:
import { Special_Elite } from "next/font/google";
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

// Define the "shape" of this form interface using a custom Zod schema:
type EditTodoForm = z.infer<typeof editTodoSchema>;

// Define the "shape" of the parameters/properties imported from the corresponding parent component:
interface Props {
  thisTodo: Todo;
}

// Export the default function from this component for use throughout the program:
export default function EditForm({ thisTodo }: Props) {
  // Destructure the imported to-do object for easier display and transformation handling:
  const { id, title, description, category, status, dueAt } = thisTodo;

  // Destructure the dueAt object for restructuring into "[YYYY]-[MM]-[DD]T[HH]:[mm]" format in local time; otherwise (i.e., just using "dueAt.toISOString().split("Z")[0];") the "Due" field will auto-populate with the date-time in UTC:
  const dueAtYear = dueAt.getFullYear();
  const dueAtMonth = dueAt.getMonth() + 1;
  const dueAtDay = dueAt.getDate();
  const dueAtHours = dueAt.getHours();
  const dueAtMinutes = dueAt.getMinutes();

  // Create a custom function to add a leading zero for formatting purposes to "date pieces" (i.e., months, days, hours, or minutes) between 0 and 9:
  const addLeadingZero = (datePiece: number) => {
    if (datePiece.toString().length == 1) {
      const datePieceString = `0${datePiece}`;
      console.log(datePieceString);
      return datePieceString;
    } else {
      return datePiece;
    }
  };

  // Reformat the dueAt object for auto-population in the user's local time:
  const dueAtTransformed = `${dueAtYear}-${addLeadingZero(
    dueAtMonth
  )}-${addLeadingZero(dueAtDay)}T${addLeadingZero(dueAtHours)}:${addLeadingZero(
    dueAtMinutes
  )}`;

  // Utilize React-Hook-Form and Zod to handle form submissions (with the deconstructed "handleSubmit"), track changes (with "register"), and display validation errors (with "formState"):
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTodoForm>({
    resolver: zodResolver(editTodoSchema),
  });

  // Initialize a constant utilizing "useRouter" to be used for rerouting the user upon successful form submission:
  const router = useRouter();

  // Initialize constants utilizing "useState" to be used for rendering errors and preventing multiple form submissions, respectively:
  const [error, setError] = useState("");
  const [isSubmitting, setSubmitting] = useState(false);

  // Create a custom "onSubmit" function to handle form submissions, utilizing Axios to "PUT" updates in the database and rerouting users upon successful submission, or otherwise displaying a general error:
  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    try {
      setSubmitting(true);
      await axios.put(`/api/todos/${thisTodo.id}`, data);
      router.push(`/${id}`);
    } catch (error) {
      setSubmitting(false);
      setError("OOPS! An unexpected error occurred. Please try again.");
    }
  });

  return (
    <>
      <PageTitle>✨Edit To-Do #{id}💫</PageTitle>

      {/* If a general error is encountered upon attempted submission, render an alert message at the top of the form: */}
      {error && (
        <Alert status="error" role="alert" className="alert alert-error mb-5">
          <span className={specialElite.className}>
            ⚠️&ensp;
            <strong>
              OOPS<em>!</em>
            </strong>
            &emsp;An unexpected error occurred. Please try again.
          </span>
        </Alert>
      )}

      {/* Display the form to add a new to-do to the database: */}
      <Form className="form-control w-full" onSubmit={onSubmit}>
        {/* Title input, labels, and conditional error rendering fields: */}
        <div className="label">
          <span className="label-text ml-3 uppercase">
            <strong>Title:</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            Required&nbsp;<span className=" text-red-500">*</span>
          </span>
        </div>
        <label className="input input-bordered flex items-center gap-2 select-error mb-5">
          <input
            type="text"
            className="grow"
            defaultValue={title}
            placeholder="Give your to-do a short title"
            {...register("title")}
          />
        </label>
        {errors.title && (
          <Alert status="error" role="alert" className="alert alert-error mb-5">
            <span className={specialElite.className}>
              ⚠️&ensp;
              <strong>
                OOPS<em>!</em>
              </strong>
              &emsp;Please give this to-do a <strong>short title</strong>.
            </span>
          </Alert>
        )}

        {/* Description input, labels, and conditional error rendering fields: */}
        <div className="label">
          <span className="label-text ml-3 uppercase">
            <strong>Description:</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            Required&nbsp;<span className=" text-red-500">*</span>
          </span>
        </div>
        <label className="input input-bordered flex items-center gap-2 select-error mb-5">
          <input
            type="text"
            className="grow"
            defaultValue={description}
            placeholder="Give your to-do a full description"
            {...register("description")}
          />
        </label>
        {errors.description && (
          <Alert status="error" role="alert" className="alert alert-error mb-5">
            <span className={specialElite.className}>
              ⚠️&ensp;
              <strong>
                OOPS<em>!</em>
              </strong>
              &emsp;Please give this to-do a <strong>description</strong>.
            </span>
          </Alert>
        )}

        {/* Due date input, labels, and conditional error rendering fields: */}
        <div className="label">
          <span className="label-text ml-3 uppercase">
            <strong>Due:</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            Required&nbsp;<span className=" text-red-500">*</span>
          </span>
        </div>
        <label className="input input-bordered flex gap-2 select-error mb-5">
          <input
            type="datetime-local"
            defaultValue={dueAtTransformed}
            {...register("dueAt")}
          ></input>
        </label>
        {errors.dueAt && (
          <Alert status="error" role="alert" className="alert alert-error mb-5">
            <span className={specialElite.className}>
              ⚠️&ensp;
              <strong>
                OOPS<em>!</em>
              </strong>
              &emsp;Please give this to-do a <strong>due date</strong>.
            </span>
          </Alert>
        )}

        {/* Category input, labels, and conditional error rendering fields: */}
        <div className="label">
          <span className="label-text ml-3 uppercase">
            <strong>Category:</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            <em>Optional</em> (Default: None)
          </span>
        </div>
        <label className="form-control">
          <select
            className="select select-bordered select-error mb-5"
            defaultValue={category}
            {...register("category")}
          >
            <option className="uppercase" disabled>
              Choose a Category
            </option>
            <option value="NONE">🚫&ensp;None</option>
            <option value="HOME">🏠&ensp;Home</option>
            <option value="PERSONAL">💆&ensp;Personal</option>
            <option value="SCHOOL">📚&ensp;School</option>
            <option value="SOCIAL">👯&ensp;Social</option>
            <option value="WORK">🏢&ensp;Work</option>
          </select>
        </label>

        {/* Status input and label fields: */}
        <div className="label">
          <span className="label-text ml-3 uppercase">
            <strong>Status:</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            <em>Optional</em> (Default: To-Do)
          </span>
        </div>
        <label className="form-control">
          <select
            className="select select-bordered select-error mb-10"
            defaultValue={status}
            {...register("status")}
          >
            <option className="uppercase" disabled>
              Choose a Status
            </option>
            <option value="TO_DO">🛠️&ensp;To-Do</option>
            <option value="DONE">✅&ensp;Done!</option>
          </select>
        </label>

        {/* Form submission button: */}
        <button
          type="submit"
          onSubmit={onSubmit}
          disabled={isSubmitting}
          className="btn btn-secondary self-center pl-11 pr-11 uppercase"
        >
          <span className={specialElite.className}>Edit To-Do</span>
        </button>
      </Form>
    </>
  );
}
