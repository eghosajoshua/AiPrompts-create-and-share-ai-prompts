"use client";
import React, { useEffect, useState } from "react";
import Profile from "@/components/profile";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const ProfilePage = () => {
  const router = useRouter();
  const { data: session, status } = useSession();
  const userId = session?.user.id;
  const [userPrompts, setUserPrompts] = useState<
    { _id: string; prompt: string; hashtag: string; user: any }[]
  >([]);

  useEffect(() => {
    if (status == "authenticated") {
      try {
        fetch("/api/get-prompts/" + userId)
          .then((res) => res.json())
          .then((data) => setUserPrompts(data));
      } catch (err) {
        console.log(err);
      }
    }
  });

  const handleDelete = (id: string) => {
    fetch("/api/modify-prompts/" + id, {
      method: "DELETE",
    })
      .then((res) => {
        if (res.ok) {
          let newData = [...userPrompts].filter(
            (pData: {
              _id: string;
              prompt: string;
              hashtag: string;
              user: {};
            }) => pData._id !== id
          );

          setUserPrompts(newData);
        }
      })
      .catch((err) => {
        console.log(err);
        alert("Failed to delete prompt");
      });
  };
  const handleEdit = (id: string) => {
    router.push(`/edit-prompt/${id}`);
  };

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <Profile
      handleEdit={handleEdit}
      userPrompts={userPrompts}
      handleDelete={handleDelete}
    />
  );
};

export default ProfilePage;
