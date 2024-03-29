// Client Component to Edit an Existing To-Do:
// // APP > COMPONENTS > EditForm

// Make this form a client component because it will take user input:
"use client";

export const dynamic = "force-dynamic";

import PageTitle from "@/app/components/PageTitle";

// Import all tools necessary for routing and validation:
import axios from "axios";
import { editTodoSchema } from "@/app/validationSchemas";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

// import { addLeadingZero } from "../definitions/functions";

// Import custom fonts and DaisyUI components:
import { Alert, Form } from "react-daisyui";
import { Sacramento, Special_Elite } from "next/font/google";
import { Todo } from "@prisma/client";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

type EditTodoForm = z.infer<typeof editTodoSchema>;

interface Props {
  thisTodo: Todo;
}

export default function EditForm({ thisTodo }: Props) {
  const {
    id,
    title,
    description,
    category,
    status,
    // createdAt,
    // updatedAt,
    dueAt,
  } = thisTodo;

  // Destructure dueAt object for restructuring into "[YYYY]-[MM]-[DD]T[HH]:[mm]" format in local time
  // Otherwise, just using "dueAt.toISOString().split("Z")[0];", the "Due" field will auto-populate with the date-time in UTC
  const dueAtYear = dueAt.getFullYear();
  const dueAtMonth = dueAt.getMonth() + 1;
  const dueAtDay = dueAt.getDate();
  const dueAtHours = dueAt.getHours();
  const dueAtMinutes = dueAt.getMinutes();

  // For months, days, hours, and minutes between 0 and 9, utilize a custom function to add a leading zero for formatting purposes:
  const addLeadingZero = (datePiece: number) => {
    if (datePiece.toString().length == 1) {
      const datePieceString = `0${datePiece}`;
      console.log(datePieceString);
      return datePieceString;
    } else {
      return datePiece;
    }
  };

  // Reformat the dueAt object in local time:
  const dueAtTransformed = `${dueAtYear}-${addLeadingZero(
    dueAtMonth
  )}-${addLeadingZero(dueAtDay)}T${addLeadingZero(dueAtHours)}:${addLeadingZero(
    dueAtMinutes
  )}`;

  console.log(dueAtTransformed);

  // Create a "transform" to process this separately
  // Can create another prop based on dueAt -- e.g., dueAtTransformed -- and leave dueAt alone, but pass in DAT to value

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<EditTodoForm>({
    resolver: zodResolver(editTodoSchema),
  });

  const router = useRouter();

  const [error, setError] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);

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

  return (
    <>
      <PageTitle>✨Edit To-Do #{id}💫</PageTitle>
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
      <Form className="form-control w-full" onSubmit={onSubmit}>
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
        <button
          type="submit"
          onSubmit={onSubmit}
          disabled={isSubmitting}
          className="btn btn-secondary  self-center pl-11 pr-11 uppercase"
        >
          <span className={specialElite.className}>Edit To-Do</span>
        </button>
      </Form>
    </>
  );
}

/*
interface Props {
  thisTodo: Todo[];
}

export default function EditForm({ thisTodo }: Props) {
  console.log(thisTodo);
  //   const {
  //     id,
  //     title,
  //     description,
  //     category,
  //     status,
  //     createdAt,
  //     updatedAt,
  //     dueAt,
  //   } = thisTodo;

          <div className="hidden label">
          <span className="label-text ml-3 uppercase">
            <strong>ID (Auto-Generated):</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            Required&nbsp;<span className=" text-red-500">*</span>
          </span>
        </div>
        <label className="hidden input input-bordered items-center gap-2 select-error mb-5">
          <input
            disabled
            type="text"
            className="grow"
            defaultValue={id}
            // placeholder={id}
            {...register("id")}
          />
        </label>
*/
