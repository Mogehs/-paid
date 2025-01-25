import React from "react";

const Marque = () => {
  return (
    <div className="mt-12 flex max-md:flex-col w-full md:items-center overflow-hidden">
      <h1 className="font-customLight text-[1.2rem] w-[14%] text-center text-nowrap">
        Trusted by
      </h1>

      <div className="flex items-center max-sm:gap-10 gap-14 max-sm:w-[100%] w-[90%]">
        <img src="/creators/infinity.svg" alt="" className="h-5" />
        <img src="/creators/sephora.svg" alt="" className="h-5" />
        <img src="/creators/henkein.svg" alt="" className="h-5" />
        <img src="/creators/nodestorm.svg" alt="" className="h-5" />
        <img src="/creators/unilever.svg" alt="" className="h-16" />
        <img src="/creators/paramount.svg" alt="" className="h-7" />
      </div>
    </div>
  );
};

export default Marque;
