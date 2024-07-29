import { NextRequest } from "next/server";

export function getServerSideToken(req: NextRequest) {
  return req.cookies.get("auth_token")?.value || null;
}
