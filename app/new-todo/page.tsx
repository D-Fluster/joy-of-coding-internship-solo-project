import Breadcrumbs from "../components/Breadcrumbs";

import Link from "next/link";

export default function NewTodo() {
  return (
    <div>
      <Breadcrumbs />
      <p>Add New To-Do</p>
      <Link href="/" className="text-5xl">
        Home
      </Link>
    </div>
  );
}
