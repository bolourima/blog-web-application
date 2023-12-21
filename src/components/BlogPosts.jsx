import React, { useEffect } from "react";
import { useState } from "react";

export const BlogPosts = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  console.log("articles", articles);
  return (
    <>
      <div className="grid grid-cols-3 gap-5">
        {articles.map((article) => {
          return (
            <div className="border border-solid rounded-xl p-4 w-[392px]">
              <div className="mb-4">
                <img
                  src={
                    article.cover_image
                      ? article.cover_image
                      : "https://picsum.photos/536/354"
                  }
                  alt=""
                  className="h-[240px] w-[360px] rounded-md"
                />
              </div>
              <div className="h-[188px] p-2 flex justify-between flex-col">
                <p className="flex flex-wrap">
                  {article.tag_list.map((tag) => {
                    return (
                      <label className="text-sm mr-1 mb-1 rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] px-2.5 py-1">
                        {tag}
                      </label>
                    );
                  })}
                </p>
                <p className="font-semibold text-2xl line-clamp-3">
                  {article.title}
                </p>
                <div className="flex items-center text-[#97989F] text-base">
                  <img
                    className="h-9 w-9 rounded-full mr-3"
                    src={article.user.profile_image}
                    alt=""
                  />
                  {article.user.name}
                  <div className="ml-5">{article.readable_publish_date}</div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
