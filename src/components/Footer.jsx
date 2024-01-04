import React from "react";
import { FbLogo } from "./Svg images/FbLogo";
import { TwitterLogo } from "./Svg images/TwitterLogo";
import { InstaLogo } from "./Svg images/InstaLogo";
import { Linkedin } from "./Svg images/Linkedin";
import { MetaBlogAllRightsLogo } from "./Svg images/MetaBlogAllRightsLogo";

export const Footer = () => {
  return (
    <div className="w-[1920px] bg-[#E8E8EA] px-[352px] pt-[64px] mt-28 pb-9">
      <div className="w-[1215px] flex">
        <div className="w-[280px]">
          <b className="text-lg">About</b>
          <p className="mt-3">
          Empower your coding journey with our MetaBlog, designed to streamline your development process. Access a rich set of coding tools, collaborate seamlessly with fellow developers.
          </p>
          <div className="mt-6">
            <p>Email : info@metablog.net</p>
            <p>Phone : 976-2276169</p>
          </div>
        </div>
        <div className="w-[521px]  flex justify-center">
          <div className="flex flex-col">
            <a href="/">Home</a>
            <a href="/blog">Blog</a>
            <a href="/contact">Contact</a>
          </div>
        </div>
        <div className="w-[374px] flex gap-6">
          <FbLogo />
          <TwitterLogo />
          <InstaLogo />
          <Linkedin />
        </div>
      </div>
      <div className="mt-7 border-t-[1px] border-[#DCDDDF]">
       <div className="flex  justify-between mt-7">
         <div>
          <MetaBlogAllRightsLogo />
        </div>
        <div className="flex gap-7">
          <p>Terms of Use</p>
          <p>Privacy Policy</p>
          <p>Cookie Policy</p>
        </div>
       </div>
       
      </div>
    </div>
  );
};
