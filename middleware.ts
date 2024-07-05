// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;
//   const { pathname } = req.nextUrl;

//   const protectedPaths = [
//     "/connectDataSources",
//     "/Billing",
//     "/connectDataSources",
//     "/dashboard",
//     "/getHelp",
//     "/insight",
//     "/radiiView",
//     "/team",
//     "/views",
//     "/dataSources",
//     "/returningUser",
//     "/other-protected-route",
//   ];

//   if (protectedPaths.includes(pathname)) {
//     if (!token) {
//       const loginUrl = new URL("/signin", req.url);
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   if (!protectedPaths.includes(pathname) && !pathname.startsWith("/api")) {
//     const notFoundUrl = new URL("/404", req.url);
//     return NextResponse.rewrite(notFoundUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/connectDataSources",
//     "/Billing",
//     "/connectDataSources",
//     "/dashboard",
//     "/getHelp",
//     "/insight",
//     "/radiiView",
//     "/team",
//     "/views",
//     "/dataSources",
//     "/returningUser",
//     "/other-protected-route",
//   ],
// };

import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
  const { pathname } = req.nextUrl;

  const protectedPaths = [
    "/connectDataSources",
    "/Billing",
    "/dashboard",
    "/getHelp",
    "/insight",
    "/radiiView",
    "/team",
    "/views",
    "/dataSources",
    "/returningUser",
    "/other-protected-route",
  ];

  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token) {
      const loginUrl = new URL("/signin", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (!protectedPaths.includes(pathname) && !pathname.startsWith("/api")) {
    const notFoundUrl = new URL("/error404", req.url);
    return NextResponse.rewrite(notFoundUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/connectDataSources",
    "/Billing",
    "/dashboard",
    "/getHelp",
    "/insight",
    "/radiiView",
    "/team",
    "/views",
    "/dataSources",
    "/returningUser",
    "/other-protected-route",
  ],
};
