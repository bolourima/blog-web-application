import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";

const blogID = () => {
  const { query } = useRouter();
  const [filteredArticles, setFilteredArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("https://dev.to/api/articles");
        const data = await response.json();
        setFilteredArticles(
          data.filter((article) => article.id === parseInt(query.id, 10))
        );
      } catch (error) {
        console.log("error fetching articles:", error);
      }
    };
    if (query?.id) {
      fetchArticles();
    }
  }, [query?.id]);
  return (
    <div>
      <Header />
      <p className="w-[800px] m-auto mt-[100px]">
        {filteredArticles.map((article) => {
          return (
            <div>
              <p className="text-4xl font-semibold">{article.title}</p>

              <div className="flex items-center text-[#97989F] text-sm mt-5 mb-8">
                <img
                  className="h-9 w-9 rounded-full mr-3"
                  src={article.user.profile_image}
                  alt=""
                />
                {article.user.name}
                <div className="ml-5">{article.readable_publish_date}</div>
              </div>
              <div className="mb-4">
                <img
                  src={
                    article.cover_image
                      ? article.cover_image
                      : "https://picsum.photos/536/354"
                  }
                  alt=""
                  className="h-[462px] w-[800px] rounded-md"
                />
              </div>
              <div className="font-base">
                <p>
                  Traveling is an enriching experience that opens up new
                  horizons, exposes us to different cultures, and creates
                  memories that last a lifetime. However, traveling can also be
                  stressful and overwhelming, especially if you don't plan and
                  prepare adequately. In this blog article, we'll explore tips
                  and tricks for a memorable journey and how to make the most of
                  your travels.
                </p>
                <p>
                  One of the most rewarding aspects of traveling is immersing
                  yourself in the local culture and customs. This includes
                  trying local cuisine, attending cultural events and festivals,
                  and interacting with locals. Learning a few phrases in the
                  local language can also go a long way in making connections
                  and showing respect.
                </p>
              </div>
            </div>
          );
        })}
      </p>
    </div>
  );
};

export default blogID;
