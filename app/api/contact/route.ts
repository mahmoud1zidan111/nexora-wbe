import { NextRequest, NextResponse } from "next/server";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function normalize(value: FormDataEntryValue | null): string {
  return typeof value === "string" ? value.trim() : "";
}

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    const name = normalize(formData.get("name"));
    const email = normalize(formData.get("email"));
    const service = normalize(formData.get("service"));
    const budget = normalize(formData.get("budget"));
    const company = normalize(formData.get("company"));
    const scope = normalize(formData.get("scope"));

    if (!name || !email || !service || !budget || !scope) {
      return NextResponse.json(
        {
          success: false,
          message: "Please complete all required fields before sending your request.",
        },
        { status: 400 },
      );
    }

    if (!emailPattern.test(email)) {
      return NextResponse.json(
        {
          success: false,
          message: "Please provide a valid email address.",
        },
        { status: 400 },
      );
    }

    const forminitToken = process.env.FORMINIT_TOKEN;
    const forminitEndpoint = process.env.FORMINIT_ENDPOINT;

    if (!forminitToken || !forminitEndpoint) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message. Please try again later.",
        },
        { status: 500 },
      );
    }

    const payload = new FormData();
    payload.set("fi-sender-fullName", name);
    payload.set("fi-sender-email", email);
    payload.set("fi-text-message", scope);
    if (company) payload.set("fi-sender-company", company);
    payload.set("fi-select-service", service);
    payload.set("fi-select-budget", budget);

    const response = await fetch(forminitEndpoint, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${forminitToken}`,
      },
      body: payload,
      cache: "no-store",
    });

    if (!response.ok) {
      return NextResponse.json(
        {
          success: false,
          message: "Unable to send your message. Please try again later.",
        },
        { status: 502 },
      );
    }

    return NextResponse.json({
      success: true,
      message: "Message sent successfully",
    });
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to send your message. Please try again later.",
      },
      { status: 500 },
    );
  }
}
