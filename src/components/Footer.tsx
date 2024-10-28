import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="">
      <div className="w-full h-[auto] flex justify-center items-center bg-black relative">
        <div className='absolute inset-0 bg-[url("/static/footer.webp")] bg-center bg-cover blur-sm shadow-2xl'></div>

        <div className=" flex w-full h-full justify-around items-center max-[768px]:flex-col-reverse relative">
          <div className="w-[25rem] max-[440px]:w-[90vw] max-[768px]:my-10 h-[90%] bg-slate-500">
            <Image
              src={"/static/map.jpg"}
              alt="map"
              width={500}
              height={300}
              className="w-full h-full"
            />
          </div>
          <div className="flex flex-col max-[768px]:my-10">
            <h1 className=" text-red-800 max-[440px]:text-4xl text-5xl font-bold font-sans">
              FITNESS <span className="text-white"><span className="max-[768px]:bg-black px-3 rounded-md">HUB</span></span>
            </h1>
            <p className="text-xl font-bold max-[440px]:text-[1rem] text-white">
              <span className="max-[768px]:text-black">TRAIN HARD STAY STRONG</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
