// // Update styling of categories for display in the table

// interface Props {
//     category: string;
// }

// If nesting inside Props, refer to as Props.category

// export const deleteTodo ()

// Note: I realize it's technically unnecessary to program the "NONE" and "TO_DO" cases, but I prefer it for my own clarity

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
