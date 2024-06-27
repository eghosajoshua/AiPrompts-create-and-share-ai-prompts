"use client";
import Feed from "@/components/feed";
import { it } from "node:test";
import { useState, useEffect, ReactEventHandler, ChangeEvent } from "react";

const Home = () => {
  const [data, setData] = useState([]);
  const [displayPrompt, setDisplayPrompt] = useState([]);

  useEffect(() => {
    fetch("/api/get-prompts")
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setDisplayPrompt(data);
        console.log(data);
      });
  }, []);

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTerm = e.target.value;

    if (searchTerm == "") {
      setDisplayPrompt(data);
      return;
    }
    let dataCopy = [...data];
    const filteredData = dataCopy.filter((item: any) => {
      return (
        item.prompt.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.hashtag.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.user.username.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
    setDisplayPrompt(filteredData);
  };

  return (
    <section className="w-full flex-col justify-center items-center p-3">
      <h1 className="text-center font-extrabold text-5xl">
        Discover & Share <br className="md:hidden" />
        <span className="font-extrabold bg-gradient-to-r from-yellow-500  to-yellow-500   via-orange-600 bg-clip-text  text-transparent">
          AI-Powered Prompts
        </span>
      </h1>
      <p className="mt-3 text-center text-lg text-gray-700">
        AiPrompts is a open source Ai prompting tool for modern world to
        discover, create and share creative prompts
      </p>
      <div className="bg-white shadow-lg m-auto flex justify-center items-center p-1 rounded-lg mt-5 max-w-2xl">
        <input
          className="w-full p-2 outline-none"
          placeholder="search"
          type="search"
          name=""
          id=""
          onChange={(e) => handleSearchChange(e)}
        />
      </div>
      <div className="max-w-2xl justify-center items-center mt-5 m-auto flex flex-wrap gap-3">
        {displayPrompt.map(
          (pData: { prompt: string; hashtag: string; user: {} }, index) => (
            <Feed
              prompt={pData.prompt}
              hashtag={pData.hashtag}
              user={pData.user}
              key={index}
            />
          )
        )}
      </div>
    </section>
  );
};

export default Home;
