import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Redirect index to landing page
  if (url.pathname === "/") {
    url.pathname = "/landing";
    return NextResponse.redirect(url);
  }
}
