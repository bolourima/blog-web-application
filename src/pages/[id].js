import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";

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
      <div className="lg:w-[1912px] lg:flex lg:justify-center">
        <div className="lg:w-[800px]  mt-6 lg:mt-[100px] ml-3">
          {filteredArticles.map((article) => {
            return (
              <div key={article.id}>
                <p className="text-2xl lg:text-4xl font-semibold">
                  {article.title}
                </p>
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
                    className="lg:h-[462px] lg:w-[800px] rounded-md"
                  />
                </div>
                <div className="font-base flex flex-col gap-4">
                  <p>
                    At GitHub Universe I had several conversations with
                    customers about their rollout of GitHub Copilot. While they
                    loved the product, they were flummoxed as to why their
                    rollout stagnated. They saw an early uptake of adoption
                    which leveled off, and in some cases even decreased. What
                    happened? What went wrong? What if I told you there's a few
                    simple things you can do to ensure a successful rollout of
                    GitHub Copilot and drive adoption. The third will surprise
                    you!
                  </p>
                  <b className="text-2xl">Influencers influence</b>
                  <p>
                    Help your developers learn where GitHub Copilot shines, and
                    the workloads it does best with. It can help developers with
                    syntax they often have to look up like regular expressions.
                    Or allow them to offload code they don't like to write, like
                    unit tests, or data transfer objects, or unit tests, or
                    boilerplate code, or unit tests. (Did I mention unit tests?)
                    There's also a skill to be learned in crafting prompts and
                    interacting with any AI tool, including GitHub Copilot. A
                    bit of time spent working with your team to learn how best
                    to write comments or manage code to generate better code
                    will drive productivity and happier developers.
                  </p>
                  <p>
                    This doesn't need to be formal classroom training (although
                    that can certainly help). It can take the form of lunch and
                    learns, or a self-guided workshop, or by allowing your
                    internal influencers to influence.
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default blogID;
