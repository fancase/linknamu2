import { NextResponse } from "next/server";
import { getClickCounts } from "@/lib/clicks";

export const dynamic = "force-dynamic";

export async function GET() {
  const counts = await getClickCounts();

  if (!counts) {
    return NextResponse.json(
      { error: "Click counts are unavailable" },
      { status: 503 },
    );
  }

  return NextResponse.json(counts, {
    headers: { "Cache-Control": "no-store" },
  });
}
