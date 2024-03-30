///////////////////////////
// CODE & COMMENTS DONE! //
///////////////////////////

// Define and export API routing configurations for HTTP PUT (edit) and DELETE requests on existing to-dos:
// // APP > API > TODOS > [ID] > ROUTE (TS)

// NOTE: While these are fully functional per Postman, currently only "PUT" is actually utilized in this program

// Force no caching to prevent stale data from being displayed (but not always working):
export const dynamic = 'force-dynamic';

// Import Prisma for database queries:
import prisma from '../../../../prisma/db'

// Import routing and validation tools:
import { NextRequest, NextResponse } from "next/server";
import { editTodoSchema, deleteTodoSchema } from "../../../validationSchemas";

// Export HTTP PUT function for editing an existing to-do:
export async function PUT(request: NextRequest, { params } : { params: {id: string}}) {
    // Create a variable to hold the body of the user's request as a promised JSON object:
    const submission = await request.json();

    // Validate the user's request to prevent submission of bad data using a custom Zod schema: 
    const validation = editTodoSchema.safeParse(submission);
    
    // If validation fails, respond with a 400 Bad Request error message:
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })
    
    // Otherwise, upon successful validation, query Prisma to update the database with the validated request data:
    const editTodo = await prisma.todo.update({
        where: {
            id: Number(params.id)
        },
        data: {
            title: validation.data.title, 
            description: validation.data.description,
            dueAt: validation.data.dueAt.toISOString(),
            category: validation.data.category,
            status: validation.data.status
        }
    });

    // Finally, return the successful update to the user along with a 200 OK confirmation message:
    return NextResponse.json(editTodo, { status: 200 });
}

// Export HTTP DELETE function for deleting an existing to-do:
export async function DELETE(request: NextRequest) {
    // Create a variable to hold the body of the user's request as a promised JSON object:
    const submission = await request.json();

    // Validate the user's request to prevent submission of bad data using a custom Zod schema: 
    const validation = deleteTodoSchema.safeParse(submission);
    
    // If validation fails, respond with a 400 Bad Request error message:
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })
    
    // Otherwise, upon successful validation, query Prisma to update the database (i.e., delete the identified to-do) with the validated request data:
    const deleteTodo = await prisma.todo.delete({
        where: {
            id: validation.data.id
        },
    });

    // Finally, return the successful deletion to the user along with a 200 OK confirmation message:
    return NextResponse.json(deleteTodo, { status: 200 });
}
