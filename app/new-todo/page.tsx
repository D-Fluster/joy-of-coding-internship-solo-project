"use client";

import Link from "next/link";

import { Alert, Form } from "react-daisyui";

import { Special_Elite, Truculenta } from "next/font/google";
export const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

import axios from "axios";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createTodoSchema } from "@/app/validationSchemas";

type CreateTodoForm = z.infer<typeof createTodoSchema>;

export default function NewTodo() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateTodoForm>({
    resolver: zodResolver(createTodoSchema),
  });

  const router = useRouter();

  const [error, setError] = useState("");

  const [isSubmitting, setSubmitting] = useState(false);

  const onSubmit = handleSubmit(async (data) => {
    try {
      setSubmitting(true);
      await axios.post("/api/todos", data);
      router.push("/my-todos");
    } catch (error) {
      setSubmitting(false);
      setError("OOPS! An unexpected error occurred. Please try again.");
    }
  });

  return (
    <>
      <h1 className="text-5xl pt-5 pb-7">Add NEW To-Do</h1>
      {error && (
        <Alert status="error" role="alert" className="alert alert-error mb-5">
          <span className={specialElite.className}>
            ⚠️&ensp;
            <strong>
              OOPS<em>!</em>
            </strong>
            &emsp;An unexpected error occurred. Please try again. ({error})
          </span>
        </Alert>
      )}
      <Form
        className="form-control w-full"
        onSubmit={handleSubmit((data) => console.log(data))}
      >
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
            <strong>Category:</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            <em>Optional</em> (Default: None)
          </span>
        </div>
        <label className="form-control">
          <select
            className="select select-bordered select-error mb-5"
            {...register("category")}
          >
            <option
              className="uppercase"
              disabled
              // selected
              // // Warning: Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.
            >
              Choose a Category
            </option>
            <option value="NONE">🚫&ensp;None</option>
            <option value="HOME">🏠&ensp;Home</option>
            <option value="PERSONAL">💆&ensp;Personal</option>
            <option value="SOCIAL">👯&ensp;Social</option>
            <option value="WORK">🏢&ensp;Work</option>
          </select>
        </label>
        <div className="label">
          <span className="label-text ml-3 uppercase">
            <strong>Due:</strong>
          </span>
          <span className="label-text-alt mr-3 uppercase">
            <em>Optional</em> (Default: 7 Days)
          </span>
        </div>
        <label className="input input-bordered flex gap-2 select-error mb-10">
          <input type="datetime-local" {...register("dueAt")}></input>
        </label>

        <button
          type="submit"
          disabled={isSubmitting}
          className="btn btn-secondary  self-center pl-11 pr-11 uppercase"
        >
          <span className={specialElite.className}>Add To-Do</span>
        </button>
      </Form>
    </>
  );
}

/* 
{errors.description?.message} prints "Required."

        <div className="max-w-1">
          <h2>Category</h2>
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox mr-5" />
            <span className="label-text">Home</span>
          </label>
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox mr-5" />
            <span className="label-text">Personal</span>
          </label>
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox mr-5" />
            <span className="label-text">Social</span>
          </label>
          <label className="label cursor-pointer">
            <input type="checkbox" className="checkbox mr-5" />
            <span className="label-text">Work</span>
          </label>
        </div>

// DAISY ELEMENT: With form-control and labels
// https://daisyui.com/components/input/#with-form-control-and-labels
      <label className="form-control w-full max-w-xs">
        <div className="label">
          <span className="label-text">What is your name?</span>
          <span className="label-text-alt">Top Right label</span>
        </div>
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full max-w-xs"
        />
        <div className="label">
          <span className="label-text-alt">Bottom Left label</span>
          <span className="label-text-alt">Bottom Right label</span>
        </div>
      </label>
*/
