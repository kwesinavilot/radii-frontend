// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";
// import Cookies from "js-cookie";

// export async function GET(req: NextRequest) {
//   console.log("OAuth2 callback handler:");

//   const { searchParams } = new URL(req.url);
//   const state = searchParams.get("state");
//   const code = searchParams.get("code");
//   const scopes = searchParams.get("scopes");
//   const authuser = searchParams.get("authuser");
//   const prompt = searchParams.get("prompt");

//   console.log("Received query params:", state, code, scopes, authuser, prompt);

//   if (!code) {
//     return NextResponse.json(
//       { error: "Authorization code is missing" },
//       { status: 400 }
//     );
//   }

//   const token = req.cookies.get("auth_token");
//   console.log(token);
//   if (!token) {
//     return NextResponse.json(
//       { error: "User token is missing" },
//       { status: 401 }
//     );
//   }

//   try {
//     const response = await axios.post(
//       "https://lionfish-app-ahhfx.ondigitalocean.app/datasources/gdrive/",
//       {
//         code,
//       },
//       {
//         headers: {
//           Authorization: `Token ${token.value}`,
//         },
//       }
//     );

//     const data = response.data;
//     console.log("Response from backend:", data);

//     if (response.status === 200) {
//       const { email } = response.data;

//       return NextResponse.redirect(
//         `/dataSources?email=${encodeURIComponent(email)}`
//       );
//     } else {
//       return NextResponse.json(response.data, { status: response.status });
//     }
//   } catch (error) {
//     console.error("Error sending code to backend:", error);
//     return NextResponse.json(
//       { error: "Failed to send code to backend" },
//       { status: 500 }
//     );
//   }
// }

// import { NextRequest, NextResponse } from "next/server";
// import axios from "axios";
// import Cookies from "js-cookie";

// export async function GET(req: NextRequest) {
//   console.log("OAuth2 callback handler:");

//   const { searchParams } = new URL(req.url);
//   const state = searchParams.get("state");
//   const code = searchParams.get("code");
//   const scopes = searchParams.get("scopes");
//   const authuser = searchParams.get("authuser");
//   const prompt = searchParams.get("prompt");

//   console.log("Received query params:", state, code, scopes, authuser, prompt);

//   if (!code) {
//     return NextResponse.json(
//       { error: "Authorization code is missing" },
//       { status: 400 }
//     );
//   }

//   const token = req.cookies.get("auth_token");
//   console.log(token);
//   if (!token) {
//     return NextResponse.json(
//       { error: "User token is missing" },
//       { status: 401 }
//     );
//   }

//   try {
//     const response = await axios.post(
//       "https://lionfish-app-ahhfx.ondigitalocean.app/datasources/gdrive/",
//       {
//         code,
//       },
//       {
//         headers: {
//           Authorization: `Token ${token.value}`,
//         },
//       }
//     );

//     const data = response.data;
//     console.log("Response from backend:", data);

//     if (response.status >= 200 && response.status < 300) {
//       const { username } = response.data.integration["username"];
//       const baseUrl = req.nextUrl.origin;

//       return NextResponse.redirect(
//         `${baseUrl}/dataSources?email=${encodeURIComponent(username)}`
//       );
//     } else {
//       return NextResponse.json(response.data, { status: response.status });
//     }
//   } catch (error) {
//     console.error("Error sending code to backend:", error);
//     return NextResponse.json(
//       { error: "Failed to send code to backend" },
//       { status: 500 }
//     );
//   }
// }

import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import Cookies from "js-cookie";

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

  if (!token) {
    return NextResponse.json(
      { error: "User token is missing" },
      { status: 401 }
    );
  }

  try {
    const response = await axios.post(
      "https://lionfish-app-ahhfx.ondigitalocean.app/datasources/gdrive/",
      { code },
      {
        headers: {
          Authorization: `Token ${token}`,
        },
        withCredentials: true,
      }
    );

    const data = response.data;
    console.log("Response from backend:", data);

    if (response.status >= 200 && response.status < 300) {
      const { username } = response.data.integration;
      const baseUrl = req.nextUrl.origin;

      return NextResponse.redirect(
        `${baseUrl}/dataSources?email=${encodeURIComponent(username)}`
      );
    } else {
      return NextResponse.json(response.data, { status: response.status });
    }
  } catch (error) {
    console.error("Error sending code to backend:", error);
    return NextResponse.json(
      { error: "Failed to send code to backend" },
      { status: 500 }
    );
  }
}
