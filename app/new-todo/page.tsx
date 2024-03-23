"use client";

import Link from "next/link";

import { Alert, Form } from "react-daisyui";

import { Special_Elite, Truculenta } from "next/font/google";
export const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

import axios from "axios";
import { useForm, Controller } from "react-hook-form";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { createTodoSchema } from "@/app/validationSchemas";

type CreateTodoForm = z.infer<typeof createTodoSchema>;

export default function NewTodo() {
  const {
    register,
    control,
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
      await axios.post("/api/issues", data);
      router.push("/issues");
    } catch (error) {
      setSubmitting(false);
      setError("An unexpected error occurred. Please try again.");
    }
  });

  return (
    <>
      <h1 className="text-5xl pt-5 pb-7">Add NEW To-Do</h1>
      {error && (
        <Alert
          status="warning"
          role="alert"
          className="alert alert-warning mb-5"
        >
          ⚠️&ensp;Oops! An unexpected error occurred. Please try again. {error}
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
        <label className="input input-bordered flex items-center gap-2 select-warning mb-5">
          <input
            type="text"
            className="grow"
            placeholder="Give your to-do a short title"
          />
        </label>
        {errors.title && (
          <Alert
            status="warning"
            role="alert"
            className="alert alert-warning mb-5"
          >
            ⚠️&ensp;Oops! Please give this to-do a short title.
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
        <label className="input input-bordered flex items-center gap-2 select-warning mb-5">
          <input
            type="text"
            className="grow"
            placeholder="Give your to-do a full description"
          />
        </label>
        {errors.description && (
          <Alert
            status="warning"
            role="alert"
            className="alert alert-warning mb-5"
          >
            ⚠️&ensp;Oops! Please give this to-do a description.
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
          <select className="select select-bordered select-warning mb-5">
            <option disabled selected className="uppercase">
              Choose a Category
            </option>
            <option>🏠&ensp;Home</option>
            <option>💆&ensp;Personal</option>
            <option>👯&ensp;Social</option>
            <option>🏢&ensp;Work</option>
            <option>🚫&ensp;None</option>
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
        <label className="input input-bordered flex gap-2 select-warning mb-10">
          <input type="datetime-local"></input>
        </label>
        <div className="items-center max-w-sm">
          <button
            type="submit"
            disabled={isSubmitting}
            className="btn btn-secondary uppercase"
          >
            <span className={specialElite.className}>ADD TO-DO</span>
          </button>
        </div>
      </Form>
    </>
  );
}

/* 
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
