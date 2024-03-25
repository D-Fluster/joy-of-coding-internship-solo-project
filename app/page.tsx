import Image from "next/image";
import Link from "next/link";

import { Sacramento, Special_Elite, Truculenta } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

const links = [
  { label: "Tackle Tus To-Dos", href: "/all-todos" },
  { label: "Add New To-Do", href: "/add-todo" },
];

/* Define the layout of this Card component */
export default function SideNav() {
  return (
    <>
      <div className="columns-2 flex items-center text-center pt-10">
        <div className="card-body w-2/5 min-w-fit">
          <Image
            src="/tackle-todos.png"
            className="shadow-2xl rounded-full min-w-max"
            alt="Tackle Todos Tus To-Dos"
            width={333}
            height={333}
            priority
          />
        </div>
        <div className="card-body w-3/5">
          <p>&rsquo;Tis Time to Tackle</p>
          <p className="py-7 items-center text-center text-fuchsia-500 text-7xl">
            <span className={sacramento.className}>Todos Tus To-Dos</span>
          </p>

          <Link href="/all-todos" className="bg-fuchsia-500 rounded-full p-3">
            <span className={specialElite.className}>
              Tackle&ensp;<strong>ALL</strong>&ensp;To-Dos
            </span>
          </Link>
          <br />
          <Link href="/add-todo" className="bg-fuchsia-500 rounded-full p-3">
            <span className={specialElite.className}>
              Add&ensp;<strong>NEW</strong>&ensp;To-Do
            </span>
          </Link>
        </div>
      </div>
    </>
  );
}

/* FROM CMW-03
<ul className="flex space-x-7">
  {links.map((link) => (
    <Link
      key={link.href}
      className={classnames({
        "text-emerald-500": link.href === currentPath,
        "text-zinc-700": link.href !== currentPath,
        "hover:text-zinc-300 transition-colors": true,
      })}
      href={link.href}
    >
      {link.label}
    </Link>
  ))}
</ul>
*/

/*
 <Link
            href="/my-todos"
            className="flex items-center list-group-item list-group-item-info"
          >
            <span className="flex mr-3">
              <PiListMagnifyingGlass height="500%" width="100" />
            </span>
            A third item
          </Link>
*/

/* BOOTSTRAP HTML:
<div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">An item</li>
    <li class="list-group-item">A second item</li>
    <li class="list-group-item">A third item</li>
  </ul>
  <div class="card-body">
    <a href="#" class="card-link">Card link</a>
    <a href="#" class="card-link">Another link</a>
  </div>
</div>
*/
