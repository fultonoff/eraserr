import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

const SideNav = () => {
  return (
    <div className='bg-gray-100 h-screen fixed w-64 border-r p-6'>

        <div className='flex items-center gap-3 hover:bg-gray-200 p-3 rounded-lg cursor-pointer'>
        <Image src='/logo-1.png' alt='logo' width={40} height={40}/>
        <h2 className='flex gap-2 item-center font-bold text-[17px]'> Team name<ChevronDown/></h2>

        </div>
    </div>
  )
}

export default SideNav