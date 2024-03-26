import Image from "next/image";
import Link from "next/link";
import { Special_Elite } from "next/font/google";

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export default function TopNav() {
  return (
    <>
      <div className="navbar bg-secondary min-h-20 text-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Hamburger nav for smaller screens */}
            {/* DKF finish once everything is finalized! */}
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-fuchsia-500 text-slate-600 rounded-box w-52"
            >
              <li>
                <a>Item 1</a>
              </li>
              <li>
                <a>Parent</a>
                <ul className="p-2">
                  <li>
                    <a>Submenu 1</a>
                  </li>
                  <li>
                    <a>Submenu 2</a>
                  </li>
                </ul>
              </li>
              <li>
                <a>Item 3</a>
              </li>
              <li>
                <a>Tackle Tus To-Dos</a>
                <ul className="p-2">
                  <li>
                    <Link href="/todos">View All To-Dos</Link>
                  </li>
                  <li>
                    <Link href="/">Category: X</Link>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
          <Link
            href="/"
            className={"btn btn-ghost text-2xl pt-2 " + specialElite.className}
          >
            <span className="font-black italic text-fuchsia-500">¡&nbsp;</span>
            Todos Tus To-Dos
            <span className="font-black italic text-fuchsia-500">&nbsp;!</span>
          </Link>
        </div>
        {/* Full-width nav for larger screens */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/add">Add New</Link>
            </li>
            <li>
              <details>
                <summary>To-Dos by Category</summary>
                <ul className="p-2 bg-fuchsia-200 text-slate-600">
                  <li>
                    <Link href="/category/HOME">🏠&ensp;Home</Link>
                  </li>
                  <li>
                    <Link href="/category/PERSONAL">💆&ensp;Personal</Link>
                  </li>
                  <li>
                    <Link href="/category/SCHOOL">📚&ensp;School</Link>
                  </li>
                  <li>
                    <Link href="/category/SOCIAL">👯&ensp;Social</Link>
                  </li>
                  <li>
                    <Link href="/category/WORK">🏢&ensp;Work</Link>
                  </li>
                  <li>
                    <Link href="/category/NONE">🚫&ensp;Other</Link>
                  </li>
                </ul>
              </details>
            </li>
            <li>
              <Link href="/todos">View All</Link>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link href="/add" className="btn bg-fuchsia-500 border-fuchsia-900">
            ➕
          </Link>
        </div>
      </div>
    </>
  );
}

/* ORIGNIAL JSX FROM DAISYUI:
<>
  <div className="navbar bg-base-100">
    <div className="navbar-start">
      <div className="dropdown">
        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
        >
          <li>
            <Link>Item 1</a>
          </li>
          <li>
            <a>Parent</a>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </li>
          <li>
            <a>Item 3</a>
          </li>
        </ul>
      </div>
      <a className="btn btn-ghost text-xl">daisyUI</a>
    </div>
    <div className="navbar-center hidden lg:flex">
      <ul className="menu menu-horizontal px-1">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <details>
            <summary>Parent</summary>
            <ul className="p-2">
              <li>
                <a>Submenu 1</a>
              </li>
              <li>
                <a>Submenu 2</a>
              </li>
            </ul>
          </details>
        </li>
        <li>
          <a>Item 3</a>
        </li>
      </ul>
    </div>
    <div className="navbar-end">
      <a className="btn">Button</a>
    </div>
  </div>
</>
*/
