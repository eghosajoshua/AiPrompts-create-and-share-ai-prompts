"use client";
import React, { useEffect, useState } from "react";
import Feed from "@/components/feed";

const Profile = ({
  name,
  handleDelete,
  handleEdit,
  userPrompts,
}: {
  userPrompts: any;
  handleEdit?: Function;
  name?: string;
  handleDelete?: Function;
}) => {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="font-bold text-2xl">
        {name != null
          ? userPrompts.length > 0 && userPrompts[0].user.username
          : "My"}{" "}
        Profile
      </h1>
      <div className="max-w-2xl justify-center items-center mt-5 m-auto flex flex-wrap gap-3">
        {userPrompts.map(
          (
            pData: { _id: string; prompt: string; hashtag: string; user: {} },
            index: number
          ) => (
            <Feed
              prompt={pData.prompt}
              id={pData._id}
              hashtag={pData.hashtag}
              user={pData.user}
              key={index}
              handleDelete={handleDelete}
              handleEdit={handleEdit}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Profile;
