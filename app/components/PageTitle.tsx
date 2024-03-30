///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Component for Rendering Page Titles:
// // APP > COMPONENTS > PageTitle (TSX)

// Import ReactNode for passing JSX / rich text to the child components hereof:
import { ReactNode } from "react";

// Import Google Font for the titles:
import { Sacramento } from "next/font/google";
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

// Initialize interface properties to be displayed from this component:
interface Props {
  children: ReactNode;
}

// Export the default function from this component for use throughout the program:
export default function PageTitle({ children }: Props) {
  return (
    <h1
      className={
        "pt-12 pb-10 text-purple-700 text-7xl text-center w-full " +
        sacramento.className
      }
    >
      {children}
    </h1>
  );
}
