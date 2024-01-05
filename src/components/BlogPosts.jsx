import { Router } from "next/router";
import React, { useEffect } from "react";
import { useState } from "react";
import { useContext } from "react";
import { SearchContextValue } from "@/Context/SearchContext";

export const BlogPosts = () => {
  const { searchValue, setSearchValue } = useContext(SearchContextValue);
  const [articles, setArticles] = useState([]);
  // console.log("Blog search value", searchValue);
  const searchArticles = articles.filter((article) =>
    article.title.toLowerCase().includes(searchValue.toLowerCase())
  );
  // console.log("searchArticels", searchArticles);

  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);
  // console.log("articles", articles);
  function sendProps() {
    Router.push({
      pathname: "/card",
      query: {
        title,
        description,
      },
    });
  }
  return (
    <div className="lg:w-[1917px] m-auto">
      <div className="lg:w-[1216px] m-auto">
        <h2 className="flex justify-center mt-6 lg:text-2xl mb-8 lg:flex lg:justify-start font-bold">
          All Blog Post
        </h2>
        <div className="hidden lg:flex gap-4 mb-8">
          <button>All</button>
          <button>Design</button>
          <button>Travel</button>
          <button>Fashion</button>
          <button>Technology</button>
          <button>Branding</button>
        </div>
      </div>
      <div className="lg:w-[1216px] flex justify-center m-auto">
        <div className="hidden lg:block lg:grid grid-cols-3 gap-5 ">
          {searchArticles.map((article) => {
            return (
              <a onClick={() => sendProps()} href={`/${article.id}`} key={article.id}>
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
                      {article.tag_list.map((tag, index) => {
                        return (
                          <label key={index} className="text-sm mr-1 mb-1 rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] px-2.5 py-1">
                            {tag}
                          </label>
                        );
                      })}
                    </p>
                    <p className="font-semibold text-2xl line-clamp-2">
                      {article.title}
                    </p>
                    <div className="flex items-center text-[#97989F] text-base">
                      <img
                        className="h-9 w-9 rounded-full mr-3"
                        src={article.user.profile_image}
                        alt=""
                      />
                      {article.user.name}
                      <div className="ml-5">
                        {article.readable_publish_date}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
          {searchArticles.length == 0 && <p> Article not found</p>}
        </div>
        <div className="block lg:hidden grid-cols-1 gap-5">
          {searchArticles.slice(0, 6).map((article) => {
            return (
              <a
                onClick={() => sendProps()}
                href={`/${article.id}`}
                key={article.id}
              >
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
                      {article.tag_list.map((tag, index) => {
                        // console.log(index)
                        return (
                          <label
                            key={index}
                            className="text-sm mr-1 mb-1 rounded-md text-[#4B6BFB] bg-[#4b6bfb0d] px-2.5 py-1"
                          >
                            {tag}
                          </label>
                        );
                      })}
                    </p>
                    <p className="font-semibold text-2xl line-clamp-2">
                      {article.title}
                    </p>
                    <div className="flex items-center text-[#97989F] text-base">
                      <img
                        className="h-9 w-9 rounded-full mr-3"
                        src={article.user.profile_image}
                        alt=""
                      />
                      {article.user.name}
                      <div className="ml-5">
                        {article.readable_publish_date}
                      </div>
                    </div>
                  </div>
                </div>
              </a>
            );
          })}
          {searchArticles.length == 0 && <p> Article not found</p>}
        </div>
      </div>
    </div>
  );
};
