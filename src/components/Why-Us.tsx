import React from "react";
import Link from "next/link";

const WhyUs = () => {
  return (
    <div>
      <div className="flex bg-black justify-center items-center">
        <h1 className="text-5xl max-[590px]:text-4xl max-[400px]:text-[2rem] m-5 font-sans text-white font-bold">
          WHY <span className="text-red-800 shadow-2xl shadow-red-800 shadow-inner">CHOOSE</span> US
        </h1>
      </div>
      <div className="w-full bg-black flex justify-around items-center max-[768px]:flex-col max-[1400px]:w-[100%]">
        <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[23rem] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[1000px]:h-[75vh] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[23rem] cursor-pointer max-[1400px]:w-[20rem] shadow-2xl flex hover:scale-[0.9] justify-center transition-all duration-[1s] items-center overflow-hidden flex-col rounded-[2rem] my-7 relative">
          <div className=" w-full h-full overflow-hidden bg-cyan-950 bg-[url('/static/bg1.avif')] blur-sm bg-cover bg-center"></div>

          <div className="absolute flex-col flex justify-center items-center text-white">
            <h1 className="m-3 text-2xl font-sans font-bold">Discipline</h1>
              <center>
            <p className="px-3 font-sans ">
                At our gym, discipline is the heartbeat that drives every
                member. With each lift and stride, we keep our focus sharp,
                pushing limits with unwavering commitment. There are no
                shortcuts here only grit, grace, and the pursuit of personal
                strength. Empowering each other to reach new heights, we build
                resilience and find strength of mind and spirit.
            </p>
              </center>
          </div>
        </div>

        <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[23rem] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[1000px]:h-[75vh] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[23rem] max-[1400px]:w-[20rem] shadow-2xl flex hover:scale-[0.9] justify-center cursor-pointer transition-all duration-[1s] items-center overflow-hidden flex-col rounded-[2rem] my-7 relative">
          <div className=" w-full h-full overflow-hidden bg-cyan-950 bg-[url('/static/bg2.jpg')] blur-sm bg-cover bg-center"></div>

          <div className="absolute flex-col flex justify-center items-center text-white">
            <h1 className="m-3 text-2xl font-sans font-bold">Equipments</h1>
            <center><p className="px-3 font-sans ">
             At our gym, we provide the latest state-of-the-art equipment to elevate your workouts. Our advanced machines cater to all fitness levels, ensuring you have the best resources available. Whether you’re a beginner or a seasoned athlete, our top-tier equipment empowers effective training. Here, achieving your fitness goals is a promise we stand by.
            </p>
              </center>
          </div>
        </div>


        <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[23rem] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[1000px]:h-[75vh] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[23rem] max-[1400px]:w-[20rem] shadow-2xl flex hover:scale-[0.9] justify-center cursor-pointer transition-all duration-[1s] items-center overflow-hidden flex-col rounded-[2rem] my-7 relative">
          <div className=" w-full h-full overflow-hidden bg-cyan-950 bg-[url('/static/bg3.avif')] blur-sm bg-cover bg-center"></div>

          <div className="absolute flex-col flex justify-center items-center text-white">
            <h1 className="m-3 text-2xl font-sans font-bold">Certified Coaches</h1>
              <center>
            <p className="px-3 font-sans ">
              At our gym, our best-qualified trainers are dedicated to your success. With years of experience, they provide personalized guidance tailored to your fitness goals. They stay updated on the latest training techniques to ensure safe and effective workouts. With their support, you will find the motivation to achieve your fitness aspirations.
            </p>
              </center>
          </div>
        </div>

      </div>
      <div className="w-full flex justify-center items-center my-5"><Link href={"/About"}><button className="text-xl mb-5 rounded-md p-2 max-[400px]:text-[1rem] max-[400px]:p-1.5 bg-red-800 hover:shadow-2xl hover:shadow-red-800 text-white hover:scale-90 transition-all duration-[0.5s]">READ MORE</button></Link></div>
    </div>
  );
};

export default WhyUs;
