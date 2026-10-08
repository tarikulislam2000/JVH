import { NextResponse, type NextRequest } from "next/server";
import { z } from "zod";

const schema = z.object({ email: z.email() });

export async function POST(request: NextRequest) {
  const form = await request.formData();
  const parsed = schema.safeParse({ email: form.get("email") });
  const status = parsed.success ? "subscribed" : "invalid";
  // TODO: store parsed.data.email with your email provider (Resend, Mailchimp, …)
  return NextResponse.redirect(new URL(`/?newsletter=${status}`, request.url), 303);
}
