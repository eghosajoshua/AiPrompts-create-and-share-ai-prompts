import { Schema, models, model } from "mongoose";

const PromptSchema = new Schema({
  prompt: {
    type: String,
    required: [true, "Prompt is required"],
  },
  hashtag: {
    type: String,
    required: [true, "Tag is required"],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

export const Prompt = models.Prompt || model("Prompt", PromptSchema);
