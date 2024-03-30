///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Page to Add a New To-Do:
// // APP > ADD > PAGE (TSX)

// Import the corresponding form component, which has been extracted for separation of concerns (in this case, as proof-of-concept for components/fields that require server rendering due to async/await functions):
import AddForm from "../components/AddForm";

// Export the default function from this component for use throughout the program:
export default function AddTodo() {
  return (
    <main>
      <AddForm />
    </main>
  );
}
