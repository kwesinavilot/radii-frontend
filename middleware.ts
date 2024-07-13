// import { NextRequest, NextResponse } from "next/server";

// export function middleware(req: NextRequest) {
//   const token = req.cookies.get("token")?.value;
//   const googleToken = req.cookies.get("google_token")?.value;
//   const { pathname } = req.nextUrl;

//   const protectedPaths = [
//     "/connectDataSources",
//     "/Billing",
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

//   if (protectedPaths.some((path) => pathname.startsWith(path))) {
//     if (!token && !googleToken) {
//       const loginUrl = new URL("/signin", req.url);
//       return NextResponse.redirect(loginUrl);
//     }
//   }

//   if (!protectedPaths.includes(pathname) && !pathname.startsWith("/api")) {
//     const notFoundUrl = new URL("/error404", req.url);
//     return NextResponse.rewrite(notFoundUrl);
//   }

//   return NextResponse.next();
// }

// export const config = {
//   matcher: [
//     "/connectDataSources",
//     "/Billing",
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
  const googleToken = req.cookies.get("google_token")?.value;
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

  console.log(`Request path: ${pathname}`);
  console.log(`Token: ${token}`);
  console.log(`Google Token: ${googleToken}`);

  if (protectedPaths.some((path) => pathname.startsWith(path))) {
    if (!token && !googleToken) {
      console.log(`Redirecting to /signin`);
      const loginUrl = new URL("/signin", req.url);
      return NextResponse.redirect(loginUrl);
    }
  }

  if (!protectedPaths.includes(pathname) && !pathname.startsWith("/api")) {
    console.log(`Rewriting to /error404`);
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
