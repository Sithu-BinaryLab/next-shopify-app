import { NextRequest, NextResponse } from "next/server";
import createMiddleware from "next-intl/middleware";

export default async function middleware(request: NextRequest) {
  const [, locale, ...segments] = request.nextUrl.pathname.split("/");

  const protectedPages = ["cart", "account"];
  const isProtectedPage = protectedPages.includes(segments[0]);

  if (locale != null && isProtectedPage) {
    const token = request.cookies.get("auth_token");

    if (!token) {
      return NextResponse.redirect(new URL(`/${locale}`, request.url));
    }
  }

  const handleI18nRouting = createMiddleware({
    locales: ["en", "mm"],
    defaultLocale: "en",
  });
  const response = handleI18nRouting(request);
  return response;
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)", "/(en|mm)/:path*"],
};
