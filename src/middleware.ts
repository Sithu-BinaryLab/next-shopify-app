import { NextRequest, NextResponse } from "next/server";

export default async function middleware(request: NextRequest) {
  const [, ...segments] = request.nextUrl.pathname.split("/");

  const protectedPages = ["cart", "account"];
  const isProtectedPage = protectedPages.includes(segments[0]);

  if (isProtectedPage) {
    const token = request.cookies.get("auth_token");

    if (!token) {
      return NextResponse.redirect(new URL(`/`, request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/(th|en|ar|hi)/:path*"],
};
