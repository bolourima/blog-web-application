import React from "react";

export const ZohiosonHun = () => {
  return (
    <div>
      <div className="flex items-center ">
        <img
          className="h-9 w-9 rounded-full"
          src={article.user.profile_image}
          alt=""
        />
        {article.user.name}
      </div>
    </div>
  );
};
