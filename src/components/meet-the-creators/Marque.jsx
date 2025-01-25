const Marque = () => {
  return (
    <div className="mt-12 flex max-md:flex-col w-full md:items-center overflow-hidden">
      <h1 className="font-customLight text-[1.2rem] w-[14%] text-center text-nowrap text-white">
        Trusted by
      </h1>

      <div className="flex items-center max-sm:gap-10 gap-14 max-sm:w-[100%] w-[90%]">
        <img src="/creators/paramount-white.svg" alt="" className="h-5" />
        <img src="/creators/infinity-white.svg" alt="" className="h-5" />
        <img src="/creators/heroku-white.svg" alt="" className="h-5" />
        <img src="/creators/nodestorm-white.svg" alt="" className="h-5" />
        <img src="/creators/unilever-white.svg" alt="" className="h-16" />
        <img src="/creators/otterbox-white.svg" alt="" className="h-7" />
      </div>
    </div>
  );
};

export default Marque;
