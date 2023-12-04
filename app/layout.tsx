import type { Metadata } from 'next'
import { Be_Vietnam_Pro, IBM_Plex_Sans, Inter } from 'next/font/google'
import './globals.css'

import Navbar from './components/navbar'
import Footer from './components/footer'

const vietnam = Be_Vietnam_Pro({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-vietnam",
});

const plexMono = IBM_Plex_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://matthewguo.com'),
  title: "Matthew Guo",
  description: "Matthew Guo's internet home",
  openGraph: {
    title: "Matthew Guo",
    description: "Matthew Guo's internet home ",
    url: "https://matthewguo.com",
    images: "https://matthewguo.com/favicon.ico",
    siteName: "Matthew Guo",
    locale: "en-US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${vietnam.variable} font-sans text-neutral-800  ${plexMono.variable} font-ibm bg-white `}
      >
        <Navbar/>
          <div className='mt-36 md:mt-28 mb-48 mx-4 md:w-[742px] md:mx-auto'>{children}</div>
        <Footer/>
      </body>
    </html>
  );
}