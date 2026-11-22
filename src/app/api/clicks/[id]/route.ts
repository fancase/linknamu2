import { NextResponse } from "next/server";
import { links } from "@/data/profile";
import { incrementClick } from "@/lib/clicks";
import { isMongoConfigured } from "@/lib/mongodb";

export const dynamic = "force-dynamic";

export async function POST(
  _request: Request,
  { params }: { params: { id: string } },
) {
  if (!links.some((link) => link.id === params.id)) {
    return NextResponse.json({ error: "Unknown link" }, { status: 404 });
  }

  if (!isMongoConfigured()) {
    return NextResponse.json(
      { error: "Click storage is not configured" },
      { status: 503 },
    );
  }

  try {
    await incrementClick(params.id);
    return new NextResponse(null, { status: 204 });
  } catch (error) {
    console.error("클릭 수 저장 실패", error);
    return NextResponse.json(
      { error: "Failed to record click" },
      { status: 500 },
    );
  }
}
