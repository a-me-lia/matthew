"use client"

import Image from 'next/image'

import SignUpButton from './components/signupbutton'



export default function Home() {


  return (
<main className='h-[calc(100dvh)]'>
    <div className='w-full h-full absolute z-0'>
      <Image src='/yoasobi.webp' alt='yoasobi' fill className='object-cover'></Image>
    </div>

    <div className='relative flex flex-col items-center justify-center z-50 h-full space-y-8'>
      <h1 className='font-mono md:text-7xl text-2xl font-medium text-white  text-shadow '>Coming Soon</h1>
      <SignUpButton text='Sign up for updates!' ></SignUpButton>
    </div>
</main>
  )
}
