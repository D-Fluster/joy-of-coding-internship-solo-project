///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Component for Rendering the Top Navigation Bar:
// // APP > COMPONENTS > TopNav (TSX)

// Import component for optimized links in NextJS:
import Link from "next/link";

// Import Google font for the buttons:
import { Special_Elite } from "next/font/google";
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

// Define an array of objects to hold link information for mapping by to-do category:
const catLinks = [
  { emoji: "🏠", label: "Home", href: "/category/HOME" },
  { emoji: "💆", label: "Personal", href: "/category/PERSONAL" },
  { emoji: "📚", label: "School", href: "/category/SCHOOL" },
  { emoji: "👯", label: "Social", href: "/category/SOCIAL" },
  { emoji: "🏢", label: "Work", href: "/category/WORK" },
  { emoji: "🚫", label: "Uncategorized", href: "/category/NONE" },
];

// Define an array of objects to hold link information for mapping by to-do status:
const statLinks = [
  { emoji: "🛠️", label: "In\u00a0Progress", href: "/status/TO_DO" },
  { emoji: "✅", label: "Completed", href: "/status/DONE" },
];

// // DKF RESEARCH: Is there a way to use splicing (or another method) to hold all links in the same array but only map certain subsets at a time?

// Export the default function from this component for use throughout the program:
export default function TopNav() {
  // Render responsive navbar based on DaisyUI prefab
  // See: https://daisyui.com/components/navbar/#responsive-dropdown-menu-on-small-screen-center-menu-on-large-screen
  return (
    <>
      <div className="navbar bg-secondary min-h-20 text-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            {/* Hamburger nav for smaller screens: */}
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
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-fuchsia-200 text-slate-600 rounded-box w-52"
            >
              <li>
                <Link href="/todos">View All To-Dos</Link>
              </li>
              <li>
                <a>View by Category</a>
                <ul className="p-2">
                  {catLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        {link.emoji}&emsp;{link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <a>View by Status</a>
                <ul className="p-2">
                  {statLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        {link.emoji}&emsp;{link.label}
                      </Link>
                    </li>
                  ))}
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

        {/* Full-width nav for larger screens: */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link href="/add">Add New</Link>
            </li>
            <li>
              <details>
                <summary>By Category</summary>
                <ul className="p-2 bg-fuchsia-200 text-slate-600">
                  {catLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        {link.emoji}&nbsp;&nbsp;&nbsp;{link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <details>
                <summary>By Status</summary>
                <ul className="p-2 bg-fuchsia-200 text-slate-600">
                  {statLinks.map((link) => (
                    <li key={link.label}>
                      <Link href={link.href}>
                        {link.emoji}&nbsp;&nbsp;&nbsp;{link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </details>
            </li>
            <li>
              <Link href="/todos">View All</Link>
            </li>
          </ul>
        </div>

        {/* "Easy button" for adding a new to-do: */}
        <div className="navbar-end">
          <Link href="/add" className="btn bg-fuchsia-500 border-fuchsia-900">
            ➕
          </Link>
        </div>
      </div>
    </>
  );
}
