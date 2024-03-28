export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from "next/server";
import { createTodoSchema } from "../../validationSchemas";

import prisma from '../../../prisma/db'


// HTTP GET function for viewing all to-dos:
export async function GET(request: NextRequest) {
    const allTodos = await prisma.todo.findMany();
    // console.log(allTodos);

    if (!allTodos)
        return "Nothing to see here!"

    return NextResponse.json(allTodos, { status: 200 });
}

// HTTP POST function for adding a new to-do:
export async function POST(request: NextRequest) {
    const submission = await request.json();
    const validation = createTodoSchema.safeParse(submission);
    
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })
    
    const addTodo = await prisma.todo.create({
        data: {
            title: validation.data.title, 
            description: validation.data.description,
            dueAt: validation.data.dueAt.toISOString(),
            category: validation.data.category
        }
    });

    return NextResponse.json(addTodo, { status: 201 });
}
