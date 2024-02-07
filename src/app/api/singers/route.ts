import { db } from "@/libs/db";
import { NextResponse } from "next/server";

//CREACIÓN NUEVO CANTANTE
export async function POST(req: Request) {
  try {
    const body = await req.json();
    console.log("ESTO ES LO QUE ESTÁ LLEGANDO DEL FORM", body);

    const { name, age, genre } = body;

    await db.singer.create({
      data: {
        name: name,
        age: age,
        genre: genre
      }
    });
    return NextResponse.json(
      { message: "Singer created successfully" },
      { status: 201 }
    );
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

//TODOS LOS CANTANTES
export async function GET(req: Request) {
  try {
    const singers = await db.singer.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        genre: true
      }
    });
    if (singers) {
      return NextResponse.json(singers, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

//EDITAR CANTANTE
export async function PUT(req: Request) {
  try {
    const singers = await db.singer.findMany({
      select: {
        id: true,
        name: true,
        age: true,
        genre: true
      }
    });
    if (singers) {
      return NextResponse.json({ singers }, { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
