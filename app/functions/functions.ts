


// // Update styling of categories for display in the table

// interface Props {
//     category: string;
// }

// If nesting inside Props, refer to as Props.category 

export const stylizeCategories = (category: string) => {
    switch(category) {
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
        default: category = "🚫Uncategorized";
    }
    
    return category;
};