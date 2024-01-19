"use client"

import Image from 'next/image'

import SignUpButton from './components/signupbutton'

// import useScrollPosition from './components/useScrollPosition'
// import { useEffect } from 'react'

export default function Home() {
  // const scroll = useScrollPosition()

  // useEffect(()=>{
  //   document.getElementById('logo')!.style.translate! = `(${scroll}px, 0px)`


  // },[scroll])

  return (
<main className='h-[calc(100dvh)]'>
    <div className='w-full h-full absolute z-0'>
      <Image src='/yoasobi.webp' alt='yoasobi logo' fill className='object-cover'></Image>
    </div>

    <div id='logo' className='left-0 right-0 w-2/3 h-1/2 mx-auto   absolute z-0'>
      <Image src='/logo.png' alt='yoasobi logo' fill className='object-contain mx-auto'></Image>
    </div>

    <div className='relative flex flex-col items-center justify-center z-50 h-full space-y-8'>
      <h1 className='font-mono text-2xl font-medium text-white  text-shadow '>Coming Soon</h1>
      <SignUpButton text='Sign up for updates!' ></SignUpButton>
    </div>
</main>
  )
}
