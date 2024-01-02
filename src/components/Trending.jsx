import React from "react";
import { useEffect, useState } from "react";

export const Trending = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  function sendProps(event) {
    Router.push({
      pathname: "/card",
      query: {
        title,
        description,
      },
    });
  }
  return (
    <div className=" w-[1917px] flex flex-col items-center mb-[100px]">
      <p className="text-2xl w-[1231px] mb-[30px]">Trending</p>
      <div className="flex w-[1917px] m-auto justify-center gap-5">
        {articles.slice(0, 4).map((article) => {
          return (
            <a onClick={() => sendProps()} href={`/${article.id}`}>
              <div className="relative flex h-[320px] w-[289px]">
                <img src={article.cover_image} alt="" className="rounded-xl" />
                <div className="bg-black absolute h-[320px] w-[289px] opacity-35 rounded-xl"></div>
                <div className="absolute left-10 bottom-10 text-white">
                  <p className="flex flex-wrap">
                    {article.tag_list.map((tag) => {
                      return (
                        <label className="text-sm mr-1 mb-1 rounded-md text-white bg-[#4B6BFB] px-2.5 py-1">
                          {tag}
                        </label>
                      );
                    })}
                  </p>
                  {article.title}
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};
