import React, { useState } from "react";
import { MetaBlogLogo } from "./Svg images/MetaBlogLogo";
import { Search } from "./Svg images/Search";
import { useContext } from "react";
import { SearchContextValue } from "@/Context/SearchContext";
import { Layer } from "./Svg images/Layer";

export const Header = () => {
  const { searchValue, setSearchValue } = useContext(SearchContextValue);

  const [toggle, setToggle] = useState(false);
  function clickAddNavbar() {
    setToggle(!toggle);
  }

  return (
    <div className="pl-3 justify-between w-[390px] lg:w-[1917px] flex py-8 lg:px-[350px] relative">
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
      <button className="lg:hidden" onClick={clickAddNavbar}>
        <Layer />
      </button>
      <div className="lg:hidden absolute top-3 left-2">
        {toggle === true && (
          <div className="bg-[#F6F6F7]  w-[350px] h-[200px] flex flex-col p-10 gap-3 font-bold rounded-xl border-gray border-4">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
        )}
      </div>
    </div>
  );
};
