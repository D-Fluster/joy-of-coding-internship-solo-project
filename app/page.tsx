///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Home Page Component:
// // APP > PAGE (TSX)

// Import component for optimized images and links in NextJS:
import Image from "next/image";
import Link from "next/link";

// Import Google fonts for the title and buttons:
import { Sacramento, Special_Elite, Truculenta } from "next/font/google";

const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

/* Define the layout of this Card component */
export default function SideNav() {
  // Define constants for stylization:
  const buttonClasses = " bg-fuchsia-500 rounded-full mx-5 px-10 py-5 ";

  return (
    <>
      <div className="flex justify-around flex-row items-center text-center pt-20">
        {/* Flex container for homepage image:
        // FUN FACT: This image was generated with AI using the prompt "rainbow cat wreaks havoc on well-used hamster toy"! */}
        <div className="basis-2/5 w-2/5">
          <Image
            src="/tackle-todos.png"
            className="shadow-2xl rounded-full min-w-full"
            alt="Tackle Todos Tus To-Dos"
            width={333}
            height={333}
            priority
          />
        </div>

        {/* Flex container for homepage tagline, title, and action buttons: */}
        <div className="basis-3/5 w-3/5">
          <p className={specialElite.className + " -mb-5 text-xs uppercase"}>
            <strong>&rsquo;Tis Time to Tackle</strong>
          </p>
          <p className="py-7 items-center text-center text-fuchsia-500 text-7xl">
            <span className={sacramento.className}>
              Todos&nbsp;Tus&nbsp;To-Dos
            </span>
          </p>
          <div className="flex justify-center">
            <Link href="/todos" className={buttonClasses}>
              <span className={specialElite.className}>
                Tackle&nbsp;<strong>ALL</strong>&nbsp;To-Dos
              </span>
            </Link>
            {/* <br /> */}
            <Link href="/add" className={buttonClasses}>
              <span className={specialElite.className}>
                Start&nbsp;a&nbsp;<strong>NEW</strong>&nbsp;To-Do
              </span>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
