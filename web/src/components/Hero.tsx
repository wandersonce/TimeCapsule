import Image from 'next/image'
import nlwLogo from '../assets/nlw-spacetime-logo.svg'

function Hero() {
  return (
    <div className='space-y-5'>
    <Image src={nlwLogo} alt="Nlw Time Capsule" />

    <div className='max-w-[420px] space-y-4'>
      <h1 className=' text-5xl font-bold leading-tight text-gray-50'>Your Time Capsule</h1>
      <p className='mt-1 text-lg leading-relaxed'>Collect memorable moments from your journey and share with the world!</p>
    </div>

    <a className='inline-block rounded-full bg-green-500 px-5 py-3 font-alt text-sm uppercase leading-none text-black hover:bg-green-600' href="">REGISTER MEMORIES</a>
  </div>
  )
}

export default Hero