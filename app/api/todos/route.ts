import { NextRequest, NextResponse } from "next/server";
import { createTodoSchema } from "../../validationSchemas";
// import { z } from "zod";

// import prisma from "@prisma/client";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import prisma from '../../../prisma/db'

export async function POST(request: NextRequest) {
    const submission = await request.json();
    const validation = createTodoSchema.safeParse(submission);
    
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })
    
    const newTodo = await prisma.todo.create({
        data: {
            title: validation.data.title, 
            description: validation.data.description,
            category: validation.data.category,
            dueAt: validation.data.dueAt?.toISOString()
        }
    });

    return NextResponse.json(newTodo, { status: 201 });
}

/* DOESN'T WORK (TS errors on "data" object)
    const { title, description, category, dueAt } = await request.json();

    // const { title, description, category, dueAt } = submission;
    // submission.dueAt = submission.dueAt.toISOString();

    const titleValidation = createTodoSchema.safeParse(title);
    const descriptionValidation = createTodoSchema.safeParse(description);
    const categoryValidation = createTodoSchema.safeParse(category);
    const dueAtValidation = createTodoSchema.safeParse(dueAt.toISOString());

    const newTodo = await prisma.todo.create({
    data: {
        title: titleValidation, 
        description: descriptionValidation,
        category: categoryValidation,
        dueAt: dueAtValidation
    }
*/

/* 
export async function POST(request: NextRequest) {
    const body = await request.json();
    const validation = createTodoSchema.safeParse(body);
    
    if (!validation.success)
        return NextResponse.json(validation.error.format(), { status: 400 })

    const newTodo = await prisma.todo.create({
        data: {
            title: body.title, 
            description: body.description,
            category: body.category,
            dueAt: body.dueAt
        }
    });

    return NextResponse.json(newTodo, { status: 201 });
}
*/