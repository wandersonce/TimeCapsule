import './globals.css'
import { Roboto_Flex as Roboto, Bai_Jamjuree as Baijamjuree } from 'next/font/google'

import {cookies} from 'next/headers'

import Copyright from '@/components/Copyright'
import EmptyMemories from '@/components/EmptyMemories'
import Hero from '@/components/Hero'
import SignIn from '@/components/SignIn'
import Profile from '@/components/Profile'


const roboto = Roboto({ subsets: ['latin'], variable: '--font-roboto' })
const baijamjuree = Baijamjuree({ subsets: ['latin'], weight: '700' , variable: '--font-bai-jamjuree'})

export const metadata = {
  title: 'Time Capsule',
  description: 'A time capsule created using React, Nextjs and more!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const isAuthenticated = cookies().has('token')

  return (
    <html lang="en">
      <body className={`${roboto.variable} ${baijamjuree.variable} font-sans bg-gray-900 text-gray-100`}>
        
        <main className="grid grid-cols-2 min-h-screen">
      {/* Left Column */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      
        {/* Stripes*/}
        <div className="absolute right-2 top-0 w-2 bg-stripes h-full" />

          {isAuthenticated ? <Profile /> : <SignIn />}
          <Hero />
          <Copyright />
          
      </div>

      {/* Right Column */}
      <div className="flex flex-col max-h-screen overflow-y-scroll bg-[url(../assets/bg-stars.svg)] bg-cover">
        {children}
      </div>
    </main>
      </body>
    </html>
  )
}
