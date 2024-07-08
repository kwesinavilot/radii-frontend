import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import Cookies from "js-cookie";

export async function GET(req: NextRequest) {
  console.log("OAuth2 callback handler:");

  const { searchParams } = new URL(req.url);
  const state = searchParams.get("state");
  const code = searchParams.get("code");
  const scopes = searchParams.get("scopes");
  const authuser = searchParams.get("authuser");
  const prompt = searchParams.get("prompt");

  console.log("Received query params:", state, code, scopes, authuser, prompt);

  if (!code) {
    return NextResponse.json(
      { error: "Authorization code is missing" },
      { status: 400 }
    );
  }


  const token = req.cookies.get("auth_token");
  console.log(token);
  if (!token) {
    return NextResponse.json(
      { error: "User token is missing" },
      { status: 401 }
    );
  }

  try {
    const response = await axios.post(
      "https://lobster-app-9ufhi.ondigitalocean.app/datasources/gdrive/",
      {
        code,
      },
      {
        headers: {
          Authorization: `Token ${token.value}`,
        },
      }
    );

    const data = response.data;
    console.log("Response from backend:", data);


    if (response.status === 200) {

      return NextResponse.redirect("/insight");
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
