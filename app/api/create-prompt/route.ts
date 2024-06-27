import mongoose from "mongoose";
import { Prompt } from "@/models/prompt";
import { connectDb } from "@/utils/db";

export const POST = async (req: Request) => {
  let body = await req.json();
  console.log(body);

  try {
    await connectDb();
    let prompt = new Prompt(body);
    await prompt.save();

    return new Response(JSON.stringify({}), {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return new Response("error", {
      status: 500,
    });
  }
};
