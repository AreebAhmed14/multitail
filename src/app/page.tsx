import React from "react";
// import Image from "next/image";
import WhyUs from "@/components/Why-Us";

const Page = () => {
  return (
    <div className="relative">
      <div className="w-full h-[30rem] flex justify-center items-center relative">
        <div className='absolute inset-0 bg-[url("/static/download.jpg")] bg-cover blur-sm shadow-2xl'></div>
        <div className=" flex justify-center items-center relative">
          <center>
          <h1 className="text-5xl max-[590px]:text-4xl max-[400px]:text-[2rem] w-[80%] max-[590px]:w-[95%] text-black font-sans font-bold shadow-inner">
          <span className="text-white">JOIN</span> <span className="text-white rounded-md py-0 bg-black px-3">FITNESS</span> HUB WHERE <span className="text-red-800">EVERY</span> <span className="text-white">WORK</span>OUT <span className="text-white">IS</span> STEP <span className="text-red-800">TOWARD</span> <span className="text-white ">GREATNESS</span>
          </h1>
          </center>
        </div>
      </div>

      <WhyUs />
    </div>
  );
};

export default Page;
