import { NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY, // defaults to process.env["OPENAI_API_KEY"]
});

export async function POST(req: Request) {
  console.log("post request done successfully");
  try {
    const body = await req.json();
    const { messages } = body;
    if (!openai.apiKey) {
      return new NextResponse("Api key not found", { status: 400 });
    }
    if (!messages) {
      return new NextResponse("Messages are required", { status: 500 });
    }
    const chatCompletion = await openai.chat.completions.create({
      messages: [{ role: "user", content: "Say this is a test" }],
      model: "gpt-3.5-turbo",
    });
    return NextResponse.json(chatCompletion.choices[0].message);
  } catch (error) {
    console.log(error);
    return new NextResponse("internal Error", { status: 500 });
  }
}
