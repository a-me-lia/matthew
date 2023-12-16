"use client"

import Image from "next/image"
import { use, useState } from "react"
import { useEffect } from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Page(){

    const [shown, setShown] = useState(false)




    return(
        <>
        <Link 
        activeClass="active" 
        to="next" 
        spy={true} 
        smooth={true} 
        duration={500} 
      >
        <div className="flex flex-col min-h-[200vh] h-96" onMouseEnter={()=>{setShown(true)}}>
            <div className="absolute w-full h-full z-0">
                <Image src='/weather.jpg' fill alt='falling from the sky' className="object-cover"></Image>
            </div>

            <div className={`${shown ? 'opacity-100' : 'opacity-0'} z-50 transition-all duration-[2500ms] mx-auto flex flex-col items-center mt-36`}>
                <h1 className="text-7xl font-medium text-white">Welcome to Serendipity</h1>
                <div className={` ${shown ? 'translate-y-96' : 'translate-y-0'} h-12 w-16 transition-all duration-[1500ms] delay-1000`}>       
<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9L12 17L20 9" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
            </div>

        </div>
        </Link>


            <div id='next' className="mt-36 text-xl">hello!</div>
        </>

    )
}