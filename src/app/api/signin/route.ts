import { signIn, signOut } from "@/auth";
import { NextResponse } from "next/server";

export async function GET() {}

export async function POST(_, res: Response) {
  await signIn();

  return NextResponse.json("signed in");
}
