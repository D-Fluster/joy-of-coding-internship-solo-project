import { ReactNode } from "react";

// Import cusom Google Font for titles:
import { Sacramento } from "next/font/google";

// Title font:
const sacramento = Sacramento({
  subsets: ["latin"],
  weight: "400",
});

interface Props {
  children: ReactNode;
}

export default function PageTitle({ children }: Props) {
  return (
    <h1
      className={
        "pt-10 pb-7 text-purple-700 text-7xl text-center " +
        sacramento.className
      }
    >
      {children}
    </h1>
  );
}
