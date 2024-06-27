import mongoose from "mongoose";
import { connectDb } from "@/utils/db";
import { Prompt } from "@/models/prompt";

export const DELETE = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    await connectDb();
    if (mongoose.isValidObjectId(params.id)) {
      await Prompt.findByIdAndDelete(params.id);
    }
    return new Response(JSON.stringify({ message: "success" }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (err) {
    return new Response(JSON.stringify({ message: "Failed to delete" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};

export const PATCH = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  const prompt = await req.json();

  const currentPrompt = await Prompt.findById(params.id);

  currentPrompt.prompt = prompt.prompt;
  currentPrompt.hashtag = prompt.hashtag;
  currentPrompt.save();

  return new Response(JSON.stringify({ message: "success" }), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  try {
    if (mongoose.isValidObjectId(params.id)) {
      const prompt = await Prompt.findById(params.id);
      return new Response(JSON.stringify(prompt), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }
  } catch (err) {
    return new Response(JSON.stringify({ message: "Failed to get prompt" }), {
      status: 500,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
