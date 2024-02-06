import { db } from "@/libs/db";
import { NextResponse } from "next/server";

interface Params {
  params: { id: number };
}

//CANTANTE POR ID
export async function GET(req: Request, { params }: Params) {
  try {
    const { id } = params;
    console.log("ESTE ES EL ID QUE LLEGA POR PARAMS: ", id);
    const idNumber = Number(id);
    const singerById = await db.singer.findFirst({
      where: {
        id: idNumber
      }
    });
    if (singerById) {
      return NextResponse.json( singerById , { status: 200 });
    }
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

//ELIMINAR CANTANTE
export async function DELETE(req: Request, { params }: Params) {
  try {
    const { id } = params;
    console.log("ESTE ES EL ID QUE LLEGA POR PARAMS: ", id);
    const idNumber = Number(id);
    await db.singer.delete({
      where: {
        id: idNumber
      }
    });
    if (!id)
      return NextResponse.json(
        { message: "Singer not found" },
        { status: 404 }
      );

    return NextResponse.json({ message: "Singer deleted" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}

//EDITAR CANTANTE
export async function PUT(req: Request, { params }: Params) {
  try {
    const { id } = params;
    const body = await req.json();
    const { name, age, genre } = body;
    const idNumber = Number(id);
    await db.singer.update({
      where: {
        id: idNumber
      },
      data: {
        name: name,
        age: age,
        genre: genre
      }
    });
    if (!id)
      return NextResponse.json(
        { message: "Singer not found" },
        { status: 404 }
      );
    return NextResponse.json({ message: "Singer updated" }, { status: 200 });
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong", error },
      { status: 500 }
    );
  }
}
