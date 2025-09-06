import connect from "@/lib/connect";
import messageModel from "@/models/messageModel";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { name, email, msg } = await req.json();
    if (!name || !email || !msg) {
      return NextResponse.json(
        { message: "fill out all fields" },
        { status: 400 }
      );
    }
    await connect();
    await messageModel.create({
      name, email, msg
    });
    return NextResponse.json(
      { message: "Message sent successfully!" },
      { status: 200 }
    );
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    await connect();
    const messages = await messageModel.find({});
    return NextResponse.json(
      { message: "Messages fetched successfully", messages },
      { status: 200 }
    );
  } catch (err: unknown) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { msgId } = await req.json();
    await connect();
    await messageModel.findByIdAndDelete(msgId);
    return NextResponse.json(
      { message: "Message deleted" },
      { status: 200 }
    );
  } catch (err) {
    const error = err instanceof Error ? err.message : String(err);
    return NextResponse.json(
      { message: "Internal server error", error },
      { status: 500 }
    );
  }
}
