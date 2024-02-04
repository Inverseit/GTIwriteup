import React from "react";

interface numProp {
  num: string | number;
  unit: string;
  flip: boolean;
}

export const NumberBox = ({ num, unit, flip }: numProp) => {
  return (
    <div className="flex font-mono flex-col drop-shadow-xl items-center mt-4 px-2">
      <div className="relative bg-transparent flex flex-col items-center justify-center rounded-lg w-48 h-48 text-2xl md:text-4xl mt-4 ">
        <div className="rounded-t-lg rounded-b-lg bg-white w-full h-full"></div>

        <div className="text-5xl absolute text-cmured z-10 font-bold font-redhat md:text-9xl  ">
          {num}
        </div>

        <div className=" rounded-b-lg rounded-t-lg bg-white w-full h-full mt-0.5 border-white"></div>

        <div
          className={`absolute w-full h-1/2 top-0 rounded-t-lg z-5 ${
            unit.toLowerCase() !== "seconds" && flip
              ? "animate-flip bg-cmuhand"
              : "bg-transparent"
          }`}
        ></div>
        {/* Two Small Dots
        <div className="absolute -right-1 top-[90px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div>
        <div className="absolute -left-1 top-[90px] rounded-full w-[12px] h-[12px] bg-[#1e1f29]"></div> */}
      </div>
      <p className="text-lg mt-3 font-semibold text-black font-mono  dark:text-white md:text-2xl ">
        {unit} 
      </p>
    </div>
  );
};
