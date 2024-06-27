"use client";
import React, { useState, useEffect } from "react";
import Profile from "@/components/profile";
import { useParams } from "next/navigation";

const ProfilePage = () => {
  const params = useParams<{ id: string }>();
  const [userPrompts, setUserPrompts] = useState<
    { _id: string; prompt: string; hashtag: string; user: any }[]
  >([]);

  useEffect(() => {
    try {
      fetch("/api/get-prompts/" + params.id)
        .then((res) => res.json())
        .then((data) => setUserPrompts(data));
    } catch (err) {
      console.log(err);
    }
  }, []);

  return <Profile userPrompts={userPrompts} name="other" />;
};

export default ProfilePage;
