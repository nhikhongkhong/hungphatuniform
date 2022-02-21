import React from 'react'
import Image from 'next/image'
import { GrLocation } from 'react-icons/gr'
import { LocationMaker } from '@components/icons'
import { Info } from '@assets/info'
import HeaderNavbar from './HeaderNavbar'
import SearchForm from './SearchForm'

const Header = () => {
  return (
    <div className="w-full">
      <div className="w-full bg-gradient-to-b from-green-500 to-green-600">
        <div className="flex justify-between items-center layout h-[40px] ">
          <p className="text-sm italic text-white font-semibold">{Info.welcomeMessage} !</p>
          <p className="text-sm text-white hover:text-yellow-400 flex items-center group">
            <LocationMaker color="" hoverColor="" />
            <span className="ml-2">{Info.companyAddress}</span>
          </p>
        </div>
      </div>
      <div className="layout flex justify-between items-center">
        <div className="flex items-center mr-20">
          <div className="object-cover">
            <Image src="/logo.jpg" alt="logo" width={100} height={100} />
          </div>
          <div className="flex flex-col justify-between ml-2 h-[60px]">
            <h1 className="text-[18px] font-bold w-[200px]">{Info.companyName}</h1>
            <p className="mt-1 text-sm italic">{Info.slogan}</p>
          </div>
        </div>
        <SearchForm />

        <div className="text-right ml-20">
          <p className="text-sm">Hotline tư vấn</p>
          <ul>
            <li>
              <a href={`tel:${Info.hotline}`} className="text-lg text-red-700 font-semibold">
                {Info.hotline}
              </a>
            </li>
            <li>
              <a href={`mailto:${Info.email}`} className="text-sm text-green-700">
                {Info.email}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <HeaderNavbar />
    </div>
  )
}

export default Header
