"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

/**
 * Renders a form for creating a new prompt.
 * The form includes fields for the prompt text and a tag.
 * When the form is submitted, the `handleSubmit` function is called.
 */
const CreatePost = () => {
  const { data: session } = useSession();
  const router = useRouter();

  const [formData, setFormData] = useState({
    prompt: "",
    hashtag: "",
    user: session?.user.id,
  });

  useEffect(() => {
    console.log(formData);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("/api/create-prompt", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        if (res.ok) {
          router.push("/");
        }
      })
      .catch((err) => {
        console.log(err, "error message");
      });
  };

  return (
    <div
      className="p-3 max-w-3xl m-auto w-full
     "
    >
      <h1 className="font-bold text-2xl mb-5">Create Prompt</h1>

      <form
        action=""
        className="bg-slate-200 w-full p-3 shadow rounded-md flex flex-col gap-3"
        onSubmit={(e) => handleSubmit(e)}
      >
        <label htmlFor="prompt">Prompt</label>
        <textarea
          className="w-full p-2 shadow rounded-md"
          id="prompt"
          required
          onChange={(e) => setFormData({ ...formData, prompt: e.target.value })}
          name="prompt"
        />
        <label htmlFor="tag">Tag</label>
        <input
          type="text"
          required
          name="tag"
          onChange={(e) =>
            setFormData({ ...formData, hashtag: e.target.value })
          }
          id="tag"
          className="w-full p-2 shadow rounded-md"
        />
        <button
          type="submit"
          className="w-full bg-blue-300 text-white text-bold p-2 mt-4 rounded-md shadow "
        >
          Create Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
