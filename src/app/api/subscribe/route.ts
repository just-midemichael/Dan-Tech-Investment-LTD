import { NextResponse } from "next/server";
import axios from "axios";

export async function POST(req: Request) {
  try {
    const { email } = await req.json();
    if (!email) {
      return NextResponse.json(
        { success: false, error: "Email is required" },
        { status: 400 }
      );
    }

    const apiKey = process.env.MAILCHIMP_API_KEY;
    const serverPrefix = process.env.MAILCHIMP_API_SERVER;
    const audienceId = process.env.MAILCHIMP_AUDIENCE_ID;
    if (!apiKey || !serverPrefix || !audienceId) {
      return NextResponse.json(
        {
          success: false,
          error: "Missing Mailchimp configuration credential(s)",
        },
        { status: 500 }
      );
    }
    const endpoint = `https://${serverPrefix}.api.mailchimp.com/3.0/lists/${audienceId}/members`;

    await axios.post(
      endpoint,
      {
        email_address: email,
        status: "subscribed",
      },
      {
        headers: {
          Authorization: `apikey ${apiKey}`,
          "Content-Type": "application/json",
        },
      }
    );
    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      const detail = error.response?.data?.detail || error.message;

      // Check for "already subscribed"
      if (
        error.response?.status === 400 &&
        detail?.toLowerCase().includes("is already a list member")
      ) {
        return NextResponse.json(
          { success: false, error: "Email already subscribed" },
          { status: 409 }
        );
      }
      return NextResponse.json(
        { success: false, error: detail },
        { status: 500 }
      );
    } else {
      return NextResponse.json(
        { success: false, error: "Unexpected error" },
        { status: 500 }
      );
    }
  }
}
