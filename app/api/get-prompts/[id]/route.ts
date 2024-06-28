import { connectDb } from "@/utils/db";
import { Prompt } from "@/models/prompt";
import { User } from "@/models/user";

export const GET = async (
  req: Request,
  { params }: { params: { id: string } }
) => {
  await connectDb();
  const prompts = await Prompt.find({ user: params.id }).populate("user");
  return new Response(JSON.stringify(prompts));
};
