import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const url = request.nextUrl.clone();

  // Redirect landing to index page
  if (url.pathname === "/landing") {
    url.pathname = "/";
    return NextResponse.redirect(url);
  }
}
