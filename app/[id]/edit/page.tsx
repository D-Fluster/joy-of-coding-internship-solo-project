// Accessed from "http://localhost:3000/*anything*/edit-todo"

import { Sacramento } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

export default async function EditTodo() {
  return (
    <div>
      <h1
        className={
          "pt-10 pb-5 text-purple-700 text-7xl text-center " +
          sacramento.className
        }
      >
        ✨Edit To-Do # (id)💫
      </h1>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
      </ul>
    </div>
  );
}
