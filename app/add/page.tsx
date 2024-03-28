// Page to Add a New To-Do
// APP > ADD > PAGE

// Import the form, which has been extracted for separation of concerns (in this case, as proof-of-concept for forms that require server rendering due to async/await functions)
import AddForm from "../components/AddForm";

export default function AddTodo() {
  return (
    <main>
      <AddForm />
    </main>
  );
}
