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
    <div className="flex-wrap w-[400px] lg:w-[1917px] lg:flex lg:flex-col lg:items-center lg:mb-[100px]">
      <p className="flex justify-center lg:flex lg:justify-start lg:text-2xl lg:w-[1231px] mb-[30px] font-bold">
        Trending
      </p>
      <div className="hidden lg:flex lg:w-[1917px] m-auto justify-center gap-5">
        {articles.slice(5, 9).map((article) => {
          return (
            <a
              onClick={() => sendProps()}
              href={`/${article.id}`}
              key={article.id}
            >
              <div className="relative flex h-[320px] w-[289px]">
                <img
                  src={
                    article.cover_image
                      ? article.cover_image
                      : "https://picsum.photos/536/354"
                  }
                  alt=""
                  className="rounded-xl"
                />
                <div className="bg-black absolute h-[320px] w-[289px] opacity-35 rounded-xl"></div>
                <div className="absolute left-10 bottom-10 text-white">
                  <p className="flex flex-wrap">
                    {article.tag_list.map((tag, index) => {
                      return (
                        <label
                          key={index}
                          className="text-sm mr-1 mb-1 rounded-md text-white bg-[#4B6BFB] px-2.5 py-1"
                        >
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
      <div className="w-[390px] lg:hidden m-auto flex justify-center gap-5">
        {articles.slice(4, 5).map((article) => {
          return (
            <a
              onClick={() => sendProps()}
              href={`/${article.id}`}
              key={article.id}
            >
              <div className="relative flex h-[320px] w-[289px]">
                <img
                  src={
                    article.cover_image
                      ? article.cover_image
                      : "https://picsum.photos/536/354"
                  }
                  alt=""
                  className="rounded-xl"
                />
                <div className="bg-black absolute h-[320px] w-[289px] opacity-35 rounded-xl"></div>
                <div className="absolute left-10 bottom-10 text-white">
                  <p className="flex flex-wrap">
                    {article.tag_list.map((tag, index) => {
                      return (
                        <label
                          key={index}
                          className="text-sm mr-1 mb-1 rounded-md text-white bg-[#4B6BFB] px-2.5 py-1"
                        >
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
