import { NextRequest, NextResponse } from "next/server";
import axios from "axios";

export async function GET(req: NextRequest) {
  console.log("OAuth2 callback handler:");

  const { searchParams } = new URL(req.url);
  const code = searchParams.get("code");

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is missing" },
      { status: 400 }
    );
  }

  const token = req.cookies.get("auth_token");
  console.log("Token from cookies:", token);

  // if (!token) {
  //   return NextResponse.json(
  //     { error: 'User token is missing' },
  //     { status: 401 }
  //   );
  // }

  try {
    const response = await axios.post(
      "https://starfish-app-9ezx5.ondigitalocean.app/datasources/gdrive/",
      { code },
      {
        headers: {
          Authorization: `Token ${token?.value}`,
        },
        withCredentials: true,
      }
    );

    const data = response.data;
    console.log("Response from backend:", data);

    if (response.status >= 200 && response.status < 300) {
      const { username } = data.integration;
      const baseUrl = req.nextUrl.origin;

      return NextResponse.redirect(
        `${baseUrl}/dataSources?email=${encodeURIComponent(username)}`
      );
    } else {
      return NextResponse.json(data, { status: response.status });
    }
  } catch (error) {
    console.error("Error sending code to backend:", error);
    return NextResponse.json(
      { error: "Failed to send code to backend" },
      { status: 500 }
    );
  }
}
