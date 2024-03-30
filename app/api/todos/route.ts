///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Define aned export API routing configurations for HTTP GET (view) and POST (add) requests for all and newly created to-dos, respectively:
// // APP > API > TODOS > [ID] > ROUTE (TS)

// NOTE: These are fully functional per Postman, but currently only "POST" is actually utilized in this program

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = 'force-dynamic';

// Import Prisma for database queries:
import prisma from '../../../prisma/db'

// Import routing and validation tools:
import { NextRequest, NextResponse } from "next/server";
import { createTodoSchema } from "../../validationSchemas";

// Export HTTP GET function for viewing all to-dos:
export async function GET(request: NextRequest) {
    // Query Prisma to find/"get" details of all existing to-dos in the database:
    const allTodos = await prisma.todo.findMany();

    // If the database is empty (i.e., if allTodos = []), return a 422 Unprocessable Content error message: 
    if (allTodos.length === 0) {
        return NextResponse.json("Nothing to see here! There are no to-dos in this database.", { status: 422 })}

    // Otherwise, return the requested information to the user along with a 200 OK confirmation message:
    return NextResponse.json(allTodos, { status: 200 });
}

// Export HTTP POST function for adding a new to-do:
export async function POST(request: NextRequest) {
    // Create a variable to hold the body of the user's request as a promised JSON object:
    const submission = await request.json();

    // Validate the user's request to prevent submission of bad data using a custom Zod schema: 
    const validation = createTodoSchema.safeParse(submission);
    
    // If validation fails, respond with a 400 Bad Request error message:
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })
    
    // Otherwise, upon successful validation, query Prisma to update the database (i.e., add the new to-do) with the validated request data:
    const addTodo = await prisma.todo.create({
        data: {
            title: validation.data.title, 
            description: validation.data.description,
            dueAt: validation.data.dueAt.toISOString(),
            category: validation.data.category
        }
    });

    // Finally, return the successful update to the user along with a 201 Created confirmation message:
    return NextResponse.json(addTodo, { status: 201 });
}
