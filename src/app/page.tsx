"use client"

import Image from 'next/image'

import SignUpButton from './components/signupbutton'



export default function Home() {


  return (
<main className='h-[calc(100dvh)]'>
    <div className='w-full h-full absolute z-0'>
      <Image src='/c.png' alt='PYM-A1' fill className='object-cover'></Image>
    </div>

    <div className='relative flex flex-col items-center justify-center z-50 h-full space-y-8'>
      <h1 className='font-mono md:text-7xl text-2xl font-medium text-white  text-shadow '>Coming Soon</h1>
      <h1 className=' font-medium text-white text-2xl'>Scroll down for CV :p</h1>
      <SignUpButton text='Sign up for updates!' ></SignUpButton>
    </div>

    <div className='md:w-2/3 mx-auto mx-6 mt-16 pb-32'>
    <h1 className="mt-4 mb-2 font-bold text-6xl">Matthew Guo</h1>
    <h3 className="mb-2 mt-2 font-medium">CV - Markdown Version - ver.2024.01.02A</h3>
    <p className="mb-2">Tel: +1 (919) 909 8638<br/>
      E-mail (primary): <a href="mailto:matthewguo.x86@gmail.com" className="text-blue-500">matthewguo.x86@gmail.com</a><br/>
      E-mail (business): <a href="mailto:matthew@paisleymicrosystems.com" className="text-blue-500">matthew@paisleymicrosystems.com</a><br/>
      Personal site: <a href="http://matthewguo.com" className="text-blue-500">matthewguo.com</a><br/>
      Business site: <a href="http://paisleymicrosystems.com" className="text-blue-500">paisleymicrosystems.com</a><br/>
      Location: Morrisville, North Carolina [EST]</p>
    <hr className="my-4"/>
    <h2 className="mt-12 mb-4 font-medium text-2xl">Skills</h2>
    <h3 className="mb-2 mt-2 font-medium">Machine languages</h3>
    <p className="mb-2">Highly proficient in C, C++, Java, JS/TS, and experience in ASM (ARM), Rust, Python, and Perl</p>
    <h3 className="mb-2 mt-2 font-medium">Machine and cloud frameworks and architectures</h3>
    <p className="mb-2">Proficient in STM32 RTOS, Node.JS, Next.JS, React, Node-RED and C/C++ CUDA frameworks<br/>
      Experience in AWS services including EC2/Lambda compute, S3, Dynamo and API Gateway</p>
    <h3 className="mb-2 mt-2 font-medium">Hardware Experience</h3>
    <p className="mb-2">Highly experienced and proficient in the analysis, debugging and verification of chip-to-chip protocols such as U(S)ART, I2C, SPI using spectrum analysis and JTAG boundary scan tools.</p>
    <p className="mb-2">Experience in design of hardware PHYs for USB3.2, PCIe 3.0, Ethernet 2500, HDMI/DSP and DSI/CSI LVDS and ETH PHY MPII ultra-high-speed protocols.</p>
    <h3 className="mb-2 mt-2 font-medium">Client Facing Skills</h3>
    <p className="mb-2">Excellent at achieving understanding of a technical solution in a team among all levels of<br/>
      technicality as well as to non-technical clients, and meeting consistent, accurate time predictions</p>
    <h2 className="mt-12 mb-4 font-medium text-2xl">Employment</h2>
    <p className="mb-2">References for all experiences available upon request</p>
    <h3 className="mb-2 mt-2 font-medium">Founder, CEO/CTO</h3>
    <h4 className="mb-2">Paisley Microsystems - winter 2023 to present - part time</h4>
    <ul className="list-disc ml-8 mb-2">
      <li>Engineered innovative, industry-new embedded systems products to sell to developers, systems designers, researchers and educators.</li>
      <li>Designed PCB’s with complex signaling and noise requirements, with up to PCI-e Gen 3.0 and HDMI/DSP LVDS, designed around circuits made cost-consciously while not sacrificing product quality.</li>
      <li>Coordinated all procurement work, making engineering/design decisions in parallel with sourcing components from overseas markets and many suppliers.</li>
      <li>Led marketing strategy in order to target varied markets, often with the same product.</li>
    </ul>
    <h3 className="mb-2 mt-2 font-medium">Software, Embedded Systems Engineering</h3>
    <h4 className="mb-2">Botbuilt inc. - fall 2023 to present - part time</h4>
    <ul className="list-disc ml-8 mb-2">
      <li>Delivered mission-critical embedded systems solutions based on the STM32 and Broadcom PSoC architectures used to control and drive machines for truss building operations.</li>
      <li>Responsible for the entirety of the electronic hardware development pipeline from schematic creation to design and testing of PCBs for both power and embedded computing systems</li>
      <li>Led the development of custom industrial-grade scalable IoT equipment in conjunction with networking solutions to suit the exact needs of Botbuilt’s operations and significantly cut costs</li>
      <li>Developed programs in ASM/C, C++ and Rust to run microcontroller systems, including the STM32 and Expressif32/8266 PSoCs to accelerate operations tasks with telemetry and control systems.</li>
      <li>Designed electronic systems encompassing a wide spectrum of design rule constraints, including high-precision analog signals, high-speed digital signals, and microvolt-precision instrumentation.</li>
      <li>Seamlessly switched on a day-to-day basis between highly technical and non-technical environments moving between development and sales environments, as well as constantly keeping company leaders informed on formal as well as impromptu events.</li>
    </ul>
    <h3 className="mb-2 mt-2 font-medium">Full Stack Web Design &amp; Development</h3>
    <h4 className="mb-2">no employer : self-employed - spring 2022 to winter 2023 - freelance</h4>
    <ul className="list-disc ml-8 mb-2">
      <li>Effectively communicated technical ideas, evaluated frameworks and sold complete solutions to non-technical clients 3 Created fast, responsive and interactive web apps to suit clients’ exact needs-</li>
      <li>Gained experience in client acquisition, as well as effective sales and communications-</li>
      <li>Worked with the fastest web frameworks with custom REST APIs, and consistently implemented best practices to optimize visitor experience</li>
      <li>Past work includes various artists including Andrew Krasnow and the Cary Chinese School</li>
      <li>Rapidly delivered a live app application to securely meet four nines reliability to coordinate pick-up times between hundreds of concurrent users for the Cary Chinese School summer program.</li>
    </ul>
    <h2 className="mt-12 mb-4 font-medium text-2xl">Select Projects</h2>
    <h3 className="mb-2 mt-2 font-medium">Jack Stand PCB controller/driver</h3>
    <p className="mb-2">Purpose: To create the controller for Botbuilt’s truss building jack stands and achieve high reliability with a STM32/RTOS system. A PCB supporting an STM32 SoC, UART/HSI peripherals and power stepper motor drivers was designed for low quiescent power consumption. The development and procurement was under a tight deadline in order to utilize it in a demonstration to shareholders.</p>
    <h3 className="mb-2 mt-2 font-medium">DRSS Tesla Coil (DRSSTC)</h3>
    <p className="mb-2">Purpose: To achieve a deeper understanding of Radio Frequency high power electronics through designing a solid state Tesla coil. Valuable real-world experience was gained from designing and building a 2.5kW double resonant solid state Tesla coil. A digital controller was later custom built on the ATMEL microcontroller platform to support remote control through an optic fiber link.</p>
    <h2 className="mt-12 mb-4 font-medium text-2xl">General References</h2>
    <h3 className="mb-2 mt-2 font-medium">Colin Devine</h3>
    <p className="mb-2">Co-Founder, COO of Botbuilt inc.<br/>
      email: <a href="mailto:colin@botbuilt.com" className="text-blue-500">colin@botbuilt.com</a></p>
    <h3 className="mb-2 mt-2 font-medium">Sam Marcom</h3>
    <p className="mb-2">Founder, CEO of CN-seamless<br/>
      contact info on request</p>
    <h3 className="mb-2 mt-2 font-medium">Jack Holley</h3>
    <p className="mb-2">Electrical Engineering Directory, Valium<br/>
      contact info on request</p>
    <h2 className="mt-12 mb-4 font-medium text-2xl">Awards/Certifications</h2>
    <h3 className="mb-2 mt-2 font-medium">Amazon Web Services</h3>
    <p className="mb-2">Solutions architect (CO-03) [EXPECTED 24/02/01]</p>
    <h3 className="mb-2 mt-2 font-medium">2023 North American Virtuoso Piano Competition</h3>
    <p className="mb-2">Youth, 2nd Prize</p>
    <h3 className="mb-2 mt-2 font-medium">2024 MAA AMC 12</h3>
    <p className="mb-2">AIME qualifier</p>
    <h3 className="mb-2 mt-2 font-medium">2021 MAA AMC 8</h3>
    <p className="mb-2">Distinguished Honor Roll</p>
    <h2 className="mt-12 mb-4 font-medium text-2xl">Education</h2>
    <h3 className="mb-2 mt-2 font-medium">Durham Academy HS</h3>
    <p className="mb-2">Expected GPA 3.9/4.0<br/>
      Expected graduation June 2025</p>
    <p className="mb-2">Relevant coursework:<br/>
      AP Computer Science A: 5.0/5.0</p>
  </div>
</main>
  )
}
