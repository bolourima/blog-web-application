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
    <div className="mb-4 lg:mt-[100px] lg:mb-[100px] lg:w-[1917px]">
      <div className="flex flex-col m-auto items-center lg:relative lg:w-[1230px]">
        {article && (
          <a
            onClick={() => sendProps()}
            href={`/${article.id}`}
            key={article.id}
          >
            <div>
              <img
                src={
                  article.cover_image
                    ? article.cover_image
                    : "https://picsum.photos/536/354"
                }
                alt=""
                className="ml-4 w-[380px] h-[210px] lg:h-[600px] lg:w-[1230px] rounded-xl"
              />
              <div className="absolute hidden lg:block top-[340px] left-[10px] w-[598px] h-[252px] bg-white p-10 rounded-xl mx-30">
                <p className="flex flex-wrap mb-4">
                  {article.tag_list.map((tag, index) => {
                    return (
                      <label
                        key={index}
                        className="text-sm mr-2.5 mb-1 rounded-md text-white bg-[#4B6BFB] px-2.5 py-1"
                      >
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
      <div className="ml-3 w-[390px] flex justify-center lg:text-4xl gap-4 lg:flex lg:justify-end  lg:w-[1216px] lg:m-auto mt-3 lg:mt-[11px]">
        <button
          onClick={leftClick}
          className="h-6 w-6 lg:h-10 lg:w-10 flex justify-center items-center lg:border-[1px] border-solid border-[#696A75] rounded-md"
        >
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={rightClick}
          className="h-6 w-6 lg:h-10 lg:w-10 flex justify-center items-center lg:border-[1px] lg:border-solid lg:border-[#696A75] rounded-md"
        >
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
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
