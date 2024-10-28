import React from 'react'
import Link from 'next/link'

const MenuBar = () => {
  return (
    <div>
      <ul className="flex justify-center items-center flex-col">

<Link href={"/"}>
<li className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">HOME</li>
</Link>
<Link href={"/About"}>
<li className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">ABOUT</li>
</Link>
<Link href={"/Pakages"}>
<li className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">MEMBERSHIP</li>
</Link>
<Link href={"/Contact"}>
<li className="w-full h-[15vh] flex justify-center items-center font-bold text-white border-b-[0] border-white my-3.5 text-2xl font-sans">CONTACT</li>
</Link>
</ul>
    </div>
  )
}

export default MenuBar
