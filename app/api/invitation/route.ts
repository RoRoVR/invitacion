import { NextRequest, NextResponse } from "next/server";

const SCRIPT_URL = process.env.GOOGLE_SCRIPT_URL!;

export async function GET(req: NextRequest) {

  const id = req.nextUrl.searchParams.get("id");

  const response = await fetch(
    `${SCRIPT_URL}?id=${id}`
  );

  const data = await response.json();

  return NextResponse.json(data);
}

export async function POST(req: NextRequest) {

  const body = await req.json();

  await fetch(SCRIPT_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(body)
  });

  return NextResponse.json({
    success: true
  });
}