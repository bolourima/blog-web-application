import React from "react";
import { MetaBlogLogo } from "./Svg images/MetaBlogLogo";
import { Search } from "./Svg images/Search";
import { useContext } from "react";
import { SearchContextValue } from "@/Context/SearchContext";
import { Layer } from "./Svg images/Layer";

export const Header = () => {
  const { searchValue, setSearchValue } = useContext(SearchContextValue);
  return (
    <div className="ml-6 justify-between w-[390px] lg:w-[1917px] flex py-8 lg:px-[350px]">
      <MetaBlogLogo />
      <div className="hidden lg:w-[667px] lg:flex justify-center items-center gap-10 text-[#3B3C4A] text-base">
        <a href="/">Home</a>
        <a href="/blog">Blog</a>
        <a href="/contact">Contact</a>
      </div>
      <div className="hidden lg:ml-5 lg:flex w-[166px] justify-center items-center bg-[#F4F4F5] py-2 pl-4 pr-2 rounded-md">
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search"
          className="bg-[#F4F4F5] w-[114px]"
        ></input>
        <div className="bg-[#F4F4F5] h-4 w-4">
          <Search />
        </div>
      </div>
      <div className="block lg:hidden">
        <Layer />
      </div>
    </div>
  );
};
