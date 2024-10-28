"use client"
import React from 'react'
import Link from 'next/link'
import { TiThMenu } from "react-icons/ti";

// import { ImCross } from "react-icons/im";
// import { useState } from 'react';


const Header = () => {
  return (
    <>
    <div className='relative w-full h-[14vh]'>
      <div className='w-full h-[14vh] bg-black absolute blur-xl'></div>
    <div className='w-full absolute h-[14vh] flex justify-between items-center'>
      <h1 className='ml-5 text-red-800 text-4xl font-bold font-sans max-[400px]:text-3xl'>FITNESS <span className='text-white'>HUB</span></h1>
      <ul className='flex mr-5 max-[670px]:hidden'>
        <Link href={"/"}><li className='m-5 max-[780px]:m-2 font-sans text-xl font-bold text-white hover:scale-125 cursor-pointer transition-all duration-[0.5s] hover:text-red-900'>Home</li></Link>
        <Link href={"/About"}><li className='m-5 max-[780px]:m-2 font-sans text-xl font-bold text-white hover:scale-125 cursor-pointer transition-all duration-[0.5s] hover:text-red-900'>About</li></Link>
        <Link href={"/Pakages"}><li className='m-5 max-[780px]:m-2 font-sans text-xl font-bold text-white hover:scale-125 cursor-pointer transition-all duration-[0.5s] hover:text-red-900'>Membership</li></Link>
        <Link href={"/Contact"}><li className='m-5 max-[780px]:m-2 font-sans text-xl font-bold text-white hover:scale-125 cursor-pointer transition-all duration-[0.5s] hover:text-red-900'>Contact</li></Link>
      </ul>
      </div>
      <Link href={"/Menu"}> <TiThMenu className='cursor-pointer absolute right-0 top-4 hidden mr-6 text-red-800 text-3xl max-[670px]:block' /></Link>

    </div>
    
    </>
  )
}

export default Header
