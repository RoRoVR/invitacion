import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;

export async function GET(req: NextRequest) {
  try {
    const row = req.nextUrl.searchParams.get("row");
    const code = req.nextUrl.searchParams.get("code");

    if (!row || !code) {
      return NextResponse.json(
        {
          success: false,
          message: "row y code son requeridos",
        },
        { status: 400 }
      );
    }

    const response = await fetch(
      `${SCRIPT_URL}?action=get&row=${encodeURIComponent(
        row
      )}&code=${encodeURIComponent(code)}`
    );

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error al obtener la invitación",
      },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    const { row, code, res } = body;

    if (!row || !code || !res) {
      return NextResponse.json(
        {
          success: false,
          message: "row, code y res son requeridos",
        },
        { status: 400 }
      );
    }

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        action: "save",
        row,
        code,
        res,
      }),
    });

    const data = await response.json();

    return NextResponse.json(data);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      {
        success: false,
        message: "Error al guardar la respuesta",
      },
      { status: 500 }
    );
  }
}