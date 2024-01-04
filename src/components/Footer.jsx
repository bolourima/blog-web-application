import React from "react";
import { FbLogo } from "./Svg images/FbLogo";
import { TwitterLogo } from "./Svg images/TwitterLogo";
import { InstaLogo } from "./Svg images/InstaLogo";
import { Linkedin } from "./Svg images/Linkedin";
import { MetaBlogAllRightsLogo } from "./Svg images/MetaBlogAllRightsLogo";

export const Footer = () => {
  return (
    <div className="w-[400px] bg-[#E8E8EA]  lg:w-[1920px] lg:px-[352px] pt-6 lg:pt-[64px] mt-6 lg:mt-28 pb-9">
      <div className="lg:w-[1215px] lg:flex">
        <div className="lg:w-[280px]">
          <b className="hidden lg:text-lg lg:block">About</b>
          <p className="hidden lg:mt-3 lg:block">
            Empower your coding journey with our MetaBlog, designed to
            streamline your development process. Access a rich set of coding
            tools, collaborate seamlessly with fellow developers.
          </p>
          <div className="hidden lg:mt-6">
            <p>Email: info@metablog.net</p>
            <p>Phone: 976-2276169</p>
          </div>
        </div>
        <div className="lg:w-[521px] ml-[170px] lg:flex justify-center">
          <div className="flex flex-col">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="lg:w-[374px] ml-[125px] mt-6 flex gap-6">
          <FbLogo />
          <TwitterLogo />
          <InstaLogo />
          <Linkedin />
        </div>
      </div>
      <div className="mt-7 ml-6  lg:border-t-[1px] border-[#DCDDDF]">
        <div className="flex  lg:justify-between lg:mt-7">
          <div>
            <MetaBlogAllRightsLogo />
          </div>
          <div className="hidden lg:flex gap-7">
            <p>Terms of Use</p>
            <p>Privacy Policy</p>
            <p>Cookie Policy</p>
          </div>
        </div>
      </div>
    </div>
  );
};
