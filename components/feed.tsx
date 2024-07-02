import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { usePathname } from "next/navigation";

const Feed = ({
  id,
  prompt,
  hashtag,
  user,
  handleDelete,
  handleEdit,
}: {
  id?: string;
  prompt: string;
  hashtag: string;
  user: any;
  handleDelete?: Function;
  handleEdit?: Function;
}) => {
  const { data: session } = useSession();
  const path = usePathname();
  return (
    <div className="flex  overflow-hidden justify-center items-center p-4 bg-white flex-col border-b-2 flex-1 border-gray-300 rounded-lg shadow-lg w-full min-w-fit">
      <Link
        href={`/profile/${user?._id}`}
        className="flex w-full items-center gap-2"
      >
        <Image
          src={user?.image}
          width={40}
          height={40}
          alt="user-img"
          className="rounded-full shadow-lg cursor-pointer hover:scale-105 transition transform duration-150 ease-out "
        />
        <div className="flex flex-col flex-1">
          <span className="text-wrap break-words">{user?.username}</span>
          <span className="text-sm text-gray-500">{user?.email}</span>
        </div>
      </Link>

      <hr />
      <p className="w-full my-3">{prompt}</p>
      <p className=" w-full text-end bg-green-50 rounded-full px-4 py-1 text-green-600 font-bold">
        {hashtag}
      </p>

      <div className="mt-4 flex gap-3 justify-end items-end w-full">
        {session?.user.id == user._id && path == "/profile" && (
          <>
            <button
              onClick={() => handleDelete && handleDelete(id)}
              className="bg-red-100 text-red-400 p-1 px-3  rounded-full"
            >
              Delete
            </button>
            <button
              onClick={() => handleEdit && handleEdit(id)}
              className="bg-yellow-100 text-yellow-600 p-1 px-3  rounded-full"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Feed;
