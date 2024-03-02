import logoSingle from "../../assets/logo-single.png";

import React from "react";

export const Header = () => {
  return (
    <div className="md:absolute p-1 flex ">
      <img
        className="inline h-8 rounded-full mb-4 shrink-0"
        src={logoSingle}
        alt="logo roundpeople"
      />
      <span className="font-black ">ROUND</span>
      <span>PEOPLE</span>
    </div>
  );
};
