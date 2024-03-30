///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Custom 404 Error Page:
// // APP > NOT FOUND (TSX)

// Per Next.js APP ROUTER Docs: https://nextjs.org/docs/app/api-reference/file-conventions/not-found
// See Also Next.js PAGES ROUTER Docs: https://nextjs.org/docs/pages/building-your-application/routing/custom-error

// Import component for optimized links in NextJS:
import Link from "next/link";

// Import custom component to render the page title:
import PageTitle from "@/app/components/PageTitle";

// Import Google font for the button:
import { Special_Elite } from "next/font/google";
const specialElite = Special_Elite({
  subsets: ["latin"],
  weight: "400",
});

// Export the default function from this component for use throughout the program:
export default function Custom404() {
  return (
    <>
      <PageTitle>✨Error: 404💫</PageTitle>

      {/* Render error message as a hero with overlay image based on DaisyUI prefab
      // See: https://daisyui.com/components/hero/#hero-with-overlay-image */}
      <div
        className="hero"
        style={{
          backgroundImage: "url(/tackle-todos.png)",
        }}
      >
        <div className="hero-overlay bg-opacity-55"></div>
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
