import React from "react";

const Header = () => {
  return (
    <div>
      {/* <div
        className="flex flex-row justify-between w-[317px] pl-[21px] pr-[21px] pt-[25px] mx-auto
      md:w-[872px] md:pr-[41px] md:pl-[41px] md:pt-[27px] lg:w-[1410px] lg:pt-[48px] lg:pl-[225px] lg:pr-[225px] border border-red-600
      "
      > */}

      <img
        src="/img/homeicon.png"
        className="w-[23px] h-[23px] md:w-[38px] md:h-[29px] lg:w-[43px] lg:h-[45px] absolute lg:top-[48px] lg:left-[255px]  "
      />
      <img
        src="/img/herologo.png"
        className="w-[90px] h-[26px] md:h[52px] md:w-[180px] lg:w-[210px] lg:h-[60px] absolute lg:top-[45px] lg:left-[855px] 
        lg:drop-shadow-[0px_1.45676px_1.45676px_rgba(0, 0, 0, 0.25)] md:top-[22px] md:left-[390px] md:drop-shadow-[0px_0.728377px_0.728377px_rgba(0, 0, 0, 0.25)];"
      />
      <img
        src="/img/menu.png"
        className="w-[23px] h-[18px] md:h[29px] md:w-[38px] lg:w-[41px] lg:h-[31px]  absolute  lg:right-[255px] lg:top-[48px]"
        id="menu"
      />
    </div>
    // </div>
  );
};

export default Header;
