export const dynamic = 'force-dynamic';

import { NextRequest, NextResponse } from "next/server";
import { editTodoSchema, deleteTodoSchema } from "../../../validationSchemas";

import prisma from '../../../../prisma/db'

// interface Props {
//     id: string;
// }

/*
export async function PATCH(
    request: NextRequest,
    {params}:{params: {id: string}}) {
    //get body
    const body = await request.json()
    const validation = patchSetSchema.safeParse(body)
*/

// HTTP PUT function for editing an existing to-do:
export async function PUT(request: NextRequest, { params } : { params: {id: string}}) {
    console.log(params.id)
    const submission = await request.json();
    const validation = editTodoSchema.safeParse(submission);
    
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })
    
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

    return NextResponse.json(editTodo, { status: 200 });
}

// HTTP DELETE function for deleting an existing to-do (doesn't work on Postman):
export async function DELETE({ params } : { params: {id: number | string}}) {
    if (!params.id)
        return { status: 400 }
    
    const deleteTodo = await prisma.todo.delete({
        where: {
            id: Number(params.id)
        },
    });

    return NextResponse.json(deleteTodo, { status: 200 });
}


// // HTTP DELETE function for deleting an existing to-do:
// export async function DELETE(request: NextRequest) {
//     const submission = await request.json();
//     const validation = deleteTodoSchema.safeParse(submission);
    
//     if (!validation.success)
//         return NextResponse.json(validation.error.format(), { status: 400 })
    
//     const deleteTodo = await prisma.todo.delete({
//         where: {
//             id: validation.data.id
//         },
//     });

//     return NextResponse.json(deleteTodo, { status: 200 });
// }
