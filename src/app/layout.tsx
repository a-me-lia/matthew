import './globals.css'
import type { Metadata } from 'next'
import { Inter, IBM_Plex_Mono } from 'next/font/google'
import Link from 'next/link';

const inter = Inter({ subsets: ['latin'] , variable:"--font-inter"})

const plexMono = IBM_Plex_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-ibm",
});


export const metadata: Metadata = {
  title: "Matthew Guo",
  description: "Matthew Guo ] Coming Soon!",
  keywords: ['Matthew', 'Guo', 'MAtthew Guo', 'Engineering', 'Embedded Systems'],
  openGraph: {
    title: "Matthew Guo",
    description: "Matthew Guo ] Coming Soon!",
    url: "https://matthewguo.com",
    images: "https://matthewguo.com/favicon.ico",
    siteName: "matthewguo.com",
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
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-neutral-800  ${plexMono.variable} font-ibm`}>{children}
      <p className='text-white z-50 text-opacity-30 text-[12px] absolute bottom-2 left-2'>Matthew Guo @ <Link className='hover:underline' href='https://matthewguo.com'>Website</Link></p></body>
    </html>
  )
}
