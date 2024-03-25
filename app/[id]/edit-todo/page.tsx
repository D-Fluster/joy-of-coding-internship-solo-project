// Accessed from "http://localhost:3000/*anything*/edit-todo"

import Link from "next/link";

export default async function EditTodo() {
  return (
    <div>
      <p className="m-44">Edit a To-Do</p>
      <ul>
        <li>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</li>
        <li>Sed finibus tortor non justo fringilla accumsan.</li>
        <li>Nunc quis dui porta, porta massa pharetra, lacinia erat.</li>
        <li>Sed blandit ligula nec fringilla tincidunt.</li>
        <li>Aenean sit amet sem sed nunc pretium ornare.</li>
        <li>
          Sed aliquet dolor quis dolor bibendum, venenatis sagittis felis
          venenatis.
        </li>
        <li>Vivamus rutrum erat vitae ullamcorper convallis.</li>
        <li>Morbi in dui ornare, elementum purus nec, fringilla eros.</li>
        <li>Vivamus dictum augue non suscipit scelerisque.</li>
        <li>Mauris nec dui scelerisque eros ornare elementum a et nunc.</li>
        <li>Aliquam at urna id ipsum malesuada maximus eget ac lectus.</li>
        <li>Etiam imperdiet quam in sapien eleifend ultrices.</li>
        <li>
          Nullam pretium risus sit amet enim finibus, non vestibulum orci
          mattis.
        </li>
        <li>
          Etiam egestas risus non mauris suscipit, vestibulum bibendum urna
          bibendum.
        </li>
        <li>
          Integer sodales lorem a arcu accumsan, sed finibus nisi condimentum.
        </li>
        <li>Fusce ultrices sapien vel nibh feugiat molestie.</li>
      </ul>
      <Link href="/" className="text-5xl">
        Home
      </Link>
    </div>
  );
}
