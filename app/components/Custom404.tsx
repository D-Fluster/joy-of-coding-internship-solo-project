import Link from "next/link";

import PageTitle from "@/app/components/PageTitle";

///// Import cusom Google Fonts for titles and buttons:
import { Sacramento, Special_Elite } from "next/font/google";

// Title font:
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

//... Button font:
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

export default function Custom404() {
  return (
    <>
      <PageTitle>✨Error: 404💫</PageTitle>
      <div
        className="hero"
        style={{
          backgroundImage: "url(/tackle-todos.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <p
              className={
                "my-5 text-5xl font-bold uppercase " + specialElite.className
              }
            >
              ⚠️&nbsp;
              <strong>
                Oops<em>!</em>
              </strong>
              &nbsp;⚠️
            </p>
            <p className={"my-5 text-5xl font-bold " + specialElite.className}>
              The page you requested doesn&rsquo;t seem to exist
            </p>
            <Link
              className={
                "btn btn-accent font-black pt-1 mb-3 " + specialElite.className
              }
              href="/"
            >
              <strong>Tackle Other To-Dos</strong>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

/* Original implementation without hero image:
      <div
        className={"pt-10 pb-5 text-5xl text-center " + specialElite.className}
      >
        <p className="mb-5">
          ⚠️&nbsp;
          <strong>
            OOPS<em>!</em>
          </strong>
          &nbsp;⚠️
        </p>
        <p>The page you requested doesn&rsquo;t seem to exist</p>
      </div>
*/
