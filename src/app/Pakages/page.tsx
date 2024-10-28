import React from 'react'

const About = () => {
  return (
    <div>
      <div className="w-full my-[5rem] bg-black flex justify-around items-center max-[768px]:flex-col max-[1400px]:w-[100%]">
        <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[23rem] cursor-pointer max-[1400px]:w-[20rem] shadow-2xl flex justify-center items-center overflow-hidden flex-col rounded-[2rem] my-7 relative">
          <div className=" w-full h-full overflow-hidden bg-cyan-950 bg-[url('/static/eme1.jpg')] blur-sm bg-cover bg-center"></div>

          <div className="absolute flex-col flex justify-center items-center text-white">
            <h1 className="m-3 text-2xl font-sans font-bold">Weekly Membership</h1>
              <center>
            <p className="px-3 font-sans ">
            Our weekly package offers flexibility without the long-term tie-in. Perfect for those on the go this plan provides access to our facilities and equipment. Whether jumpstarting your fitness journey or maintaining progress our weekly package makes fitness accessible and achievable.
            </p>
              </center>
              <button className=" m-5 rounded-md font-bold p-2 bg-red-900 text-white hover:scale-90 transition-all duration-[0.5s]">PURCHASE</button>
          </div>
        </div>

        <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[23rem] max-[1400px]:w-[20rem] shadow-2xl flex justify-center cursor-pointer items-center overflow-hidden flex-col rounded-[2rem] my-7 relative">
          <div className=" w-full h-full overflow-hidden bg-cyan-950 bg-[url('/static/eme2.png')] blur-sm bg-cover bg-center"></div>

          <div className="absolute flex-col flex justify-center items-center text-white">
            <h1 className="m-3 text-2xl font-sans font-bold">Monthly Membership</h1>
            <center><p className="px-3 font-sans ">
             
Our monthly package offers flexibility with added commitment. Ideal for those seeking consistency this plan provides full access to our facilities and equipment. Whether you are building new habits or enhancing your routine our monthly package makes fitness accessible and sustainable.
            </p>
              </center>
              <button className=" m-5 rounded-md font-bold p-2 bg-red-900 text-white hover:scale-90 transition-all duration-[0.5s]">PURCHASE</button>
          </div>
        </div>


        <div className="h-[60vh] w-[27rem] max-[786px]:h-[60vh] max-[768px]:h-[auto] max-[768px]:w-[20rem] max-[1000px]:w-[30vw] max-[850px]:w-[15rem] shadow-black max-[400px]:w-[18rem] max-[400px]:h-[23rem] max-[1400px]:w-[20rem] shadow-2xl flex justify-center cursor-pointer items-center overflow-hidden flex-col rounded-[2rem] my-7 relative">
          <div className=" w-full h-full overflow-hidden bg-cyan-950 bg-[url('/static/eme3.jpg')] blur-sm bg-cover bg-center"></div>

          <div className="absolute flex-col flex justify-center items-center text-white">
            <h1 className="m-3 text-2xl font-sans font-bold">Annual Membership</h1>
              <center>
            <p className="px-3 font-sans ">
            Our yearly package offers the ultimate commitment to long-term fitness. Perfect for those dedicated to ongoing progress this plan provides full access to our facilities and equipment. Whether you are aiming for transformation or steady improvement our yearly package makes fitness a lasting lifestyle choice.
            </p>
            
              </center>
              <button className=" m-5 rounded-md font-bold p-2 bg-red-900 text-white hover:scale-90 transition-all duration-[0.5s]">PURCHASE</button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default About
