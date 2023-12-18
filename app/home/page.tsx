"use client"

import Image from "next/image"
import { use, useState } from "react"
import { useEffect } from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';


export default function Page(){

    const [shown, setShown] = useState(false)




    return(
        <main className="flex flex-col relative min-h-[200vh]">
        <Link 
        activeClass="active" 
        to="next" 
        spy={true} 
        smooth={true} 
        offset={200}
        duration={800} 
      >
        <div className="flex flex-col relative h-screen" onMouseEnter={()=>{setShown(true)}}>
            <div className="absolute w-full h-full z-0">
                <Image src='/weather.jpg' fill alt='falling from the sky' className="object-cover"></Image>
            </div>

            <div className={`${shown ? 'opacity-100' : 'opacity-0'} z-40 transition-all duration-[2500ms] mx-auto flex flex-col items-center mt-36`}>
                <h1 className="text-7xl font-medium text-white">Welcome to Serendipity</h1>
                <div className={` ${shown ? 'translate-y-96' : 'translate-y-0'} h-12 w-16 transition-all duration-[1500ms] delay-1000`}>       
<svg width="64px" height="64px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 9L12 17L20 9" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
</svg></div>
            </div>

        </div>
        </Link>
            <section id="next" className="w-[742px] mx-auto mt-48">
                <h1 className="mb-4 text-[20px]">Hey, it&apos;s Matthew!</h1>
                <p className="mb-4">I enjoy improving the efficiency of everything, performing piano, and taking part-time jobs. </p>
                <p>This website is still a work-in-progress, but you can take a look at some pages up already now. :p</p>
                <ul>
                    {/* <li><Link href=></Link></li> */}
                </ul>
            </section>
        </main>

    )
}