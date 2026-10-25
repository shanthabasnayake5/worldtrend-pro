
import { Resend } from "resend";
import { Redis } from "@upstash/redis";
import { Ratelimit } from "@upstash/ratelimit";

export const runtime = "nodejs";

const resend = new Resend(process.env.RESEND_API_KEY);

const redisUrl = process.env.UPSTASH_REDIS_REST_URL;
const redisToken = process.env.UPSTASH_REDIS_REST_TOKEN;

const redis =
  redisUrl && redisToken
    ? new Redis({
        url: redisUrl,
        token: redisToken,
      })
    : null;

const ratelimit = redis
  ? new Ratelimit({
      redis,
      limiter: Ratelimit.slidingWindow(5, "10 m"),
      prefix: "worldtrendpro:contact",
    })
  : null;

type ContactPayload = {
  name?: unknown;
  email?: unknown;
  subject?: unknown;
  message?: unknown;
  website?: unknown;
};

function isText(value: unknown): value is string {
  return typeof value === "string";
}

function getClientIp(request: Request): string | null {
  // Vercel provides this header for requests reaching its platform.
  // Do not trust arbitrary forwarded-IP chains on other hosting platforms.
  const forwardedFor = request.headers.get("x-forwarded-for");

  if (forwardedFor) {
    const firstIp = forwardedFor.split(",")[0]?.trim();

    if (firstIp && firstIp.length <= 100) {
      return firstIp;
    }
  }

  return request.headers.get("x-real-ip");
}

export async function POST(request: Request) {
  try {
    if (!process.env.RESEND_API_KEY || !process.env.RESEND_TEST_TO) {
      console.error("Contact email environment variables are missing");

      return Response.json(
        { error: "Email service is not configured." },
        { status: 500 },
      );
    }

    if (!ratelimit) {
      console.error("Upstash Redis environment variables are missing");

      return Response.json(
        { error: "Request protection is not configured." },
        { status: 503 },
      );
    }

    if (
      !request.headers
        .get("content-type")
        ?.toLowerCase()
        .includes("application/json")
    ) {
      return Response.json(
        { error: "Content-Type must be application/json." },
        { status: 415 },
      );
    }

    const contentLength = Number(
      request.headers.get("content-length") ?? "0",
    );

    if (contentLength > 12_000) {
      return Response.json(
        { error: "Request is too large." },
        { status: 413 },
      );
    }

    const clientIp = getClientIp(request);

    if (!clientIp) {
      return Response.json(
        { error: "Unable to verify your request." },
        { status: 400 },
      );
    }

    // Allow at most 5 requests per IP in a rolling 10-minute window.
    let limitResult;

    try {
      limitResult = await ratelimit.limit(clientIp);
    } catch (error) {
      console.error(
        "Rate limit service error:",
        error instanceof Error ? error.message : "Unknown error",
      );

      // Fail closed so a Redis outage cannot bypass the protection.
      return Response.json(
        { error: "Request protection is temporarily unavailable." },
        { status: 503 },
      );
    }

    if (!limitResult.success) {
      return Response.json(
        { error: "Too many messages. Please try again in a few minutes." },
        {
          status: 429,
          headers: {
            "Retry-After": String(
              Math.max(
                1,
                Math.ceil((limitResult.reset - Date.now()) / 1000),
              ),
            ),
          },
        },
      );
    }

    const payload: ContactPayload = await request
      .json()
      .catch(() => ({}));

    // Honeypot: ordinary visitors should leave this field empty.
    if (payload.website !== undefined) {
      if (!isText(payload.website)) {
        return Response.json(
          { error: "Invalid submission." },
          { status: 400 },
        );
      }

      if (payload.website.trim() !== "") {
        return Response.json(
          { message: "Your message has been received." },
          { status: 200 },
        );
      }
    }

    const { name, email, subject, message } = payload;

    if (
      !isText(name) ||
      !isText(email) ||
      !isText(subject) ||
      !isText(message)
    ) {
      return Response.json(
        { error: "Please provide all required fields." },
        { status: 400 },
      );
    }

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanSubject = subject.trim();
    const cleanMessage = message.trim();

    if (!cleanName || !cleanEmail || !cleanSubject || !cleanMessage) {
      return Response.json(
        { error: "All fields are required." },
        { status: 400 },
      );
    }

    if (
      cleanName.length > 100 ||
      cleanEmail.length > 254 ||
      cleanSubject.length > 150 ||
      cleanMessage.length > 5000
    ) {
      return Response.json(
        { error: "One or more fields are too long." },
        { status: 400 },
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(cleanEmail)) {
      return Response.json(
        { error: "Please provide a valid email address." },
        { status: 400 },
      );
    }

    const { error } = await resend.emails.send({
      from: "WorldTrend Pro <onboarding@resend.dev>",
      to: [process.env.RESEND_TEST_TO],
      replyTo: cleanEmail,
      subject: `Contact form: ${cleanSubject}`,
      text: [
        `Name: ${cleanName}`,
        `Email: ${cleanEmail}`,
        `Subject: ${cleanSubject}`,
        "",
        "Message:",
        cleanMessage,
      ].join("\n"),
    });

    if (error) {
      console.error(
        "Resend email error:",
        error.name,
        error.message,
      );

      return Response.json(
        { error: "Unable to send your message right now." },
        { status: 502 },
      );
    }

    return Response.json(
      { message: "Your message has been sent successfully." },
      { status: 200 },
    );
  } catch (error) {
    console.error(
      "Contact API error:",
      error instanceof Error ? error.message : "Unknown error",
    );

    return Response.json(
      { error: "An unexpected error occurred." },
      { status: 500 },
    );
  }
}
