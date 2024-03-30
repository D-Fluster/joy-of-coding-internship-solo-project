///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Define and export functions for use throughout the program, primarily for stylization of rendered content:
// // APP > DEFINITIONS > FUNCTIONS (TSX)

// NOTE: While it's technically unnecessary to explicitly program the "NONE" and "TO_DO" cases, as they're covered by the default return, I prefer to do so for maximal clarity

// ALSO NOTE: For extra DRYness, I realize I could also try to figure out a way to move more functions herein (e.g., to sort query results by due date, to reformat dates, etc.)

// Stylization of category enum for display in page titles:
export const stylizeCategoryTitles = (category: string) => {
  switch (category) {
    case "HOME":
      category = "🏠Home";
      break;
    case "PERSONAL":
      category = "💆Personal";
      break;
    case "SCHOOL":
      category = "📚School";
      break;
    case "SOCIAL":
      category = "👯Social";
      break;
    case "WORK":
      category = "🏢Work";
      break;
    case "NONE":
      category = "🚫Uncategorized";
      break;
    default:
      category = "🚫Uncategorized";
  }
  return category;
};

// Stylization of category enum for display in tables:
export const stylizeCategories = (category: string) => {
  switch (category) {
    case "HOME":
      category = "🏠\u00a0Home";
      break;
    case "PERSONAL":
      category = "💆\u00a0Personal";
      break;
    case "SCHOOL":
      category = "📚\u00a0School";
      break;
    case "SOCIAL":
      category = "👯\u00a0Social";
      break;
    case "WORK":
      category = "🏢\u00a0Work";
      break;
    case "NONE":
      category = "🚫\u00a0Uncategorized";
      break;
    default:
      category = "🚫\u00a0Uncategorized";
  }
  return category;
};

// Stylization of status enum for display in page titles:
export const stylizeStatusTitles = (status: string) => {
  switch (status) {
    case "TO_DO":
      status = "🛠️In-Progress\u0020";
      break;
    case "DONE":
      status = "✅Completed🎉";
      break;
    default:
      status = "🛠️In-Progress\u0020";
  }
  return status;
};

// Stylization of status enum for display in tables:
export const stylizeStatuses = (status: string) => {
  switch (status) {
    case "TO_DO":
      status = "🛠️\u00a0To-Do";
      break;
    case "DONE":
      status = "✅\u00a0Done!";
      break;
    default:
      status = "🛠️\u00a0To-Do";
  }
  return status;
};
