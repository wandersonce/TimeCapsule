import { User } from 'lucide-react'
import Image from 'next/image'

import nlwLogo from '../assets/nlw-spacetime-logo.svg'

export default function Home() {
  return (
    <main className="grid grid-cols-2 min-h-screen">
      {/* Left Column */}
      <div className="relative flex flex-col items-start justify-between px-28 py-16 overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />
      
        {/* Stripes*/}
        <div className="absolute right-2 top-0 w-2 bg-stripes h-full" />

        {/* Sign In*/}
        <a href="" className="flex items-center gap-3 text-left hover:text-gray-50 transition-colors">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-400">
            <User className='h-5 w-5 text-gray-500' />
          </div>

          <p className='text-sm leading-snug w-full max-w-[160px]'>
              <span className='underline'>Create your account</span> and save your memories!
            </p>
        </a>

        {/* Hero*/}
        <div className='space-y-5'>
          <Image src={nlwLogo} alt="Nlw Time Capsule" />

          <div className='max-w-[420px] space-y-4'>
            <h1 className=' text-5xl font-bold leading-tight text-gray-50'>Your Time Capsule</h1>
            <p className='mt-1 text-lg leading-relaxed'>Collect memorable moments from your journey and share with the world!</p>
          </div>

          <a className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600' href="">REGISTER MEMORIES</a>
        </div>

        {/* Copyright*/}
        <div className='text-sm leading-relaxed text-gray-200'>
          Made with ❤️ with NextJs
        </div>
      </div>

      {/* Right Column */}
      <div className="flex flex-col p-16  bg-[url(../assets/bg-stars.svg)] bg-cover">
        <div className="flex flex-1 items-center justify-center">
          <p className="text-center leading-relaxed w-[300px]">You haven't registered any memories,
            <a className="underline hover:text-gray-50" href=""> start now!</a> 
          </p>
        </div>
      </div>
    </main>
  )
}
