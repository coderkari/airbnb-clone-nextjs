import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/solid'
import { GlobeAltIcon, MenuIcon } from '@heroicons/react/outline'
import { useState, useEffect } from 'react'

function Header() {
  const [show, setShow] = useState(false)
  const headerBgHandler = () => {
    if (window.scrollY >= 100) {
      setShow(true)
    } else {
      setShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', headerBgHandler)
    return () => window.removeEventListener('scroll', headerBgHandler)
  }, [])
  return (
    <header className={`${show ? 'stickyBg' : 'fixedBg'}`}>
      <div className="grid grid-cols-7 lg:grid-cols-3 p-2 max-w-7xl mx-auto ">
        <div className="hidden sm:inline-flex relative w-24 cursor-pointer">
          <Image
            objectFit="contain"
            objectPosition="left"
            src={'/logo.svg'}
            layout="fill"
          />
        </div>
        <div className="flex items-center col-span-3 lg:col-auto p-2 hover:shadow-lg rounded-full cursor-pointer ring-1">
          <input
            className="outline-none placeholder-black flex-1 pl-3 bg-transparent font-semibold"
            type="text"
            placeholder="Start your search"
          />
          <SearchIcon className="h-8 bg-[#ff385c] object-contain p-2 text-white rounded-full" />
        </div>
        <div className="flex items-center col-span-3 lg:col-auto justify-end">
          <div className="flex items-center">
            <p className="hover:bg-gray-100 rounded-full p-2 whitespace-nowrap">
              Become a host
            </p>
            <GlobeAltIcon className="hover:bg-gray-100 rounded-full p-3 h-11 object-contain ml-2" />
          </div>
          <div className="flex items-center ml-2 p-2 cursor-pointer rounded-full ring-1 hover:shadow-lg bg-gray-100 space-x-3">
            <MenuIcon className="h-6 object-contain" />
            <img
              className="rounded-full ml-2"
              src={
                'https://media.istockphoto.com/vectors/default-placeholder-man-vector-id844000458?b=1&k=6&m=844000458&s=612x612&w=0&h=AVkS41pQt_z5_7aDjPuU0OlcCe0-ZWK7agbV5ChNPSY='
              }
              width={25}
              height={25}
            />
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
