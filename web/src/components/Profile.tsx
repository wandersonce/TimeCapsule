import { getUser } from '@/lib/auth'
import { User } from 'lucide-react'
import Image from 'next/image'

function Profile() {
  const {name, avatarUrl} = getUser()

  return (
    <div 
    className="flex items-center gap-3 text-lef">
    <Image src={avatarUrl} width={40} height={40} alt={name} className='h-10 w-10 rounded-full' />

    <p className='text-sm leading-snug w-full max-w-[160px]'>
      {name}    
      <a href="" className='block text-red-400 hover:text-red-300'>Sign out</a>
    </p>
  </div>
  )
}

export default Profile