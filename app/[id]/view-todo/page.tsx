// SHOULD be accessed from "http://localhost:3000/*anything*/view-todo" -- but not working

import Link from "next/link";

export default async function ViewTodo() {
  return (
    <div>
      <p className="m-44">View a To-Do</p>
      <ul>
        <li>Fusce ultrices sapien vel nibh feugiat molestie.</li>
      </ul>
      <Link href="/" className="text-5xl">
        Home
      </Link>
    </div>
  );
}
