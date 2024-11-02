import React from "react";
import Image from "next/image";
import WhyUs from "@/components/Why-Us";

const Page = () => {
  return (
    <div className="relative">
      <div className="w-full h-[33rem] flex justify-center items-center relative">
        <div className='absolute inset-0 bg-[url("/static/download.jpg")] bg-cover blur-sm shadow-2xl'></div>
        <div className=" flex justify-center items-center relative">
          <center>
          <h1 className="text-5xl max-[590px]:text-4xl max-[400px]:text-[2rem] w-[80%] max-[590px]:w-[95%] text-white font-sans font-bold shadow-inner">
            JOIN <span className="text-black">FITNESS</span><span className="text-red-800">HUB</span> WHERE EVERY <span className="text-white">WORKOUT</span> IS STEP TOWARD <span className="text-red-800">GEARTNESS</span>.
          </h1>
          </center>
        </div>
      </div>

      <div className="w-[100%] flex justify-center items-center">
        <Image
          src="/static/onwerfitness.avif"
          alt="banner"
          objectFit="cover"
          // layout="responsive"
          className=" w-auto h-auto "
          width={8000}
          height={1000}
          // layout="responsive"
        />
      </div>

      <WhyUs />
    </div>
  );
};

export default Page;
