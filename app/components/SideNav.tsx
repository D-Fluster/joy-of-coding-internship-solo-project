// COPIED FROM DKF REACT TRIVIA (CARD COMPONENT)

import Image from "next/image";
import Link from "next/link";

import { PiListMagnifyingGlass } from "react-icons/pi";

import { Special_Elite, Truculenta } from "next/font/google";

export const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

/* Define the layout of this Card component */
export default function SideNav() {
  return (
    <>
      <div className="card flex items-center text-center m-1.5">
        <div className="card-body">
          <p className="card-text text-xs pt-3 uppercase italic">
            <span className={specialElite.className}>
              &rsquo;Tis Time to Tackle
            </span>
          </p>
          <Link href="/" className="card-title text-fuchsia-500 text-2xl">
            <span className={specialElite.className}>Todos Tus ToDos</span>
          </Link>
        </div>
        <Image
          src="/tackle-todos.png"
          className="card-img-top"
          alt="Tackle Todos Tus To-Dos"
          width={500}
          height={500}
          priority
        />
        <div className="card-body">
          <p className="card-text">
            <span className="font-black italic text-fuchsia-500">¿&nbsp;</span>
            What will you tackle today
            <span className="font-black italic text-fuchsia-500">&nbsp;?</span>
          </p>
        </div>
        <ul className="list-group w-4/5 mb-3">
          <Link
            href="/my-todos"
            className="list-group-item list-group-item-info active"
            aria-current="true"
          >
            See&ensp;<strong>ALL</strong>&ensp;To-Dos
          </Link>
          <Link
            href="/new-todo"
            className="list-group-item list-group-item-info"
          >
            Add&ensp;<strong>NEW</strong>&ensp;To-Do
          </Link>
        </ul>
        <div className="card-body mb-3">
          <Link
            href="/log-in"
            className="card-link bg-fuchsia-500 mr-1 px-3 py-2 rounded-lg uppercase"
          >
            <span className={specialElite.className}>Log In</span>
          </Link>
          <Link
            href="/sign-up"
            className="card-link bg-fuchsia-500 ml-11 px-3 py-2 rounded-lg uppercase"
          >
            <span className={specialElite.className}>SIGN UP</span>
          </Link>
        </div>
      </div>
    </>
  );
}

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
