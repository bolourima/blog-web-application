import React from "react";
import { MetaBlogLogo } from "./Svg images/MetaBlogLogo";
import { Search } from "./Svg images/Search";

export const Header = () => {
  return (
    <div className="flex w-[1917px] py-8 px-[350px]">
      <MetaBlogLogo />
      <div className="w-[667px] flex justify-center items-center gap-10 text-[#3B3C4A] text-base">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <button>Contact</button>
      </div>
      <div className="ml-5 flex w-[166px] justify-center items-center bg-[#F4F4F5] py-2 pl-4 pr-2 rounded-md">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#F4F4F5] w-[114px]"
        ></input>
        <div className="bg-[#F4F4F5] h-4 w-4">
          <Search />
        </div>
      </div>
    </div>
  );
};
