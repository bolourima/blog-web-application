import React from "react";
import { useEffect, useState } from "react";

export const Hero = () => {
  const [articles, setArticles] = useState([]);
  useEffect(() => {
    fetch("https://dev.to/api/articles")
      .then((response) => response.json())
      .then((data) => setArticles(data));
  }, []);

  const [index, setIndex] = useState(0);

  function rightClick() {
    if (index < articles.length - 1) {
      setIndex(index + 1);
    }
  }

  function leftClick() {
    if (index > 0) {
      setIndex(index - 1);
    }
  }
  function sendProps(event) {
    Router.push({
      pathname: "/card",
      query: {
        title,
        description,
      },
    });
  }
  const article = articles[index];
  return (
    <div className="mt-[100px] mb-[100px] w-[1917px] m-auto">
      <div className="flex flex-col m-auto items-center relative w-[1216px]">
        {article && (
          <a onClick={() => sendProps()} href={`/${article.id}`}>
            <div>
              <img
                src={
                  article.cover_image
                    ? article.cover_image
                    : "https://picsum.photos/536/354"
                }
                alt=""
                className="h-[600px] w-[1216px] rounded-xl"
              />
              <div className="absolute top-[340px] left-[10px] w-[598px] h-[252px] bg-white p-10 rounded-xl mx-30">
                <p className="flex flex-wrap mb-4">
                  {article.tag_list.map((tag) => {
                    return (
                      <label className="text-sm mr-2.5 mb-1 rounded-md text-white bg-[#4B6BFB] px-2.5 py-1">
                        {tag}
                      </label>
                    );
                  })}
                </p>
                <p className="text-4xl font-semibold mb-6 line-clamp-2">
                  {article.title}
                </p>
                <p>{article.readable_publish_date}</p>
              </div>
            </div>
          </a>
        )}
      </div>
      <div className="text-4xl gap-4 flex justify-end  w-[1216px] m-auto mt-[11px]">
        <button
          onClick={leftClick}
          className="h-10 w-10 flex justify-center items-center border-[1px] border-solid border-[#696A75] rounded-md"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
          >
            <path
              d="M8.5 16L1 8.5L8.5 1"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={rightClick}
          className="h-10 w-10 flex justify-center items-center border-[1px] border-solid border-[#696A75] rounded-md"
        >
          {" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="17"
            viewBox="0 0 9 17"
            fill="none"
          >
            <path
              d="M1 1L8.5 8.5L1 16"
              stroke="black"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
