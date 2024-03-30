///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Define and export constants for use throughout the program, primarily for Tailwind stylization of rendered content:
// // APP > DEFINITIONS > CONSTANTS (TSX)

// NOTE: I realize the "constants" and "functions" definitions could probably live in a single file for a project of this size, but I felt doing it this way would be good practice

// Stylization for table body contents:
export const bodyClasses = " p-5 text-center ";

// Stylization for table headers:
export const headerClasses =
  " p-5 rounded-full text-purple-700 bg-fuchsia-500 font-black text-lg tracking-widest uppercase ";

// Stylization for certain text links, as the default (for this DaisyUI theme?) is identical among linked and non-linked text:
export const textLinkStyles =
  " font-bold underline underline-offset-4 decoration-teal-500 ";
