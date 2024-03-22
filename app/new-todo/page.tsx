import Link from "next/link";

export default function NewTodo() {
  return (
    <div>
      <p>Add New To-Do</p>
      <Link href="/" className="text-5xl">
        Home
      </Link>
    </div>
  );
}
