import { connectDb } from "@/utils/db";
import { Prompt } from "@/models/prompt";

export const GET = async (req: Request, res: Response) => {
  await connectDb();
  const prompts = await Prompt.find({}).populate("user");
  return new Response(JSON.stringify(prompts));
};
