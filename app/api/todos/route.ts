import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import { createTodoSchema } from "../../validationSchemas";

// import prisma from "@prisma/client";
// import { PrismaClient } from "@prisma/client";
// const prisma = new PrismaClient();
import prisma from '../../../prisma/db'

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